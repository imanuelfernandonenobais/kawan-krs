import {
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  Lock,
  MessageSquareText,
  Save,
  UserCircle2,
} from "lucide-react";

const currentCourses = [
  {
    code: "CS401",
    name: "Skripsi / Tugas Akhir",
    meta: "Dosen Pembimbing: Prof. Wisnu Jatmiko",
    status: "Fase: Proposal Disetujui",
    sks: "6 SKS",
    accent: "text-red-600",
    subAccent: "text-emerald-600",
  },
  {
    code: "CS412",
    name: "Machine Learning Lanjutan",
    meta: "Ruang Lab AI 301 • Kelas A",
    status: "Kehadiran: 100%",
    sks: "3 SKS",
    accent: "text-slate-700",
    subAccent: "text-slate-500",
  },
  {
    code: "CS425",
    name: "Etika Profesi & Hukum Siber",
    meta: "Gedung B 2.4 • Kelas B",
    status: "Kehadiran: 92%",
    sks: "2 SKS",
    accent: "text-slate-700",
    subAccent: "text-slate-500",
  },
  {
    code: "CS430",
    name: "Kapita Selekta Kecerdasan Artifisial",
    meta: "Seminar Hall 1 • Kelas A",
    status: "Kehadiran: 100%",
    sks: "3 SKS",
    accent: "text-slate-700",
    subAccent: "text-slate-500",
  },
  {
    code: "CS450",
    name: "Praktik Kerja Lapangan / Magang Industri",
    meta: "PT Tokopedia (Software Eng. Intern)",
    status: "Nilai A (Berjalan)",
    sks: "6 SKS",
    accent: "text-slate-700",
    subAccent: "text-emerald-600",
  },
];

const pathwayItems = [
  {
    title: "Mata Kuliah Wajib",
    desc: "Seluruh mata kuliah dasar telah terpenuhi",
    right: "Selesai",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    iconBg: "bg-emerald-600",
  },
  {
    title: "Minimum SKS",
    desc: "124 dari 144 SKS telah diselesaikan",
    right: "124 SKS",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    iconBg: "bg-emerald-600",
  },
  {
    title: "Tugas Akhir / Skripsi",
    desc: "Sedang berjalan (Bimbingan Bab 3)",
    right: "Proses",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    iconBg: "bg-amber-500",
  },
  {
    title: "Sidang Kelulusan",
    desc: "Belum memenuhi seluruh persyaratan",
    right: "Belum",
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-500",
    iconBg: "bg-slate-400",
  },
];

const semesters = [
  {
    label: "Semester 6 • Genap 2023/2024",
    sks: "20 SKS • 6 Mata Kuliah Lulus",
    ips: "3.80",
    badge: "S6",
  },
  {
    label: "Semester 5 • Ganjil 2023/2024",
    sks: "20 SKS • 6 Mata Kuliah Lulus",
    ips: "3.85",
    badge: "S5",
  },
  {
    label: "Semester 4 • Genap 2022/2023",
    sks: "22 SKS • 6 Mata Kuliah Lulus",
    ips: "3.90",
    badge: "S4",
  },
  {
    label: "Semester 3 • Ganjil 2022/2023",
    sks: "21 SKS • 6 Mata Kuliah Lulus",
    ips: "3.75",
    badge: "S3",
  },
  {
    label: "Semester 2 • Genap 2021/2022",
    sks: "21 SKS • 6 Mata Kuliah Lulus",
    ips: "3.80",
    badge: "S2",
  },
  {
    label: "Semester 1 • Ganjil 2021/2022",
    sks: "20 SKS • 6 Mata Kuliah Lulus",
    ips: "3.85",
    badge: "S1",
  },
];

export default function StudentDetailPage() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9f2020] text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#9f2020]">KawanKRS</h1>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                WORKSPACE PA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
              • T.A. 2024/2025 • Semester Ganjil
            </div>

            <Bell className="h-4 w-4 text-[#9f2020]" />

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-[#9f2020]">
                PW
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">Prof. Wisnu Jatmiko</p>
                <p className="text-xs text-slate-500">Dosen Pembimbing</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-8 py-7">
        {/* Top breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-sm text-[#9f2020]">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Mahasiswa Bimbingan</span>
        </div>

        {/* Top chips */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Mentorship Aktif
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Fakultas Ilmu Komputer
            </span>
          </div>

          <p className="text-sm text-slate-500">
            Terakhir diperbarui: Hari ini, 09:40 WIB
          </p>
        </div>

        {/* Profile summary */}
        <section className="mb-6 rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <div className="flex items-start gap-5">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-slate-200 text-2xl font-bold text-[#9f2020]">
                    NS
                  </div>
                  <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"></span>
                </div>

                <div className="pt-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-[40px] leading-none font-extrabold text-slate-900">
                      Nadya Salsabila
                    </h2>
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                      NIM 2106721094
                    </span>
                  </div>

                  <p className="mb-2 text-lg text-slate-600">
                    S1 Ilmu Komputer • Angkatan 2021 • Semester 7 (Ganjil
                    2024/2025)
                  </p>

                  <div className="space-y-1 text-sm text-slate-500">
                    <p>✉ nadya.salsabila@ui.ac.id</p>
                    <p>📞 +62 812-3456-7890</p>
                    <p>👨‍🏫 Pembimbing: Prof. Wisnu Jatmiko</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <p className="text-sm text-emerald-800">
                  <span className="font-semibold">Status Prospek:</span>{" "}
                  <span className="font-semibold">
                    On-Track — Proyeksi Lulus Semester 8 (Juli 2025)
                  </span>
                </p>
                <p className="text-sm text-slate-500">
                  Kebutuhan Sisa: 0 SKS setelah semester 7 &amp; tuntas
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
              <div className="rounded-2xl bg-[#f6f8ff] p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  IPK Kumulatif
                </p>
                <p className="mt-3 text-4xl font-extrabold text-[#c0322b]">
                  3.82
                  <span className="ml-1 text-lg font-medium text-slate-400">
                    / 4.00
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium text-[#c27a2c]">
                  Predikat Cumlaude
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6f8ff] p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Total SKS Lulus
                </p>
                <p className="mt-3 text-4xl font-extrabold text-slate-900">
                  124
                  <span className="ml-1 text-lg font-medium text-slate-400">
                    / 144 SKS
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  86% Selesai
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff7f3] p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Beban Semester 7
                </p>
                <p className="mt-3 text-4xl font-extrabold text-[#c0322b]">
                  20
                  <span className="ml-1 text-lg font-medium text-slate-400">
                    SKS Aktif
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium text-rose-600">
                  + 5 Mata Kuliah
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Middle grid */}
        <section className="grid gap-6 xl:grid-cols-2">
          {/* Left: current study plan */}
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-[#9f2020]" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Rencana Studi Semester Berjalan
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Tahun Akademik 2024/2025 Ganjil
                </p>
              </div>

              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                20 SKS Aktif
              </span>
            </div>

            <div className="space-y-3">
              {currentCourses.map((course) => (
                <div
                  key={course.code}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold tracking-wide text-[#c0322b]">
                        {course.code} • MATA KULIAH
                      </p>
                      <h4 className={`mt-1 text-lg font-semibold ${course.accent}`}>
                        {course.name}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">{course.meta}</p>
                    </div>

                    <span className="rounded-xl bg-white px-3 py-1 text-sm font-semibold text-slate-600 shadow-sm">
                      {course.sks}
                    </span>
                  </div>

                  <p className={`text-sm font-medium ${course.subAccent}`}>
                    {course.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
              Modul ini berfokus pada pemantauan beban dan pendampingan akademik
              mahasiswa bimbingan.
            </div>
          </div>

          {/* Right: graduation path */}
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#9f2020]" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Jalur Kelulusan Mahasiswa
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Graduation Pathway &amp; Pelacakan Milestone
                </p>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                Wisuda: Agustus 2025
              </span>
            </div>

            <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-800">
                    Prospek Kelulusan: Sangat Tinggi (Cumlaude)
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-700">
                    Mahasiswa berada pada lintasan unggul dengan IPK 3.82.
                    Persyaratan inti terpenuhi dan fokus saat ini adalah
                    penyelesaian naskah skripsi, sidang tugas akhir, dan bebas
                    administrasi.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Perjalanan SKS Kurikulum (Min. 144 SKS)
                </span>
                <span className="font-semibold text-[#c0322b]">
                  144 / 144 SKS (Proyeksi 100%)
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-full rounded-full bg-[#b21f24]"></div>
              </div>

              <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
                <span>124 SKS Selesai</span>
                <span className="text-[#c0322b]">+20 SKS Berjalan</span>
                <span>0 SKS Tersisa</span>
              </div>
            </div>

            <div className="grid gap-3">
              {pathwayItems.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start justify-between gap-3 rounded-2xl border p-4 ${item.bg} ${item.border}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 flex h-8 w-8 items-center justify-center rounded-lg text-white ${item.iconBg}`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>

                  <span className={`text-sm font-semibold ${item.text}`}>
                    {item.right}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom grid */}
        <section className="mt-6 grid gap-6 xl:grid-cols-2">
          {/* Notes */}
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <MessageSquareText className="h-5 w-5 text-[#9f2020]" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Catatan Dosen Pembimbing (PA Notes)
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Privat &amp; Terekam Riwayatnya
                </p>
              </div>

              <Lock className="h-4 w-4 text-slate-400" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Tulis Catatan Pendampingan Baru
              </label>

              <textarea
                rows={6}
                placeholder="Masukkan arahan riset, evaluasi beban studi, atau kesepakatan bimbingan untuk Nadya..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400"
              />

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Tanggal otomatis tersimpan
                </p>

                <button className="inline-flex items-center gap-2 rounded-xl bg-[#a61f1f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8e1a1a]">
                  <Save className="h-4 w-4" />
                  Simpan Catatan
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <p className="font-semibold text-slate-800">
                    • Prof. Dr. Ir. Wisnu Jatmiko
                  </p>
                  <span className="text-xs text-slate-400">20 Sep 2024</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Bab 1 dan 2 proposal skripsi sudah baik. Pertajam rumusan
                  masalah pada benchmark transformer model. Lanjutkan ke
                  bimbingan metodologi minggu depan.
                </p>
                <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Topik: Skripsi / Tugas Akhir
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <p className="font-semibold text-slate-800">
                    • Prof. Dr. Ir. Wisnu Jatmiko
                  </p>
                  <span className="text-xs text-slate-400">12 Agu 2024</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Evaluasi KRS semester 7: Pengambilan 20 SKS disetujui,
                  disarankan fokus penulisan naskah tugas akhir agar target
                  lulus Juli 2025 tercapai tanpa kendala.
                </p>
                <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Topik: Rencana Studi
                </span>
              </div>
            </div>
          </div>

          {/* Study history */}
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#9f2020]" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Riwayat Studi Per Semester
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Transkrip capaian &amp; indeks prestasi semester (IPS)
                </p>
              </div>

              <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Lihat Transkrip
                </span>
              </button>
            </div>

            <div className="space-y-3">
              {semesters.map((semester, index) => (
                <div
                  key={semester.badge}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-[#a61f1f]">
                      {semester.badge}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {semester.label}
                      </h4>
                      <p className="text-sm text-slate-500">{semester.sks}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        IPS
                      </p>
                      <p className="text-sm font-bold text-[#a61f1f]">
                        {semester.ips}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-6 flex items-center justify-between border-t border-slate-200 px-1 pt-5 text-sm text-slate-500">
          <p>KawanKRS Workspace • Sistem Bimbingan &amp; Pelacakan Akademik</p>
          <p>Fakultas Ilmu Komputer</p>
        </footer>
      </main>
    </div>
  );
}
