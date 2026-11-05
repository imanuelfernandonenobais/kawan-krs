import { cn } from "cn";
import {
  ArrowRight,
  Sliders,
  Sparkles,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";

import { useFeedback } from "@/components/feedback-provider";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { useMahasiswaState } from "../state";

export function RekomendasiPage() {
  const notify = useFeedback();
  const {
    targetSks,
    setTargetSks,
    budget,
    setBudget,
    selectedSemester,
    setSelectedSemester,
    selectedPlan,
    setSelectedPlan,
  } = useMahasiswaState();
  return (
    <main className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div>
        <div className="text-primary mb-1 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <Sparkles className="text-primary size-3.5" />
          PERENCANAAN STUDI CERDAS BERBASIS AI
        </div>
        <h1 className="text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
          Generator Paket KRS Cerdas
        </h1>
        <p className="text-muted-foreground mt-1 max-w-3xl text-xs leading-relaxed sm:text-sm">
          Dapatkan kombinasi rekomendasi paket mata kuliah terbaik untuk
          semester Anda berdasarkan analisis riwayat studi, syarat prasyarat,
          budget biaya kuliah, dan preferensi target SKS Anda.
        </p>
      </div>

      {/* Student Mini Profile Summary */}
      <Card className="md:flex-row md:items-center md:justify-between">
        <CardHeader className="flex flex-wrap items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Nadya"
            />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle>
                <h3>Nadya Salsabila</h3>
              </CardTitle>
              <Badge variant="secondary">Mahasiswa Aktif</Badge>
            </div>
            <CardDescription>
              NIM 2106721094 • S1 Ilmu Komputer • Fakultas Ilmu Komputer UI
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid w-full grid-cols-3 gap-3 text-center md:w-auto">
            <div className="border-border bg-muted rounded-xl border p-2.5">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                Indeks Prestasi Kumulatif
              </span>
              <span className="text-foreground mt-0.5 block text-base font-black">
                3.82{" "}
                <span className="text-muted-foreground text-[10px] font-normal">
                  / 4.00
                </span>
              </span>
            </div>
            <div className="border-border bg-muted rounded-xl border p-2.5">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                SKS Telah Lulus
              </span>
              <span className="text-foreground mt-0.5 block text-base font-black">
                124 / 144{" "}
                <span className="text-muted-foreground text-[10px] font-normal">
                  SKS
                </span>
              </span>
              <span className="text-foreground block text-[9px] font-bold">
                86.1% Kurikulum
              </span>
            </div>
            <div className="border-border bg-muted rounded-xl border p-2.5">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                Beban Max Berhak
              </span>
              <span className="text-primary mt-0.5 block text-base font-black">
                24 SKS
              </span>
              <span className="text-muted-foreground block text-[9px]">
                IPK ≥ 3.50
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mode Switcher Tabs */}
      <Tabs value="parameters">
        <TabsList
          aria-label="Mode rekomendasi"
          className="h-auto w-full flex-col items-stretch sm:w-fit sm:flex-row"
        >
          <TabsTrigger value="parameters" className="whitespace-normal">
            <Sliders data-icon="inline-start" />
            Mode 1: Formulir Parameter Studi &amp; Budget
          </TabsTrigger>
          <TabsTrigger value="ai" disabled className="whitespace-normal">
            <Sparkles data-icon="inline-start" />
            Mode 2: Deskripsi &amp; Cerita Minat (AI)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="parameters">
          {/* Parameter Rencana Studi & Budget Card */}
          <Card>
            <CardHeader className="flex flex-col flex-wrap items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <div className="bg-muted text-primary rounded-xl p-2">
                  <Sliders className="size-4" />
                </div>
                <div>
                  <CardTitle>
                    <h3>Parameter Rencana Studi &amp; Budget</h3>
                  </CardTitle>
                  <CardDescription>
                    Atur batas beban SKS dan alokasi biaya UKT semester aktif
                    Anda
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground font-medium">
                  Target Semester:
                </span>
                <NativeSelect
                  aria-label="Target Semester"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  <NativeSelectOption>
                    Semester 8 (Genap 2024/2025)
                  </NativeSelectOption>
                  <NativeSelectOption>
                    Semester 7 (Ganjil 2024/2025)
                  </NativeSelectOption>
                </NativeSelect>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Target Beban SKS Slider */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-foreground">Target Beban SKS</span>
                    <span className="text-primary text-base font-black">
                      {targetSks}{" "}
                      <span className="text-muted-foreground text-xs font-normal">
                        / Max 24 SKS
                      </span>
                    </span>
                  </div>
                  <Slider
                    aria-label="Target Beban SKS"
                    thumbAlignment="center"
                    min={12}
                    max={24}
                    step={2}
                    value={[targetSks]}
                    onValueChange={(values) =>
                      setTargetSks(Array.isArray(values) ? values[0] : values)
                    }
                  />
                  <div className="text-muted-foreground flex justify-between text-[10px] font-medium">
                    <span>12 SKS (Min. Riset)</span>
                    <span>18 SKS (Standar Skripsi)</span>
                    <span className="text-primary font-bold">
                      24 SKS (Maksimal Hak IPK)
                    </span>
                  </div>
                </div>

                {/* Budget Biaya Semester / UKT */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-foreground">
                      Budget Biaya Semester / UKT
                    </span>
                    <span className="text-muted-foreground text-[10px] font-normal">
                      Tarif SKS: Rp 375.000 / SKS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <InputGroup className="flex-1">
                      <InputGroupInput
                        aria-label="Budget Biaya Semester / UKT"
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                      <InputGroupAddon>Rp</InputGroupAddon>
                    </InputGroup>
                    <span className="border-border bg-muted text-primary rounded-lg border px-2.5 py-1.5 text-[10px] font-bold">
                      MAKSIMAL
                    </span>
                  </div>
                  <p className="text-muted-foreground text-[10px] italic">
                    Perkiraan tagihan normal untuk {targetSks} SKS adalah
                    sekitar Rp 7.500.000 (BOP-B/UKT Fleksibel Terbuka).
                  </p>
                </div>
              </div>
              {/* Big Action Button */}
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                onClick={() =>
                  notify(
                    "Sistem AI berhasil meregenerasi 3 paket rekomendasi terbaik berdasarkan parameter!"
                  )
                }
                className="w-full"
              >
                <span>⚡ Generate Rekomendasi Paket KRS</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 3 Paket Rekomendasi Terpilih Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
          <div>
            <span className="text-primary block text-[10px] font-bold tracking-wider uppercase">
              ✦ HASIL KOMPARASI SIMULASI AI
            </span>
            <h3 className="text-foreground text-base font-extrabold sm:text-lg">
              3 Paket Rekomendasi Terpilih untuk Semester 8
            </h3>
            <p className="text-muted-foreground text-xs">
              Pilihlah salah satu skenario yang paling sejalan dengan target
              waktu wisuda, komitmen magang, dan alokasi finansial Anda.
            </p>
          </div>
          <span className="text-muted-foreground flex shrink-0 items-center gap-1 text-[11px]">
            <span className="size-1.5 rounded-full bg-emerald-500"></span>{" "}
            Terakhir diperbarui: Hari ini, 09:42 WIB
          </span>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* PAKET A - Optimal Graduation (FEATURED) */}
          <Card
            className={cn(
              "relative justify-between overflow-visible",
              selectedPlan === "A" && "ring-primary ring-2"
            )}
          >
            <CardContent className="flex flex-col gap-4">
              <div className="bg-primary text-primary-foreground absolute -top-3 left-4 rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                ★ REKOMENDASI UTAMA • PALING OPTIMAL
              </div>
              <div>
                <div className="mb-3 pt-2">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                    PAKET A
                  </span>
                  <h4 className="text-foreground mt-0.5 text-sm font-extrabold">
                    Optimal Graduation &amp; Fast Track
                  </h4>
                  <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
                    Menyelesaikan sisa kewajiban skripsi dengan waktu riset
                    maksimal dan persiapan sidang tepat waktu.
                  </p>
                </div>

                {/* Metrics Box */}
                <div className="border-border bg-muted mb-4 grid grid-cols-3 gap-2 rounded-xl border p-2.5 text-center">
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Total Beban
                    </span>
                    <strong className="text-primary block text-xs">
                      18 SKS
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Biaya UKT
                    </span>
                    <strong className="text-foreground block text-xs">
                      Rp 6,75 Jt
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Proyeksi
                    </span>
                    <strong className="text-foreground block text-xs">
                      Juli 2025
                    </strong>
                  </div>
                </div>

                {/* Course List */}
                <div className="mb-5 flex flex-col gap-2">
                  <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                    Mata Kuliah Terdaftar (5 MK):
                  </span>
                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS402 Sidang Skripsi
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Wajib Prodi • Lab Kecerdasan Artifisial
                      </span>
                    </div>
                    <Badge variant="secondary">6 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS432 Deep Learning Terapan
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Pilihan Jalur AI • Senin 08.00
                      </span>
                    </div>
                    <Badge variant="secondary">3 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS445 Natural Language Proc.
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Pilihan Jalur AI • Rabu 13.30
                      </span>
                    </div>
                    <Badge variant="secondary">3 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS490 Seminar Riset Fasilkom
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Wajib Kolokium • Kamis 10.00
                      </span>
                    </div>
                    <Badge variant="secondary">2 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        MBKM Proyek Independen
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Riset AI Terapan • Asynchronous
                      </span>
                    </div>
                    <Badge variant="secondary">4 SKS</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                aria-label="Pilih Paket A"
                aria-pressed={selectedPlan === "A"}
                onClick={() => {
                  setSelectedPlan("A");
                  notify(
                    "Paket A dipilih! Rencana studi Anda telah diselaraskan."
                  );
                }}
                variant="default"
                className="w-full"
              >
                <span>Pilih Paket Ini</span>
                <ArrowRight data-icon="inline-start" />
              </Button>
            </CardFooter>
          </Card>

          {/* PAKET B - Fokus Karir & Magang */}
          <Card
            className={cn(
              "relative justify-between overflow-visible",
              selectedPlan === "B" && "ring-primary ring-2"
            )}
          >
            <CardContent className="flex flex-col gap-4">
              <div>
                <div className="mb-3">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                    PAKET B
                  </span>
                  <h4 className="text-foreground mt-0.5 text-sm font-extrabold">
                    Fokus Karir &amp; Magang Industri
                  </h4>
                  <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
                    Untuk mahasiswa yang ingin mengonversi magang industri
                    dengan beban kuliah teori yang terkelola rapi.
                  </p>
                </div>

                {/* Metrics Box */}
                <div className="border-border bg-muted mb-4 grid grid-cols-3 gap-2 rounded-xl border p-2.5 text-center">
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Total Beban
                    </span>
                    <strong className="text-foreground block text-xs">
                      20 SKS
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Biaya UKT
                    </span>
                    <strong className="text-foreground block text-xs">
                      Rp 7,20 Jt
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Proyeksi
                    </span>
                    <strong className="text-foreground block text-xs">
                      Juli 2025
                    </strong>
                  </div>
                </div>

                {/* Course List */}
                <div className="mb-5 flex flex-col gap-2">
                  <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                    Mata Kuliah Terdaftar (4 MK):
                  </span>
                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS402 Sidang Skripsi
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Wajib Prodi • Topik Case Study Mitra
                      </span>
                    </div>
                    <Badge variant="secondary">6 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS450 PKL / Magang Lanjut
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Eksplorasi Penuh Industri Mitra
                      </span>
                    </div>
                    <Badge variant="secondary">6 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS428 Manajemen Proyek TI
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Kelas Daring • Selasa Malam
                      </span>
                    </div>
                    <Badge variant="secondary">4 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS435 Cloud &amp; DevOps
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Praktikum Lab Online • Jumat 14.00
                      </span>
                    </div>
                    <Badge variant="secondary">4 SKS</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                aria-label="Pilih Paket B"
                aria-pressed={selectedPlan === "B"}
                onClick={() => {
                  setSelectedPlan("B");
                  notify("Paket B dipilih!");
                }}
                variant="secondary"
                className="w-full"
              >
                <span>Pilih Paket Ini</span>
                <ArrowRight data-icon="inline-start" />
              </Button>
            </CardFooter>
          </Card>

          {/* PAKET C - Pengayaan Akademik */}
          <Card
            className={cn(
              "relative justify-between overflow-visible",
              selectedPlan === "C" && "ring-primary ring-2"
            )}
          >
            <CardContent className="flex flex-col gap-4">
              <div>
                <div className="mb-3">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                    PAKET C
                  </span>
                  <h4 className="text-foreground mt-0.5 text-sm font-extrabold">
                    Pengayaan Akademik &amp; Lanjut Studi
                  </h4>
                  <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
                    Persiapan studi master / fast track, fokus pada publikasi
                    ilmiah jurnal bereputasi Scopus/Sinta.
                  </p>
                </div>

                {/* Metrics Box */}
                <div className="border-border bg-muted mb-4 grid grid-cols-3 gap-2 rounded-xl border p-2.5 text-center">
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Total Beban
                    </span>
                    <strong className="text-foreground block text-xs">
                      16 SKS
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Biaya UKT
                    </span>
                    <strong className="text-foreground block text-xs">
                      Rp 5,85 Jt
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      Proyeksi
                    </span>
                    <strong className="text-foreground block text-xs">
                      Juli 2025
                    </strong>
                  </div>
                </div>

                {/* Course List */}
                <div className="mb-5 flex flex-col gap-2">
                  <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                    Mata Kuliah Terdaftar (4 MK):
                  </span>
                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS402 Sidang Skripsi
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Wajib Prodi • Target Paper IEEE
                      </span>
                    </div>
                    <Badge variant="secondary">6 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS480 Kapita Selekta AI
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Tingkat Pascasarjana • Rabu 08.00
                      </span>
                    </div>
                    <Badge variant="secondary">4 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS485 Metodologi Riset Lanjut
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Seminar Lanjut • Kamis 13.00
                      </span>
                    </div>
                    <Badge variant="secondary">3 SKS</Badge>
                  </div>

                  <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2 text-xs">
                    <div>
                      <strong className="text-foreground block text-[11px]">
                        CS492 Penulisan Ilmiah
                      </strong>
                      <span className="text-muted-foreground text-[10px]">
                        Review Paper • Jumat 09.00
                      </span>
                    </div>
                    <Badge variant="secondary">3 SKS</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                aria-label="Pilih Paket C"
                aria-pressed={selectedPlan === "C"}
                onClick={() => {
                  setSelectedPlan("C");
                  notify("Paket C dipilih!");
                }}
                variant="secondary"
                className="w-full"
              >
                <span>Pilih Paket Ini</span>
                <ArrowRight data-icon="inline-start" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Bottom Analysis Box: Mengapa Paket A Direkomendasikan Utama oleh AI */}
      <Card>
        <CardHeader className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-muted text-primary rounded-xl p-2">
              <Sparkles className="size-4" />
            </div>
            <div>
              <CardTitle>
                <h4>Mengapa Paket A Direkomendasikan Utama oleh AI?</h4>
              </CardTitle>
              <CardDescription>
                Laporan Penjelasan Algoritmik • Confidence Score: 96.8%
              </CardDescription>
            </div>
          </div>
          <Badge variant="secondary">Optimal Trade-off Analisis</Badge>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 text-xs leading-relaxed md:grid-cols-3">
            <div className="border-border bg-muted flex flex-col gap-1 rounded-xl border p-3.5">
              <span className="text-foreground flex items-center gap-1.5 font-bold">
                <Award className="text-primary size-3.5" />
                Riwayat Nilai Unggul
              </span>
              <p className="text-muted-foreground text-[11px]">
                Nadya meraih nilai <strong>A (4.0)</strong> pada mata kuliah
                prasyarat CS301 Machine Learning dan CS202 Desain &amp; Analisis
                Algoritma. Paket A memaksimalkan akselerasi spesialisasi NLP dan
                Deep Learning tanpa menimbulkan friksi pemahaman materi dasar.
              </p>
            </div>

            <div className="border-border bg-muted flex flex-col gap-1 rounded-xl border p-3.5">
              <span className="text-foreground flex items-center gap-1.5 font-bold">
                <DollarSign className="text-primary size-3.5" />
                Efisiensi Finansial ± 10%
              </span>
              <p className="text-muted-foreground text-[11px]">
                Dengan simulasi 18 SKS, total estimasi beban biaya adalah{" "}
                <strong>Rp 6.750.000</strong>, yaitu berada 10% di bawah pagu
                budget Rp 7.500.000 yang Anda tetapkan, menyisakan alokasi
                darurat untuk pendaftaran konferensi ilmiah skripsi.
              </p>
            </div>

            <div className="border-border bg-muted flex flex-col gap-1 rounded-xl border p-3.5">
              <span className="text-foreground flex items-center gap-1.5 font-bold">
                <Clock className="text-primary size-3.5" />
                Waktu Kerja Fleksibel
              </span>
              <p className="text-muted-foreground text-[11px]">
                Mata kuliah pilihan terdistribusi pada jadwal pagi (Senin &amp;
                Rabu), membebaskan slot sore untuk komitmen magang part-time di
                riset AI (estimasi 20 jam/minggu) tanpa resiko bentrok jadwal
                kehadiran fisik maupun kuis lab.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
