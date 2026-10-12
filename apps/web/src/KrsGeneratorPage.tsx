import {
  Bell,
  ChevronDown,
  Sparkles,
  GraduationCap,
  WalletCards,
  CheckCircle2,
  Info,
  BookOpen,
} from "lucide-react";

const paketA = [
  ["Rekayasa Perangkat Lunak", "3 SKS"],
  ["Kecerdasan Buatan", "3 SKS"],
  ["Jaringan Komputer", "3 SKS"],
  ["Interaksi Manusia Komputer", "3 SKS"],
  ["Manajemen Proyek", "3 SKS"],
  ["Keamanan Informasi", "3 SKS"],
  ["Pilihan Informatika", "2 SKS"],
];

const paketB = [
  ["Rekayasa Perangkat Lunak", "3 SKS"],
  ["Kecerdasan Buatan", "3 SKS"],
  ["Jaringan Komputer", "3 SKS"],
  ["Interaksi Manusia Komputer", "3 SKS"],
  ["Manajemen Proyek", "3 SKS"],
  ["Pilihan Informatika", "3 SKS"],
];

const paketC = [
  ["Rekayasa Perangkat Lunak", "3 SKS"],
  ["Kecerdasan Buatan", "3 SKS"],
  ["Jaringan Komputer", "3 SKS"],
  ["Manajemen Proyek", "3 SKS"],
  ["Pilihan Informatika", "3 SKS"],
  ["Bahasa Inggris", "2 SKS"],
];

function PackageCard({
  title,
  subtitle,
  total,
  courses,
  recommended = false,
}: {
  title: string;
  subtitle: string;
  total: string;
  courses: string[][];
  recommended?: boolean;
}) {
  return (
    <div
      className={`rounded-xl bg-white border ${
        recommended ? "border-[#9f2020]" : "border-gray-200"
      } overflow-hidden`}
    >
      {recommended && (
        <div className="bg-[#9f2020] text-white text-xs font-semibold px-4 py-2">
          Rekomendasi Utama
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          </div>

          <span className="text-sm font-bold text-[#9f2020]">{total}</span>
        </div>

        <div className="space-y-2">
          {courses.map(([course, sks]) => (
            <div
              key={course}
              className="flex items-center justify-between gap-3 bg-gray-50 rounded-lg px-3 py-2"
            >
              <span className="text-xs text-gray-700">{course}</span>
              <span className="text-xs font-semibold text-blue-700 whitespace-nowrap">
                {sks}
              </span>
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-5 rounded-lg py-2.5 text-sm font-semibold transition ${
            recommended
              ? "bg-[#9f2020] text-white hover:bg-[#861a1a]"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Pilih Paket {title.slice(-1)}
        </button>
      </div>
    </div>
  );
}

function KrsGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-gray-900">
      {/* HEADER */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#9f2020] text-white flex items-center justify-center">
            <GraduationCap size={19} />
          </div>

          <div>
            <p className="font-bold text-sm">KawanKRS</p>
            <p className="text-[10px] text-gray-500">
              Sistem Perencanaan Studi Cerdas
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="relative text-gray-500">
            <Bell size={19} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
          </button>

          <div className="h-7 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ead5d5] flex items-center justify-center text-[#9f2020] font-bold text-sm">
              AP
            </div>

            <div className="hidden sm:block">
              <p className="text-xs font-semibold">Adi Putra</p>
              <p className="text-[10px] text-gray-500">Mahasiswa</p>
            </div>

            <ChevronDown size={15} className="text-gray-500" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-7">
        {/* BREADCRUMB */}
        <p className="text-[11px] text-[#9f2020] font-semibold mb-2">
          KRS PLANNER &amp; SKS CERDAS
        </p>

        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
          <div>
            <h1 className="text-2xl font-bold">
              Generator Paket KRS Cerdas
            </h1>

            <p className="text-sm text-gray-500 mt-2 max-w-2xl">
              Dapatkan rekomendasi kombinasi mata kuliah berdasarkan kondisi
              akademik, target SKS, anggaran semester, dan prioritas kelulusan.
            </p>
          </div>

          <button className="bg-[#9f2020] hover:bg-[#861a1a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <Sparkles size={17} />
            Generate Paket KRS
          </button>
        </div>

        {/* STUDENT INFO */}
        <section className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f3dddd] flex items-center justify-center font-bold text-[#9f2020]">
                AP
              </div>

              <div>
                <p className="font-bold text-sm">Adi Putra</p>
                <p className="text-xs text-gray-500">
                  NIM 1304221045 • Informatika
                </p>

                <span className="inline-block mt-1 text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Status Akademik: Aktif
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-100 rounded-lg">
              <div className="px-5 py-2 text-center">
                <p className="text-[10px] text-gray-500">IPK Saat Ini</p>
                <p className="font-bold text-[#9f2020]">3.58</p>
              </div>

              <div className="px-5 py-2 text-center">
                <p className="text-[10px] text-gray-500">SKS Lulus</p>
                <p className="font-bold">88 / 144</p>
              </div>

              <div className="px-5 py-2 text-center">
                <p className="text-[10px] text-gray-500">Sisa SKS</p>
                <p className="font-bold">56 SKS</p>
              </div>
            </div>
          </div>
        </section>

        {/* PARAMETER */}
        <section className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="font-bold text-sm">
                Parameter Rencana Studi &amp; Budget
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Sesuaikan target studi sebelum membuat rekomendasi.
              </p>
            </div>

            <select className="border border-gray-200 rounded-lg px-3 py-2 text-xs bg-white">
              <option>Semester Genap 2026/2027</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-semibold">Target Beban SKS</span>
                <span>
                  <b>20</b> / 24 SKS
                </span>
              </div>

              <input
                type="range"
                min="12"
                max="24"
                defaultValue="20"
                className="w-full accent-[#9f2020]"
              />

              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>12 SKS</span>
                <span>24 SKS</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-semibold">Budget Biaya Semester</span>
                <span className="font-bold">Rp 7.500.000</span>
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2.5">
                <WalletCards size={17} className="text-gray-400 mr-2" />
                <span className="text-sm">Rp 7.500.000</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#9f2020] hover:bg-[#861a1a] text-white rounded-lg py-3 mt-5 text-sm font-semibold flex justify-center items-center gap-2">
            <Sparkles size={16} />
            Generate Rekomendasi Paket KRS
          </button>
        </section>

        {/* RECOMMENDATION */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
            <div>
              <p className="text-xs font-semibold text-[#9f2020]">
                HASIL REKOMENDASI TERBAIK
              </p>

              <h2 className="text-xl font-bold mt-1">
                3 Paket Rekomendasi Terpilih untuk Semester 6
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Pilih paket yang paling sesuai dengan target akademik dan
                kemampuan biaya semester.
              </p>
            </div>

            <p className="text-[11px] text-gray-500">
              Terakhir diperbarui: hari ini
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <PackageCard
              title="Opsi A"
              subtitle="Optimal Berdasarkan AI"
              total="20 SKS"
              courses={paketA}
              recommended
            />

            <PackageCard
              title="Opsi B"
              subtitle="Fokus Aman & Seimbang"
              total="18 SKS"
              courses={paketB}
            />

            <PackageCard
              title="Opsi C"
              subtitle="Progresif Berdasarkan Target Studi"
              total="17 SKS"
              courses={paketC}
            />
          </div>
        </section>

        {/* AI REASON */}
        <section className="bg-white border border-gray-200 rounded-xl mt-6 p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <Sparkles size={17} className="text-[#9f2020]" />
              </div>

              <div>
                <h2 className="font-bold text-sm">
                  Mengapa Paket A Direkomendasikan untuk Anda?
                </h2>
                <p className="text-xs text-gray-500">
                  Analisis AI berdasarkan profil akademik mahasiswa.
                </p>
              </div>
            </div>

            <span className="text-[10px] bg-red-50 text-[#9f2020] rounded-full px-3 py-1">
              Rekomendasi AI
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="flex gap-3">
              <CheckCircle2
                size={19}
                className="text-green-600 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs font-bold">
                  Beban SKS Seimbang
                </p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  Total 20 SKS masih berada dalam batas rekomendasi berdasarkan
                  performa akademik Anda.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <BookOpen
                size={19}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs font-bold">
                  Mata Kuliah Prioritas
                </p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  Paket memprioritaskan mata kuliah wajib dan prasyarat penting
                  untuk semester berikutnya.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Info
                size={19}
                className="text-amber-600 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs font-bold">
                  Biaya Tetap Terkontrol
                </p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  Estimasi biaya paket masih sesuai dengan budget semester yang
                  sudah Anda tentukan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-[10px] text-gray-400 py-7">
          © 2026 KawanKRS • Sistem Perencanaan Studi Cerdas
        </footer>
      </main>
    </div>
  );
}

export default KrsGeneratorPage;
