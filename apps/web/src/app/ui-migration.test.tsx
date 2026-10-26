import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createAppRouter } from "./router";

beforeEach(() => {
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

async function openPage(url: string) {
  const router = createAppRouter(
    createMemoryHistory({ initialEntries: [url] })
  );
  await act(async () => {
    render(<RouterProvider router={router} />);
    await router.load();
  });
  return router;
}

describe("shadcn controls and accessibility", () => {
  it("labels login fields, reveals the password without submitting, and autofills demo accounts", async () => {
    await openPage("/login");
    const identifier = screen.getByLabelText(
      "Email Akademik / NIM / NIP"
    ) as HTMLInputElement;
    const password = screen.getByLabelText("Password") as HTMLInputElement;
    expect(password.type).toBe("password");
    fireEvent.click(screen.getByRole("button", { name: "Tampilkan password" }));
    expect(password.type).toBe("text");
    expect(
      screen
        .getByRole("button", { name: "Sembunyikan password" })
        .getAttribute("aria-pressed")
    ).toBe("true");
    fireEvent.click(
      screen.getByRole("button", { name: "Dosen PA: Prof. Wisnu" })
    );
    expect(identifier.value).toBe("wisnu.jatmiko@kawankrs.ac.id");
    expect(password.value).toBe("SecretPassword123");
    const remember = screen.getByRole("checkbox", { name: "Ingat saya" });
    expect(remember.getAttribute("aria-checked")).toBe("true");
    fireEvent.click(remember);
    expect(remember.getAttribute("aria-checked")).toBe("false");
  });

  it("keeps registration consent required and associates each visible field with its label", async () => {
    await openPage("/register");
    for (const label of [
      "Nama Lengkap",
      "Peran Akun",
      "NIM / NIP",
      "Email Akademik",
      "Password",
      "Konfirmasi Password",
    ]) {
      expect(screen.getByLabelText(label)).toBeTruthy();
    }
    const consent = screen.getByRole("checkbox", { name: /Saya menyetujui/ });
    expect(consent.getAttribute("aria-required")).toBe("true");
    fireEvent.click(consent);
    expect(consent.getAttribute("aria-checked")).toBe("true");
  });

  it("supports keyboard SKS changes and announces the selected recommendation", async () => {
    await openPage("/mahasiswa/rekomendasi");
    const slider = screen.getByRole("slider", { name: "Target Beban SKS" });
    fireEvent.keyDown(slider, { key: "ArrowRight" });
    expect(slider.getAttribute("aria-valuenow")).toBe("22");
    fireEvent.click(screen.getByRole("button", { name: "Pilih Paket B" }));
    const dialog = await screen.findByRole("dialog", { name: "Informasi" });
    expect(within(dialog).getByText("Paket B dipilih!")).toBeTruthy();
    fireEvent.click(within(dialog).getByRole("button", { name: "Tutup" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(
      screen
        .getByRole("button", { name: "Pilih Paket B" })
        .getAttribute("aria-pressed")
    ).toBe("true");
    expect(
      screen
        .getByRole("button", { name: "Pilih Paket A" })
        .getAttribute("aria-pressed")
    ).toBe("false");
  });

  it("keeps status and cohort filters controlled when the selected option is clicked again", async () => {
    await openPage("/dosen/mahasiswa");
    const status = screen.getByRole("button", {
      name: "Perlu Pendampingan (3)",
    });
    fireEvent.click(status);
    expect(status.getAttribute("aria-pressed")).toBe("true");
    expect(screen.queryByText("Nadya Salsabila")).toBeNull();
    fireEvent.click(status);
    expect(status.getAttribute("aria-pressed")).toBe("true");
    const cohort = screen.getByRole("button", { name: "2024 (Sem 1)" });
    fireEvent.click(cohort);
    expect(cohort.getAttribute("aria-pressed")).toBe("true");
  });

  it.each(["/mahasiswa/riwayat", "/dosen/mahasiswa/1"])(
    "exposes semester expansion state on %s",
    async (url) => {
      await openPage(url);
      const trigger = screen.getByRole("button", { name: /Semester 6/ });
      expect(trigger.getAttribute("aria-expanded")).toBe("true");
      fireEvent.click(trigger);
      expect(trigger.getAttribute("aria-expanded")).toBe("false");
      fireEvent.click(trigger);
      expect(trigger.getAttribute("aria-expanded")).toBe("true");
      expect(trigger.getAttribute("aria-controls")).toBeTruthy();
    }
  );

  it.each([
    "/admin/mata-kuliah",
    "/admin/biaya",
    "/admin/pengguna",
    "/superadmin/pengguna",
  ])("requires explicit confirmation before deleting on %s", async (url) => {
    await openPage(url);
    const before = screen.getAllByRole("row").length;
    fireEvent.click(
      within(screen.getAllByRole("row")[1]).getByRole("button", {
        name: "Hapus",
      })
    );
    let dialog = await screen.findByRole("alertdialog", {
      name: "Konfirmasi penghapusan",
    });
    fireEvent.click(within(dialog).getByRole("button", { name: "Batal" }));
    await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
    expect(screen.getAllByRole("row").length).toBe(before);
    fireEvent.click(
      within(screen.getAllByRole("row")[1]).getByRole("button", {
        name: "Hapus",
      })
    );
    dialog = await screen.findByRole("alertdialog");
    fireEvent.click(within(dialog).getByRole("button", { name: "Hapus" }));
    await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
    expect(screen.getAllByRole("row").length).toBe(before - 1);
  });

  it("saves lecturer notes and presents existing feedback in a labelled dialog", async () => {
    await openPage("/dosen/mahasiswa/1");
    fireEvent.change(screen.getByLabelText("Tulis Catatan Pendampingan Baru"), {
      target: { value: "Evaluasi beban studi berikutnya." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Simpan Catatan" }));
    const dialog = await screen.findByRole("dialog", { name: "Informasi" });
    expect(
      within(dialog).getByText("Catatan bimbingan berhasil disimpan!")
    ).toBeTruthy();
    fireEvent.click(within(dialog).getByRole("button", { name: "Tutup" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(screen.getByText('"Evaluasi beban studi berikutnya."')).toBeTruthy();
    expect(
      (
        screen.getByLabelText(
          "Tulis Catatan Pendampingan Baru"
        ) as HTMLTextAreaElement
      ).value
    ).toBe("");
  });
});
