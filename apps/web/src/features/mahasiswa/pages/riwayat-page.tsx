import {
  Download,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Edit3,
  Trash2,
  ShieldCheck,
  AlertCircle,
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
  CardDescription,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { useMahasiswaState } from "../state";

export function RiwayatPage() {
  const notify = useFeedback();
  const {
    openSemester,
    setOpenSemester,
    inputMatkul,
    setInputMatkul,
    inputSks,
    setInputSks,
    inputNilai,
    setInputNilai,
    transkripSem6,
    handleAddNilai,
    handleDeleteNilai,
  } = useMahasiswaState();
  return (
    <main className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
      {/* Top Bio Card */}
      <Card>
        <CardHeader className="flex flex-col flex-wrap items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <Avatar className="size-16">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                alt="Nadya"
              />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle>
                  <h2>Nadya Salsabila</h2>
                </CardTitle>
                <Badge variant="secondary">Cumlaude Track</Badge>
                <Badge variant="secondary">Aktif Semester 7</Badge>
              </div>
              <CardDescription>
                NIM 2106721094 • S1 Ilmu Komputer (Angkatan 2021) •{" "}
                <span className="text-foreground font-semibold">🛡 Reguler</span>
              </CardDescription>
              <CardDescription>
                👨‍🏫 Dosen Pembimbing Akademik:{" "}
                <strong className="text-foreground">
                  Prof. Dr. Ir. Wisnu Jatmiko, M.Eng.
                </strong>
              </CardDescription>
            </div>
          </div>
          <Button
            type="button"
            onClick={() =>
              notify("Mengunduh ringkasan transkrip & jalur kelulusan PDF...")
            }
            variant="outline"
          >
            <Download data-icon="inline-start" />
            Unduh Ringkasan
          </Button>
        </CardHeader>
        <CardContent>
          {/* 5 Stats Cards Row */}
          <div className="grid grid-cols-2 gap-3 pt-6 text-center sm:grid-cols-3 lg:grid-cols-5">
            <div className="border-border bg-muted rounded-xl border p-3">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                IPK Kumulatif
              </span>
              <span className="text-foreground mt-1 block text-xl font-black">
                3.82{" "}
                <span className="text-muted-foreground text-xs font-normal">
                  / 4.00
                </span>
              </span>
              <span className="text-foreground mt-1 block text-[9px] font-bold">
                ★ Predikat Cumlaude
              </span>
            </div>

            <div className="border-border bg-muted rounded-xl border p-3">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                SKS Telah Lulus
              </span>
              <span className="text-foreground mt-1 block text-xl font-black">
                124{" "}
                <span className="text-muted-foreground text-xs font-normal">
                  / 144 SKS
                </span>
              </span>
              <span className="text-muted-foreground mt-1 block text-[9px] font-semibold">
                86.1% Selesai
              </span>
            </div>

            <div className="border-border bg-muted rounded-xl border p-3">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                Beban Sem. 7 (Aktif)
              </span>
              <span className="text-primary mt-1 block text-xl font-black">
                20{" "}
                <span className="text-muted-foreground text-xs font-normal">
                  SKS
                </span>
              </span>
              <span className="text-muted-foreground mt-1 block text-[9px] font-semibold">
                5 Mata Kuliah
              </span>
            </div>

            <div className="border-border bg-muted rounded-xl border p-3">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                Target Lulus
              </span>
              <span className="text-foreground mt-1 block text-base font-black">
                Jul / Agu 2025
              </span>
              <span className="text-foreground mt-1 block text-[9px] font-semibold">
                Tepat Waktu (8 Sem)
              </span>
            </div>

            <div className="border-border bg-muted rounded-xl border p-3">
              <span className="text-muted-foreground block text-[9px] font-bold tracking-wider uppercase">
                Sisa SKS Kurikulum
              </span>
              <span className="text-foreground mt-1 block text-xl font-black">
                0{" "}
                <span className="text-muted-foreground text-xs font-normal">
                  SKS Defisit
                </span>
              </span>
              <span className="text-muted-foreground mt-1 block text-[9px]">
                Tercukupi total 144 SKS
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two Columns Grid */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {/* ================= LEFT COLUMN: RIWAYAT TRANSKRIP STUDI ================= */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="">
              <CardTitle>
                <h3>Riwayat Transkrip Studi</h3>
              </CardTitle>
              <CardDescription>
                Daftar perolehan nilai resmi dan simulasi mandiri mahasiswa
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {/* Input / Perbarui Nilai Mandiri */}
              <form
                onSubmit={handleAddNilai}
                className="border-border bg-muted/40 flex flex-col gap-3 rounded-xl border p-4"
              >
                <FieldGroup>
                  <div className="flex items-center justify-between">
                    <div className="text-primary flex items-center gap-2 text-xs font-bold">
                      <span className="bg-primary size-2 rounded-full"></span>
                      Input / Perbarui Nilai Mandiri
                    </div>
                    <Badge variant="secondary">Simulasi &amp; Riwayat</Badge>
                  </div>
                  <p className="text-muted-foreground text-[11px]">
                    Tambahkan capaian nilai semester untuk memperbarui proyeksi
                    IPK seketika.
                  </p>
                  <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="riwayat-page-field-1">
                        Pilih Semester Target
                      </FieldLabel>
                      <NativeSelect
                        id="riwayat-page-field-1"
                        className="w-full"
                      >
                        <NativeSelectOption>
                          Semester 6 (Genap 2023/2024)
                        </NativeSelectOption>
                        <NativeSelectOption>
                          Semester 7 (Ganjil 2024/2025)
                        </NativeSelectOption>
                      </NativeSelect>
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="riwayat-page-field-2">
                        Kode &amp; Nama Mata Kuliah
                      </FieldLabel>
                      <Input
                        id="riwayat-page-field-2"
                        type="text"
                        value={inputMatkul}
                        onChange={(e) => setInputMatkul(e.target.value)}
                        placeholder="Contoh: CS320 Pembelajaran Mesin"
                        className="w-full"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="riwayat-page-field-3">
                        Bobot SKS
                      </FieldLabel>
                      <NativeSelect
                        id="riwayat-page-field-3"
                        value={inputSks}
                        onChange={(e) => setInputSks(e.target.value)}
                        className="w-full"
                      >
                        <NativeSelectOption value="2">2 SKS</NativeSelectOption>
                        <NativeSelectOption value="3">3 SKS</NativeSelectOption>
                        <NativeSelectOption value="4">4 SKS</NativeSelectOption>
                        <NativeSelectOption value="6">6 SKS</NativeSelectOption>
                      </NativeSelect>
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="riwayat-page-field-4">
                        Nilai Huruf
                      </FieldLabel>
                      <NativeSelect
                        id="riwayat-page-field-4"
                        value={inputNilai}
                        onChange={(e) => setInputNilai(e.target.value)}
                        className="w-full"
                      >
                        <NativeSelectOption value="A">
                          A (4.00)
                        </NativeSelectOption>
                        <NativeSelectOption value="A-">
                          A- (3.70)
                        </NativeSelectOption>
                        <NativeSelectOption value="B+">
                          B+ (3.30)
                        </NativeSelectOption>
                        <NativeSelectOption value="B">
                          B (3.00)
                        </NativeSelectOption>
                      </NativeSelect>
                    </Field>
                  </div>
                  <Button type="submit" variant="default" className="w-full">
                    <span>Simpan Nilai</span>
                  </Button>
                </FieldGroup>
              </form>
              {/* Semester Accordion List */}
              <div className="flex flex-col gap-3">
                {/* Semester 6 (Expanded Table) */}
                <Collapsible
                  className="border-border overflow-hidden rounded-xl border"
                  open={openSemester === 6}
                  onOpenChange={(open) => setOpenSemester(open ? 6 : null)}
                >
                  <CollapsibleTrigger
                    render={
                      <Button
                        variant="secondary"
                        className="h-auto w-full justify-between p-3.5 text-left whitespace-normal"
                      />
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-muted text-foreground flex size-7 items-center justify-center rounded-lg text-xs font-black">
                        6
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-foreground text-xs font-bold">
                            Semester 6
                          </h4>
                          <Badge variant="secondary">Genap 2023/2024</Badge>
                        </div>
                        <p className="text-muted-foreground text-[10px]">
                          20 SKS Diselesaikan • 6 Mata Kuliah
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                          IPS Semester
                        </span>
                        <span className="text-primary text-xs font-black">
                          3.80
                        </span>
                      </div>
                      {openSemester === 6 ? (
                        <ChevronUp data-icon="inline-start" />
                      ) : (
                        <ChevronDown data-icon="inline-start" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="border-border bg-muted overflow-x-auto border-t p-3 text-xs">
                      <Table className="w-full">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Kode &amp; Mata Kuliah</TableHead>
                            <TableHead className="text-center">SKS</TableHead>
                            <TableHead className="text-center">Nilai</TableHead>
                            <TableHead className="text-center">Bobot</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {transkripSem6.map((course, idx) => (
                            <TableRow key={idx}>
                              <TableCell>
                                <strong className="text-foreground block text-[11px]">
                                  {course.code}
                                </strong>
                                <span className="text-muted-foreground text-[10px]">
                                  {course.name}
                                </span>
                              </TableCell>
                              <TableCell className="text-center">
                                {course.sks}
                              </TableCell>
                              <TableCell className="text-center">
                                {course.grade}
                              </TableCell>
                              <TableCell className="text-center">
                                {course.weight}
                              </TableCell>
                              <TableCell className="text-right whitespace-nowrap">
                                <Button
                                  aria-label="Edit"
                                  onClick={() => notify(`Edit ${course.name}`)}
                                  variant="ghost"
                                  size="icon"
                                >
                                  <Edit3 data-icon="inline-start" />
                                </Button>
                                <Button
                                  aria-label="Hapus"
                                  onClick={() => handleDeleteNilai(idx)}
                                  variant="ghost"
                                  size="icon"
                                  className="ml-1"
                                >
                                  <Trash2 data-icon="inline-start" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Semester 5 */}
                <div className="border-border bg-background flex items-center justify-between rounded-xl border p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-foreground flex size-7 items-center justify-center rounded-lg text-xs font-black">
                      5
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-xs font-bold">
                          Semester 5
                        </h4>
                        <Badge variant="secondary">Ganjil 2023/2024</Badge>
                      </div>
                      <p className="text-muted-foreground text-[10px]">
                        20 SKS Diselesaikan • 6 Mata Kuliah (Kecerdasan
                        Artifisial, Jaringan Komputer, dll)
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      IPS Semester
                    </span>
                    <span className="text-primary text-xs font-black">
                      3.85
                    </span>
                  </div>
                </div>

                {/* Semester 4 */}
                <div className="border-border bg-background flex items-center justify-between rounded-xl border p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-foreground flex size-7 items-center justify-center rounded-lg text-xs font-black">
                      4
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-xs font-bold">
                          Semester 4
                        </h4>
                        <Badge variant="secondary">Genap 2022/2023</Badge>
                      </div>
                      <p className="text-muted-foreground text-[10px]">
                        22 SKS Diselesaikan • Desain Algoritma, Sistem Operasi,
                        Grafika Komputer
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      IPS Semester
                    </span>
                    <span className="text-primary text-xs font-black">
                      3.90
                    </span>
                  </div>
                </div>

                {/* Semester 3 */}
                <div className="border-border bg-background flex items-center justify-between rounded-xl border p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-foreground flex size-7 items-center justify-center rounded-lg text-xs font-black">
                      3
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-xs font-bold">
                          Semester 3
                        </h4>
                        <Badge variant="secondary">Ganjil 2022/2023</Badge>
                      </div>
                      <p className="text-muted-foreground text-[10px]">
                        21 SKS Diselesaikan • Struktur Data &amp; Algoritma,
                        Aljabar Linier
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      IPS Semester
                    </span>
                    <span className="text-primary text-xs font-black">
                      3.75
                    </span>
                  </div>
                </div>

                {/* Semester 2 */}
                <div className="border-border bg-background flex items-center justify-between rounded-xl border p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-foreground flex size-7 items-center justify-center rounded-lg text-xs font-black">
                      2
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-xs font-bold">
                          Semester 2
                        </h4>
                        <Badge variant="secondary">Genap 2021/2022</Badge>
                      </div>
                      <p className="text-muted-foreground text-[10px]">
                        21 SKS Diselesaikan • Matematika Diskret, Dasar
                        Pemrograman 2, dll
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      IPS Semester
                    </span>
                    <span className="text-primary text-xs font-black">
                      3.78
                    </span>
                  </div>
                </div>

                {/* Semester 1 */}
                <div className="border-border bg-background flex items-center justify-between rounded-xl border p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-foreground flex size-7 items-center justify-center rounded-lg text-xs font-black">
                      1
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-xs font-bold">
                          Semester 1
                        </h4>
                        <Badge variant="secondary">Ganjil 2021/2022</Badge>
                      </div>
                      <p className="text-muted-foreground text-[10px]">
                        20 SKS Diselesaikan • Dasar Pemrograman 1, Kalkulus,
                        Pengantar Sistem Digital
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                      IPS Semester
                    </span>
                    <span className="text-primary text-xs font-black">
                      3.85
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ================= RIGHT COLUMN: JALUR KELULUSAN MAHASISWA ================= */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="">
              <CardTitle>
                <h3>Jalur Kelulusan Mahasiswa</h3>
              </CardTitle>
              <CardDescription>
                Audit kurikulum &amp; proyeksi penyelesaian studi tepat waktu
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {/* Prospek Box */}
              <div className="border-border bg-muted flex flex-col gap-1 rounded-xl border p-4">
                <div className="text-foreground flex items-center gap-2 text-xs font-bold">
                  <ShieldCheck className="text-foreground size-4" />
                  STATUS PROSPEK KELULUSAN: Sangat Tinggi (Predikat Cumlaude)
                </div>
                <p className="text-foreground text-xs leading-relaxed">
                  Berada pada trajectory unggul. Menyelesaikan 20 SKS pada
                  semester 7 ini akan menggenapkan total 144 SKS syarat
                  kelulusan tanpa ada tanggungan semester antara.
                </p>
              </div>
              {/* Progres SKS Kurikulum */}
              <div className="flex flex-col gap-2">
                <div className="text-foreground flex justify-between text-xs font-bold">
                  <span>Progres SKS Kurikulum</span>
                  <span className="text-primary">144 / 144 SKS (100%)</span>
                </div>
                <div className="bg-muted flex h-3 w-full overflow-hidden rounded-full">
                  <div
                    className="bg-primary"
                    style={{ width: "86.1%" }}
                    title="124 SKS Lulus"
                  ></div>
                  <div
                    className="bg-rose-400"
                    style={{ width: "13.9%" }}
                    title="20 SKS Berjalan"
                  ></div>
                </div>
                <div className="text-muted-foreground flex justify-between text-[10px] font-medium">
                  <span>• 124 SKS Lulus (86.1%)</span>
                  <span className="text-primary">
                    • 20 SKS Berjalan (13.9%)
                  </span>
                  <span>Target 144 SKS</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="border-border bg-muted rounded-xl border p-3 text-center">
                    <span className="text-muted-foreground block text-[10px] font-bold uppercase">
                      Sisa Semester
                    </span>
                    <strong className="text-foreground mt-0.5 block text-sm">
                      1 Semester
                    </strong>
                    <span className="text-muted-foreground text-[10px]">
                      Semester 8 (Feb-Jul 2025)
                    </span>
                  </div>

                  <div className="border-border bg-muted rounded-xl border p-3 text-center">
                    <span className="text-muted-foreground block text-[10px] font-bold uppercase">
                      Kebutuhan SKS Sem 8
                    </span>
                    <strong className="text-foreground mt-0.5 block text-sm">
                      0 - 4 SKS
                    </strong>
                    <span className="text-muted-foreground text-[10px]">
                      Hanya Sidang/Publikasi
                    </span>
                  </div>
                </div>
              </div>
              {/* Syarat Kelulusan S1 Fasilkom */}
              <div className="flex flex-col gap-2.5 pt-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-foreground flex items-center gap-1.5">
                    <BookOpen className="text-primary size-3.5" />
                    Syarat Kelulusan S1 Fasilkom
                  </span>
                  <span className="text-muted-foreground text-[10px] font-semibold">
                    1 dari 2 Terpenuhi
                  </span>
                </div>

                <div className="border-border bg-muted flex items-start justify-between gap-2 rounded-xl border p-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-foreground mt-0.5 size-4 shrink-0" />
                    <div>
                      <strong className="text-foreground block text-xs">
                        Jumlah SKS 144
                      </strong>
                      <p className="text-muted-foreground text-[10px]">
                        Tercukupi total 144 SKS pasca menyelesaikan semester 7
                        (20 SKS)
                      </p>
                    </div>
                  </div>
                  <span className="text-foreground text-[10px] font-bold whitespace-nowrap">
                    124 / 144 SKS Lulus
                  </span>
                </div>

                <div className="border-border bg-muted/50 flex items-start justify-between gap-2 rounded-xl border p-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-foreground mt-0.5 size-4 shrink-0" />
                    <div>
                      <strong className="text-foreground block text-xs">
                        Tugas Akhir / Skripsi (6 SKS)
                      </strong>
                      <p className="text-foreground/80 text-[10px]">
                        Tahap Bimbingan Bab 3 &amp; Pengumpulan Korpus Data
                        Model AI
                      </p>
                    </div>
                  </div>
                  <span className="text-foreground text-[10px] font-bold whitespace-nowrap">
                    Sedang Berjalan
                  </span>
                </div>
              </div>
              {/* Catatan Konsultasi Dosen PA */}
              <div className="border-border bg-muted/70 flex flex-col gap-3 rounded-xl border p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-foreground flex items-center gap-1.5 font-bold">
                    💬 Catatan Konsultasi Dosen PA
                  </span>
                  <span className="text-muted-foreground text-[10px]">
                    12 Oktober 2024
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Avatar>
                    <AvatarFallback>WJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <strong className="text-foreground block text-xs leading-tight">
                      Prof. Dr. Ir. Wisnu Jatmiko, M.Eng.
                    </strong>
                    <span className="text-muted-foreground text-[10px]">
                      Guru Besar Fasilkom UI • Dosen PA
                    </span>
                  </div>
                </div>

                <p className="border-primary text-muted-foreground border-l-2 pl-3 text-xs leading-relaxed italic">
                  "Pencapaian akademis Nadya sejauh ini sangat konsisten di zona
                  Cumlaude. Untuk semester 7 ini, fokus utama adalah mematangkan
                  pipeline eksperimen pada transformer model untuk skripsimu.
                  Jika draft bab 4 dapat diselesaikan di Desember, kamu siap
                  mendaftar sidang perdana di bulan Mei/Juni 2025."
                </p>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <Badge variant="secondary">
                    ✓ Disetujui untuk Akselerasi Skripsi
                  </Badge>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-primary text-[11px] font-bold hover:underline"
                  >
                    Lihat Log Bimbingan →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
