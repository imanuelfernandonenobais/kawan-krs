import { Outlet, Link, useLocation } from "@tanstack/react-router";
import { GraduationCap, Bell, Clock, LogOut } from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "@/components/ui/button";

import { MahasiswaStateContext, useMahasiswaFeatureState } from "./state";

export function MahasiswaLayout() {
  const state = useMahasiswaFeatureState();
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <MahasiswaStateContext value={state}>
      <div className="bg-muted/50 text-foreground min-h-screen pb-16 font-sans">
        {/* Top Header Navbar */}
        <header className="border-border bg-background sticky top-0 z-30 border-b shadow-xs">
          <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            {/* Logo & Portal Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-xl shadow-xs">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-foreground text-base font-bold tracking-tight">
                    KawanKRS
                  </span>
                  <Badge variant="secondary">MAHASISWA PORTAL</Badge>
                </div>
              </div>
            </div>

            {/* Right Header Navigation & Profile */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Tab Navigation Pill Switcher */}
              <div className="bg-muted flex flex-wrap items-center rounded-xl p-1 text-xs font-semibold">
                <Link
                  to="/mahasiswa/rekomendasi"
                  activeOptions={{ exact: true }}
                  className={buttonVariants({
                    variant:
                      pathname === "/mahasiswa/rekomendasi"
                        ? "default"
                        : "ghost",
                  })}
                >
                  <span>⚡ Rekomendasi Paket KRS</span>
                </Link>
                <Link
                  to="/mahasiswa/riwayat"
                  activeOptions={{ exact: true }}
                  className={buttonVariants({
                    variant:
                      pathname === "/mahasiswa/riwayat" ? "default" : "ghost",
                  })}
                >
                  <span>📖 Riwayat Studi</span>
                </Link>
              </div>

              <div className="bg-muted text-muted-foreground hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium md:flex">
                <Clock className="text-muted-foreground size-3.5" />
                2024/2025 Ganjil
              </div>

              <Button
                aria-label="Notifikasi"
                variant="ghost"
                size="icon"
                className="relative"
              >
                <Bell data-icon="inline-start" />
                <span className="bg-primary absolute top-1.5 right-1.5 size-2 rounded-full"></span>
              </Button>

              {/* Profile Nadya */}
              <div className="border-border flex items-center gap-2.5 border-l pl-3">
                <div className="relative">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                      alt="Nadya"
                    />
                    <AvatarFallback>NS</AvatarFallback>
                  </Avatar>
                  <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
                </div>
                <div className="hidden text-left text-xs leading-tight lg:block">
                  <p className="text-foreground font-bold">Nadya Salsabila</p>
                  <p className="text-muted-foreground text-[10px]">
                    NIM 2106721094
                  </p>
                </div>

                <Link
                  to="/login"
                  activeOptions={{ exact: true }}
                  title="Keluar / Logout"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                    className: "ml-1",
                  })}
                >
                  <LogOut className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Outlet />

        {/* Persistent Footer */}
        <footer className="border-border text-muted-foreground mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t px-4 pt-6 text-xs sm:px-6 lg:px-8">
          <p>
            KawanKRS • Sistem Perencanaan Studi Cerdas &amp; Rekomendasi KRS
            Mahasiswa • Fakultas Ilmu Komputer UI
          </p>
          <span className="text-foreground flex items-center gap-1.5 font-medium">
            STATUS SERVER: AKTIF{" "}
            <span className="size-1.5 rounded-full bg-emerald-500"></span>
          </span>
        </footer>
      </div>
    </MahasiswaStateContext>
  );
}
