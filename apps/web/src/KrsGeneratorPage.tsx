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
    "Untuk mahasiswa yang ingin mengonversi magang industri dengan beban kuliah teori yang terkendali rapi.",
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
    "Persiapan studi master / fast track, fokus pada publikasi ilmiah, jurnal bereputasi Scopus/Sinta.",
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

function RecommendationCard({
  data,
}: {
  data: PackageData;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl bg-white p-6 ${
        data.recommended
          ? "border border-[#b6262c] shadow-[0_0_0_1px_rgba(182,38,44,0.05)]"
          : "border border-[#eef0f6]"
      }`}
    >
      {data.recommended && (
        <div className="absolute -top-4 left-7 rounded-full border border-[#efb4b7] bg-[#ffe1e3] px-5 py-1.5 text-[11px] font-bold tracking-wide text-[#8d1118]">
          ● REKOMENDASI UTAMA • PALING OPTIMAL
        </div>
      )}

      <div className={data.recommended ? "mt-2" : ""}>
        <p className="text-[11px] font-bold tracking-wider text-[#912027]">
          PAKET {data.id}
        </p>

        <h3 className="mt-1 text-[17px] font-bold leading-tight text-[#14213a]">
          {data.title}
        </h3>

        <p className="mt-2 min-h-[42px] text-[11px] leading-relaxed text-[#746f74]">
          {data.description}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 rounded-xl bg-[#edf3ff] px-3 py-3 text-center">
        <div>
          <p className="text-[10px] text-[#696d75]">
            Total Beban
          </p>
          <p
            className={`mt-1 text-[15px] font-bold ${
              data.recommended
                ? "text-[#a51f25]"
                : "text-[#14213a]"
            }`}
          >
            {data.totalSks} SKS
          </p>
        </div>

        <div>
          <p className="text-[10px] text-[#696d75]">
            Biaya UKT
          </p>
          <p className="mt-1 text-[15px] font-bold text-[#14213a]">
            {data.biaya}
          </p>
        </div>

        <div>
          <p className="text-[10px] text-[#696d75]">
            Proyeksi
          </p>
          <p className="mt-1 text-[15px] font-bold text-[#14213a]">
            {data.proyeksi}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[10px] font-bold tracking-wide text-[#57545a]">
        MATA KULIAH TERDAFTAR ({data.courses.length} MK):
      </p>

      <div className="mt-2 space-y-2">
        {data.courses.map((course) => (
          <div
            key={`${data.id}-${course.code}`}
            className="flex items-center justify-between gap-3 rounded-lg bg-[#fafbfe] px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#384052]">
                {course.code} {course.title}
              </p>

              <p className="mt-0.5 truncate text-[9px] text-[#8b8589]">
                {course.note}
              </p>
            </div>

            <span className="shrink-0 rounded-md bg-[#dceaff] px-2 py-1 text-[9px] font-bold text-[#253b59]">
              {course.sks} SKS
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <button
        type="button"
        className={`mt-5 w-full rounded-lg py-3 text-[11px] font-semibold transition ${
          data.recommended
            ? "bg-[#98171d] text-white hover:bg-[#801218]"
            : "bg-[#dfeaff] text-[#1f2e46] hover:bg-[#d3e1f7]"
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
    <div className="min-h-screen bg-[#f6f7fd] text-[#14213a]">
      {/* HEADER */}
      <header className="border-b border-[#eceef4] bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-7">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#98171d] text-white">
              <Sparkles size={18} />
            </div>

            <div className="text-[17px] font-bold text-[#98171d]">
              KawanKRS
            </div>

            <span className="rounded-full bg-[#ffe5e6] px-3 py-1 text-[9px] font-bold text-[#9c242a]">
              MAHASISWA PORTAL
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 rounded-full bg-[#eef3fd] px-4 py-2 text-[12px] font-semibold text-[#485269]">
              <CalendarDays size={14} className="text-[#9b1d24]" />
              2024/2025 Ganjil
            </div>

            <button
              type="button"
              className="relative text-[#98171d]"
            >
              <Bell size={17} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#dcb694] to-[#704f3f] text-xs font-bold text-white">
                NS
              </div>

              <div className="hidden md:block">
                <p className="text-[13px] font-bold">
                  Nadya Salsabila
                </p>
                <p className="text-[10px] text-[#7a7880]">
                  NIM 2106721094
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-7 pb-12 pt-7">
        {/* TITLE */}
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#a32930]">
              <Sparkles size={14} />
              PERENCANAAN STUDI CERDAS BERBASIS AI
            </div>

            <h1 className="mt-3 text-[29px] font-bold tracking-tight text-[#132039]">
              Generator Paket KRS Cerdas
            </h1>

            <p className="mt-1 max-w-[510px] text-[11px] leading-relaxed text-[#6e6d75]">
              Dapatkan kombinasi rekomendasi paket mata kuliah
              terbaik untuk semester Anda berdasarkan analisis
              riwayat studi, syarat prasyarat, budget biaya kuliah,
              dan preferensi target SKS Anda.
            </p>
          </div>

          <div className="flex overflow-hidden rounded-full bg-[#26364b] p-1 shadow-md">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-[#a71920] px-5 py-2 text-[11px] font-semibold text-white"
            >
              <Sparkles size={13} />
              Rekomendasi Paket KRS
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2 text-[11px] font-medium text-white/80"
            >
              <History size={13} />
              Riwayat Studi
            </button>
          </div>
        </div>

        {/* STUDENT CARD */}
        <section className="mt-7 flex flex-col gap-5 rounded-2xl border border-[#f0eff2] bg-white p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f0d2b8] via-[#b08e73] to-[#7a5a45] text-sm font-bold text-white">
                NS
              </div>

              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#bd2229]" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-[15px] font-bold">
                  Nadya Salsabila
                </h2>

                <span className="rounded-full bg-[#ffe1e3] px-3 py-1 text-[9px] font-bold text-[#a52a30]">
                  Mahasiswa Aktif
                </span>
              </div>

              <p className="mt-1 text-[11px] leading-relaxed text-[#6e6970]">
                NIM 2106721094 • S1 Ilmu Komputer •
                <br />
                Fakultas Ilmu Komputer UI
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="min-w-[170px] rounded-xl bg-[#edf3ff] px-5 py-3">
              <p className="text-[9px] uppercase tracking-wide text-[#7f828b]">
                Indeks Prestasi Kumulatif
              </p>

              <p className="mt-1 text-[20px] font-bold text-[#a31f25]">
                3.82
                <span className="ml-1 text-[10px] font-medium text-[#656875]">
                  / 4.00
                </span>
              </p>
            </div>

            <div className="min-w-[145px] rounded-xl bg-[#edf3ff] px-5 py-3">
              <p className="text-[9px] uppercase tracking-wide text-[#7f828b]">
                SKS Telah Lulus
              </p>

              <p className="mt-1 text-[20px] font-bold">
                124 / 144
                <span className="ml-1 text-[9px] font-medium">
                  SKS
                </span>
              </p>

              <p className="text-[9px] font-semibold text-[#a22a31]">
                86.1% Kurikulum
              </p>
            </div>

            <div className="min-w-[145px] rounded-xl bg-[#fff5f3] px-5 py-3">
              <p className="text-[9px] uppercase tracking-wide text-[#7f828b]">
                Beban Max Berhak
              </p>

              <p className="mt-1 text-[20px] font-bold text-[#b12a30]">
                24 SKS
                <span className="ml-1 text-[9px] font-medium text-[#7d7374]">
                  IPK ≥ 3.50
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* MODE SWITCH */}
        <div className="mx-auto mt-6 flex max-w-[650px] rounded-xl bg-[#dce8fb] p-1">
          <button
            type="button"
            onClick={() => setMode(1)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[11px] font-semibold ${
              mode === 1
                ? "bg-white text-[#a1272d] shadow-sm"
                : "text-[#565f70]"
            }`}
          >
            <SlidersHorizontal size={14} />
            Mode 1: Formulir Parameter Studi & Budget
          </button>

          <button
            type="button"
            onClick={() => setMode(2)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[11px] font-semibold ${
              mode === 2
                ? "bg-white text-[#a1272d] shadow-sm"
                : "text-[#565f70]"
            }`}
          >
            <MessageCircle size={14} />
            Mode 2: Deskripsi & Cerita Minat (AI)
          </button>
        </div>

        {/* PARAMETER CARD */}
        <section className="mt-5 rounded-2xl border border-[#eceef3] bg-white p-7">
          <div className="flex flex-col justify-between gap-4 border-b border-[#edf0f5] pb-5 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <SlidersHorizontal
                size={20}
                className="text-[#a01f26]"
              />

              <div>
                <h2 className="text-[16px] font-bold">
                  Parameter Rencana Studi & Budget
                </h2>

                <p className="mt-0.5 text-[10px] text-[#77747a]">
                  Atur batas beban SKS dan alokasi biaya UKT
                  semester aktif Anda.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium">
                Target Semester:
              </span>

              <button
                type="button"
                className="flex min-w-[270px] items-center justify-between rounded-lg bg-[#eff4fc] px-4 py-2.5 text-[11px] font-medium"
              >
                Semester 8 (Genap 2024/2025)
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            {/* SKS */}
            <div>
              <div className="flex items-end justify-between">
                <p className="text-[13px] font-bold">
                  Target Beban SKS
                </p>

                <p className="text-[11px]">
                  <span className="text-[22px] font-bold text-[#a11e24]">
                    {targetSks}
                  </span>
                  <span className="ml-1 font-semibold">
                    / Max 24 SKS
                  </span>
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
                className="mt-5 h-1.5 w-full cursor-pointer accent-[#a51f25]"
              />

              <div className="mt-2 flex justify-between text-[9px] text-[#79757a]">
                <span>12 SKS (Min. Riset)</span>
                <span>18 SKS (Standar Skripsi)</span>
                <span className="font-bold text-[#9c252b]">
                  24 SKS (Maksimal Hak IPK)
                </span>
              </div>
            </div>

            {/* BUDGET */}
            <div>
              <div className="flex justify-between">
                <p className="text-[13px] font-bold">
                  Budget Biaya Semester / UKT
                </p>

                <span className="text-[9px] text-[#77747a]">
                  Tarif SKS: Rp 375.000 / SKS
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-lg bg-[#edf3ff] px-5 py-3">
                <span className="text-[13px] font-medium text-[#656772]">
                  Rp &nbsp; 7.500.000
                </span>

                <span className="text-[10px] font-bold text-[#a31d23]">
                  MAKSIMAL
                </span>
              </div>

              <p className="mt-2 text-[9px] text-[#767178]">
                Perkiraan tagihan normal untuk 20 SKS adalah
                sekitar Rp 7.500.000 (BOP-B/UKT Fleksibel
                Terbuka).
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#95151b] py-3.5 text-[11px] font-semibold text-white hover:bg-[#801116]"
          >
            <Zap size={14} fill="currentColor" />
            Generate Rekomendasi Paket KRS
          </button>
        </section>

        {/* RESULTS */}
        <section className="mt-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-wide text-[#9d282e]">
                ❖ HASIL KOMPARASI SIMULASI AI
              </p>

              <h2 className="mt-1 text-[20px] font-bold">
                3 Paket Rekomendasi Terpilih untuk Semester 8
              </h2>

              <p className="mt-1 text-[10px] text-[#77727a]">
                Pilihlah salah satu skenario yang paling sejalan
                dengan target waktu wisuda, komitmen magang, dan
                alokasi finansial Anda.
              </p>
            </div>

            <p className="text-[10px] text-[#77727a]">
              <span className="mr-1 text-[#9b1e24]">●</span>
              Terakhir diperbarui: Hari ini, 09:42 WIB
            </p>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
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
  );
}

export default KrsGeneratorPage;
