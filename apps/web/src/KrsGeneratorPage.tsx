import { useState } from "react";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  History,
  MessageCircle,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";

type Course = {
  code: string;
  title: string;
  note: string;
  sks: number;
};

type PackageData = {
  id: string;
  title: string;
  description: string;
  totalSks: number;
  biaya: string;
  proyeksi: string;
  courses: Course[];
  recommended?: boolean;
};

const paketA: PackageData = {
  id: "A",
  title: "Optimal Graduation & Fast Track",
  description:
    "Menyelesaikan sisa kewajiban skripsi dengan waktu riset maksimal dan persiapan sidang tepat waktu.",
  totalSks: 18,
  biaya: "Rp 6,75 Jt",
  proyeksi: "Juli 2025",
  recommended: true,
  courses: [
    {
      code: "CS402",
      title: "Sidang Skripsi",
      note: "Wajib Prodi • Lab Kecerdasan Artifisial",
      sks: 6,
    },
    {
      code: "CS432",
      title: "Deep Learning Terapan",
      note: "Pilihan Jalur AI • Senin 08.00",
      sks: 3,
    },
    {
      code: "CS445",
      title: "Natural Language Proc.",
      note: "Pilihan Jalur AI • Rabu 13.30",
      sks: 3,
    },
    {
      code: "CS490",
      title: "Seminar Riset Fasilkom",
      note: "Wajib Kolokium • Kamis 10.00",
      sks: 2,
    },
    {
      code: "MBKM",
      title: "Proyek Independen",
      note: "Riset AI Terapan • Asynchronous",
      sks: 4,
    },
  ],
};

const paketB: PackageData = {
  id: "B",
  title: "Fokus Karir & Magang Industri",
  description:
    "Untuk mahasiswa yang ingin mengonversi magang industri dengan beban kuliah teori yang terkendali.",
  totalSks: 20,
  biaya: "Rp 7,20 Jt",
  proyeksi: "Juli 2025",
  courses: [
    {
      code: "CS402",
      title: "Sidang Skripsi",
      note: "Wajib Prodi • Topik Case Study Mitra",
      sks: 6,
    },
    {
      code: "CS450",
      title: "PKL / Magang Lanjut",
      note: "Ekuivalensi Penuh Industri Mitra",
      sks: 6,
    },
    {
      code: "CS428",
      title: "Manajemen Proyek TI",
      note: "Kelas Daring • Selasa Malam",
      sks: 4,
    },
    {
      code: "CS435",
      title: "Cloud & DevOps",
      note: "Praktikum Lab Online • Jumat 14.00",
      sks: 4,
    },
  ],
};

const paketC: PackageData = {
  id: "C",
  title: "Pengayaan Akademik & Lanjut Studi",
  description:
    "Persiapan studi master / fast track, fokus pada publikasi ilmiah dan jurnal bereputasi.",
  totalSks: 16,
  biaya: "Rp 5,85 Jt",
  proyeksi: "Juli 2025",
  courses: [
    {
      code: "CS402",
      title: "Sidang Skripsi",
      note: "Wajib Prodi • Target Paper IEEE",
      sks: 6,
    },
    {
      code: "CS480",
      title: "Kapita Selekta AI",
      note: "Tingkat Pascasarjana • Rabu 08.00",
      sks: 4,
    },
    {
      code: "CS485",
      title: "Metodologi Riset Lanjut",
      note: "Seminar Lanjut • Kamis 13.00",
      sks: 3,
    },
    {
      code: "CS492",
      title: "Penulisan Ilmiah",
      note: "Review Paper • Jumat 09.00",
      sks: 3,
    },
  ],
};

const packages = [paketA, paketB, paketC];

function RecommendationCard({ data }: { data: PackageData }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl bg-white p-5 ${
        data.recommended
          ? "border border-[#b6262c]"
          : "border border-[#eef0f6]"
      }`}
    >
      {data.recommended && (
        <div className="absolute -top-3 left-6 rounded-full border border-[#efb4b7] bg-[#ffe1e3] px-4 py-1 text-[10px] font-bold text-[#8d1118]">
          ● REKOMENDASI UTAMA • PALING OPTIMAL
        </div>
      )}

      <div className={data.recommended ? "mt-1" : ""}>
        <p className="text-[10px] font-bold text-[#912027]">
          PAKET {data.id}
        </p>

        <h3 className="mt-1 text-[16px] font-bold text-[#14213a]">
          {data.title}
        </h3>

        <p className="mt-1 min-h-[30px] text-[10px] leading-relaxed text-[#746f74]">
          {data.description}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-3 rounded-xl bg-[#edf3ff] px-3 py-2 text-center">
        <div>
          <p className="text-[9px] text-[#696d75]">
            Total Beban
          </p>

          <p
            className={`mt-1 text-[14px] font-bold ${
              data.recommended
                ? "text-[#a51f25]"
                : "text-[#14213a]"
            }`}
          >
            {data.totalSks} SKS
          </p>
        </div>

        <div>
          <p className="text-[9px] text-[#696d75]">
            Biaya UKT
          </p>

          <p className="mt-1 text-[14px] font-bold">
            {data.biaya}
          </p>
        </div>

        <div>
          <p className="text-[9px] text-[#696d75]">
            Proyeksi
          </p>

          <p className="mt-1 text-[14px] font-bold">
            {data.proyeksi}
          </p>
        </div>
      </div>

      <p className="mt-3 text-[9px] font-bold text-[#57545a]">
        MATA KULIAH TERDAFTAR ({data.courses.length} MK):
      </p>

      <div className="mt-2 space-y-1.5">
        {data.courses.map((course) => (
          <div
            key={`${data.id}-${course.code}`}
            className="flex items-center justify-between gap-2 rounded-lg bg-[#fafbfe] px-3 py-1.5"
          >
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-[#384052]">
                {course.code} {course.title}
              </p>

              <p className="truncate text-[8px] text-[#8b8589]">
                {course.note}
              </p>
            </div>

            <span className="shrink-0 rounded-md bg-[#dceaff] px-2 py-1 text-[8px] font-bold">
              {course.sks} SKS
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <button
        type="button"
        className={`mt-3 w-full rounded-lg py-2.5 text-[10px] font-semibold ${
          data.recommended
            ? "bg-[#98171d] text-white"
            : "bg-[#dfeaff] text-[#1f2e46]"
        }`}
      >
        Pilih Paket Ini →
      </button>
    </div>
  );
}

function KrsGeneratorPage() {
  const [targetSks, setTargetSks] = useState(20);
  const [mode, setMode] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen overflow-y-auto bg-[#f6f7fd]">
      <div
        className="min-h-screen bg-[#f6f7fd] text-[#14213a]"
        style={{ zoom: 0.68 }}
      >
        {/* HEADER */}
        <header className="border-b border-[#eceef4] bg-white">
          <div className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#98171d] text-white">
                <Sparkles size={16} />
              </div>

              <div className="text-[15px] font-bold text-[#98171d]">
                KawanKRS
              </div>

              <span className="rounded-full bg-[#ffe5e6] px-3 py-1 text-[8px] font-bold text-[#9c242a]">
                MAHASISWA PORTAL
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-[#eef3fd] px-4 py-1.5 text-[10px] font-semibold">
                <CalendarDays
                  size={13}
                  className="text-[#9b1d24]"
                />
                2024/2025 Ganjil
              </div>

              <Bell size={15} className="text-[#98171d]" />

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b58a68] text-[10px] font-bold text-white">
                  NS
                </div>

                <div>
                  <p className="text-[11px] font-bold">
                    Nadya Salsabila
                  </p>

                  <p className="text-[8px] text-[#7a7880]">
                    NIM 2106721094
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-7 pb-8 pt-5">
          {/* JUDUL */}
          <div className="flex items-start justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium text-[#a32930]">
                <Sparkles size={12} />
                PERENCANAAN STUDI CERDAS BERBASIS AI
              </div>

              <h1 className="mt-2 text-[27px] font-bold">
                Generator Paket KRS Cerdas
              </h1>

              <p className="mt-1 max-w-[510px] text-[10px] leading-relaxed text-[#6e6d75]">
                Dapatkan kombinasi rekomendasi paket mata kuliah
                terbaik berdasarkan riwayat studi, prasyarat,
                budget biaya kuliah, dan target SKS Anda.
              </p>
            </div>

            <div className="flex overflow-hidden rounded-full bg-[#26364b] p-1">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-[#a71920] px-4 py-1.5 text-[9px] font-semibold text-white"
              >
                <Sparkles size={11} />
                Rekomendasi Paket KRS
              </button>

              <button
                type="button"
                className="flex items-center gap-2 px-4 py-1.5 text-[9px] text-white/80"
              >
                <History size={11} />
                Riwayat Studi
              </button>
            </div>
          </div>

          {/* DATA MAHASISWA */}
          <section className="mt-4 flex items-center justify-between rounded-2xl border bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b58a68] text-sm font-bold text-white">
                NS
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[13px] font-bold">
                    Nadya Salsabila
                  </h2>

                  <span className="rounded-full bg-[#ffe1e3] px-2 py-1 text-[8px] font-bold text-[#a52a30]">
                    Mahasiswa Aktif
                  </span>
                </div>

                <p className="mt-1 text-[9px] text-[#6e6970]">
                  NIM 2106721094 • S1 Ilmu Komputer
                  <br />
                  Fakultas Ilmu Komputer UI
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="min-w-[155px] rounded-xl bg-[#edf3ff] px-4 py-2.5">
                <p className="text-[8px] uppercase text-[#7f828b]">
                  Indeks Prestasi Kumulatif
                </p>

                <p className="mt-1 text-[18px] font-bold text-[#a31f25]">
                  3.82
                  <span className="text-[9px] font-medium text-[#656875]">
                    {" "}
                    / 4.00
                  </span>
                </p>
              </div>

              <div className="min-w-[140px] rounded-xl bg-[#edf3ff] px-4 py-2.5">
                <p className="text-[8px] uppercase text-[#7f828b]">
                  SKS Telah Lulus
                </p>

                <p className="mt-1 text-[18px] font-bold">
                  124 / 144
                </p>

                <p className="text-[8px] font-semibold text-[#a22a31]">
                  86.1% Kurikulum
                </p>
              </div>

              <div className="min-w-[140px] rounded-xl bg-[#fff5f3] px-4 py-2.5">
                <p className="text-[8px] uppercase text-[#7f828b]">
                  Beban Max Berhak
                </p>

                <p className="mt-1 text-[18px] font-bold text-[#b12a30]">
                  24 SKS
                  <span className="text-[8px] font-medium">
                    {" "}
                    IPK ≥ 3.50
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* MODE */}
          <div className="mx-auto mt-4 flex max-w-[620px] rounded-xl bg-[#dce8fb] p-1">
            <button
              type="button"
              onClick={() => setMode(1)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-[9px] font-semibold ${
                mode === 1
                  ? "bg-white text-[#a1272d]"
                  : "text-[#565f70]"
              }`}
            >
              <SlidersHorizontal size={12} />
              Mode 1: Formulir Parameter Studi & Budget
            </button>

            <button
              type="button"
              onClick={() => setMode(2)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-[9px] font-semibold ${
                mode === 2
                  ? "bg-white text-[#a1272d]"
                  : "text-[#565f70]"
              }`}
            >
              <MessageCircle size={12} />
              Mode 2: Deskripsi & Cerita Minat (AI)
            </button>
          </div>

          {/* PARAMETER */}
          <section className="mt-4 rounded-2xl border bg-white p-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-3">
                <SlidersHorizontal
                  size={17}
                  className="text-[#a01f26]"
                />

                <div>
                  <h2 className="text-[14px] font-bold">
                    Parameter Rencana Studi & Budget
                  </h2>

                  <p className="text-[8px] text-[#77747a]">
                    Atur batas beban SKS dan alokasi biaya UKT.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[9px]">
                  Target Semester:
                </span>

                <button
                  type="button"
                  className="flex min-w-[240px] items-center justify-between rounded-lg bg-[#eff4fc] px-4 py-2 text-[9px]"
                >
                  Semester 8 (Genap 2024/2025)
                  <ChevronDown size={12} />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-7">
              <div>
                <div className="flex items-end justify-between">
                  <p className="text-[11px] font-bold">
                    Target Beban SKS
                  </p>

                  <p className="text-[9px]">
                    <span className="text-[18px] font-bold text-[#a11e24]">
                      {targetSks}
                    </span>
                    {" / Max 24 SKS"}
                  </p>
                </div>

                <input
                  type="range"
                  min={12}
                  max={24}
                  value={targetSks}
                  onChange={(e) =>
                    setTargetSks(Number(e.target.value))
                  }
                  className="mt-3 h-1.5 w-full accent-[#a51f25]"
                />

                <div className="mt-1 flex justify-between text-[7px]">
                  <span>12 SKS (Min. Riset)</span>
                  <span>18 SKS (Standar Skripsi)</span>
                  <span className="font-bold text-[#9c252b]">
                    24 SKS (Maksimal Hak IPK)
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="text-[11px] font-bold">
                    Budget Biaya Semester / UKT
                  </p>

                  <span className="text-[7px]">
                    Tarif SKS: Rp 375.000 / SKS
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between rounded-lg bg-[#edf3ff] px-4 py-2.5">
                  <span className="text-[11px]">
                    Rp 7.500.000
                  </span>

                  <span className="text-[8px] font-bold text-[#a31d23]">
                    MAKSIMAL
                  </span>
                </div>

                <p className="mt-1 text-[7px] text-[#767178]">
                  Perkiraan tagihan normal untuk 20 SKS sekitar
                  Rp 7.500.000.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#95151b] py-2.5 text-[9px] font-semibold text-white"
            >
              <Zap size={12} fill="currentColor" />
              Generate Rekomendasi Paket KRS
            </button>
          </section>

          {/* HASIL */}
          <section className="mt-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] font-semibold text-[#9d282e]">
                  ❖ HASIL KOMPARASI SIMULASI AI
                </p>

                <h2 className="mt-1 text-[18px] font-bold">
                  3 Paket Rekomendasi Terpilih untuk Semester 8
                </h2>

                <p className="text-[8px] text-[#77727a]">
                  Pilih skenario yang paling sesuai dengan target
                  wisuda, magang, dan finansial Anda.
                </p>
              </div>

              <p className="text-[8px] text-[#77727a]">
                ● Terakhir diperbarui: Hari ini, 09:42 WIB
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {packages.map((item) => (
                <RecommendationCard
                  key={item.id}
                  data={item}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default KrsGeneratorPage;
