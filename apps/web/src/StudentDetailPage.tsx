import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  MessageSquare,
  User,
} from "lucide-react";

const mataKuliah = [
  {
    kode: "CS401",
    nama: "Rekayasa Perangkat Lunak",
    sks: 3,
    status: "Disetujui",
  },
  {
    kode: "CS402",
    nama: "Kecerdasan Buatan",
    sks: 3,
    status: "Disetujui",
  },
  {
    kode: "CS403",
    nama: "Jaringan Komputer",
    sks: 3,
    status: "Disetujui",
  },
  {
    kode: "CS404",
    nama: "Interaksi Manusia dan Komputer",
    sks: 3,
    status: "Disetujui",
  },
];

const riwayatSemester = [
  {
    semester: "Semester 1",
    tahun: "2023/2024 Ganjil",
    sks: 20,
    ips: "3.64",
  },
  {
    semester: "Semester 2",
    tahun: "2023/2024 Genap",
    sks: 22,
    ips: "3.71",
  },
  {
    semester: "Semester 3",
    tahun: "2024/2025 Ganjil",
    sks: 21,
    ips: "3.80",
  },
  {
    semester: "Semester 4",
    tahun: "2024/2025 Genap",
    sks: 21,
    ips: "3.86",
  },
  {
    semester: "Semester 5",
    tahun: "2025/2026 Ganjil",
    sks: 20,
    ips: "3.90",
  },
];

function StudentDetailPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#172033]">
      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#98171d] text-white">
              <GraduationCap size={20} />
            </div>

            <div>
              <p className="font-bold text-[#98171d]">
                KawanKRS
              </p>

              <p className="text-[10px] text-gray-500">
                DOSEN WALI PORTAL
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-semibold">
                Dr. Ir. Bgo Darwanto, M.T.
              </p>

              <p className="text-[10px] text-gray-500">
                Dosen Wali
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ead7d7] font-bold text-[#98171d]">
              BD
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        {/* BACK */}
        <button className="mb-5 flex items-center gap-2 text-sm font-medium text-[#98171d]">
          <ArrowLeft size={17} />
          Kembali ke Mahasiswa Bimbingan
        </button>

        {/* STUDENT PROFILE */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4b291] text-lg font-bold text-white">
                NS
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl font-bold">
                    Nadya Salsabila
                  </h1>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold text-green-700">
                    Mahasiswa Aktif
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  NIM 2106721094 • S1 Ilmu Komputer
                </p>

                <p className="text-xs text-gray-400">
                  Semester 6 • Tahun Akademik 2026/2027
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#fff2f2] px-5 py-3 text-center">
                <p className="text-[10px] text-gray-500">
                  IPK
                </p>

                <p className="mt-1 text-2xl font-bold text-[#98171d]">
                  3.82
                </p>
              </div>

              <div className="rounded-xl bg-[#eef4ff] px-5 py-3 text-center">
                <p className="text-[10px] text-gray-500">
                  SKS Lulus
                </p>

                <p className="mt-1 text-2xl font-bold">
                  124
                </p>

                <p className="text-[9px] text-gray-500">
                  dari 144 SKS
                </p>
              </div>

              <div className="rounded-xl bg-[#fff7ef] px-5 py-3 text-center">
                <p className="text-[10px] text-gray-500">
                  Beban Semester
                </p>

                <p className="mt-1 text-2xl font-bold text-orange-600">
                  20
                </p>

                <p className="text-[9px] text-gray-500">
                  SKS
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            {/* CURRENT STUDY */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen
                    size={18}
                    className="text-[#98171d]"
                  />

                  <h2 className="font-bold">
                    Rencana Studi Semester Berjalan
                  </h2>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold text-green-700">
                  Disetujui
                </span>
              </div>

              <div className="space-y-3">
                {mataKuliah.map((mk) => (
                  <div
                    key={mk.kode}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-[#fafbfc] px-4 py-3"
                  >
                    <div>
                      <p className="text-xs font-semibold text-[#98171d]">
                        {mk.kode}
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        {mk.nama}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-semibold">
                        {mk.sks} SKS
                      </p>

                      <p className="mt-1 text-[9px] text-green-600">
                        {mk.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* NOTES */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex items-center gap-2">
                <MessageSquare
                  size={18}
                  className="text-[#98171d]"
                />

                <h2 className="font-bold">
                  Catatan Dosen Pembimbing
                </h2>
              </div>

              <textarea
                className="min-h-[120px] w-full resize-none rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-[#98171d]"
                defaultValue="Performa akademik Nadya sangat baik. Pertahankan IPK dan prioritaskan mata kuliah wajib serta persiapan tugas akhir."
              />

              <div className="mt-4 flex justify-end">
                <button className="rounded-lg bg-[#98171d] px-5 py-2.5 text-xs font-semibold text-white">
                  Simpan Catatan
                </button>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* GRADUATION PATH */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap
                    size={18}
                    className="text-[#98171d]"
                  />

                  <h2 className="font-bold">
                    Jalur Kelulusan Mahasiswa
                  </h2>
                </div>

                <span className="text-xs font-semibold text-[#98171d]">
                  86.1%
                </span>
              </div>

              <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[86%] rounded-full bg-[#98171d]" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-green-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Mata Kuliah Wajib
                      </p>

                      <p className="text-[10px] text-gray-500">
                        Seluruh mata kuliah dasar telah terpenuhi
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-green-600">
                    Selesai
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-green-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Minimum SKS
                      </p>

                      <p className="text-[10px] text-gray-500">
                        124 dari 144 SKS telah diselesaikan
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-green-600">
                    124 SKS
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-yellow-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Clock
                      size={18}
                      className="text-yellow-600"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Tugas Akhir
                      </p>

                      <p className="text-[10px] text-gray-500">
                        Persiapan proposal dan pembimbing
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-yellow-600">
                    Proses
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <FileText
                      size={18}
                      className="text-gray-500"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Sidang Kelulusan
                      </p>

                      <p className="text-[10px] text-gray-500">
                        Belum memenuhi seluruh persyaratan
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-gray-500">
                    Belum
                  </span>
                </div>
              </div>
            </section>

            {/* HISTORY */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User
                    size={18}
                    className="text-[#98171d]"
                  />

                  <h2 className="font-bold">
                    Riwayat Studi Per Semester
                  </h2>
                </div>

                <button className="text-xs font-semibold text-[#98171d]">
                  Lihat Semua
                </button>
              </div>

              <div className="space-y-2">
                {riwayatSemester.map((item) => (
                  <div
                    key={item.semester}
                    className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">
                        {item.semester}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        {item.tahun}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[9px] text-gray-400">
                          Beban
                        </p>

                        <p className="text-xs font-semibold">
                          {item.sks} SKS
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[9px] text-gray-400">
                          IPS
                        </p>

                        <p className="text-xs font-bold text-[#98171d]">
                          {item.ips}
                        </p>
                      </div>

                      <ChevronRight
                        size={15}
                        className="text-gray-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDetailPage;
