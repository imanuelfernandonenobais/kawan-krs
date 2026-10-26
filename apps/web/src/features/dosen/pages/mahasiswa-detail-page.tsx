import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Bell,
  BookOpen,
  ArrowLeft,
  LogOut,
  Mail,
  Phone,
  UserCheck,
  CheckCircle2,
  Lock,
  Send,
  Milestone,
  Shield,
  Award,
  Check,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";

import { useFeedback } from "@/components/feedback-provider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "@/components/ui/button";
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
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

import { useDosenState } from "../state";

export function MahasiswaDetailPage() {
  const notify = useFeedback();
  const {
    newNote,
    setNewNote,
    openSemesterDetail,
    setOpenSemesterDetail,
    notes,
    handleAddNote,
    semesters,
  } = useDosenState();
  return (
    <>
      {/* Top Navigation Bar with Back Button */}
      <header className="border-border bg-background sticky top-0 z-30 border-b shadow-xs">
        <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-xl shadow-xs">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <span className="text-foreground text-base font-bold tracking-tight">
                  KawanKRS
                </span>
                <Badge variant="secondary" className="ml-1.5">
                  Workspace PA
                </Badge>
              </div>
            </div>

            {/* Back to student list button */}
            <Link
              to="/dosen/mahasiswa"
              activeOptions={{ exact: true }}
              className={buttonVariants({
                variant: "ghost",
                className: "ml-4",
              })}
            >
              <ArrowLeft className="size-3.5" />
              Daftar Mahasiswa Bimbingan
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="border-border bg-muted text-foreground hidden items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium md:flex">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500"></span>
              T.A. 2024/2025 • Semester Ganjil
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

            <div className="border-border flex items-center gap-2.5 border-l pl-3">
              <Avatar>
                <AvatarFallback>WJ</AvatarFallback>
              </Avatar>
              <div className="hidden text-left text-xs leading-tight lg:block">
                <p className="text-foreground font-bold">Prof. Wisnu Jatmiko</p>
                <p className="text-muted-foreground text-[10px]">
                  Dosen Pembimbing
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

      {/* Sub-header meta bar */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 pt-4 pb-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            <span className="size-1.5 rounded-full bg-emerald-500"></span>{" "}
            Mentorship Aktif
          </Badge>
          <Badge variant="secondary">Fakultas Ilmu Komputer</Badge>
        </div>
        <span className="text-muted-foreground text-[11px]">
          Terakhir diperbarui: Hari ini, 09:40 WIB
        </span>
      </div>

      <main className="mx-auto mt-2 flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        {/* Student Profile Overview Card */}
        <Card>
          <CardHeader className="flex flex-col flex-wrap items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="size-16 sm:size-20">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                    alt="Nadya Salsabila"
                  />
                  <AvatarFallback>NS</AvatarFallback>
                </Avatar>
                <span className="absolute -right-1 -bottom-1 size-4 rounded-full border-2 border-white bg-emerald-500"></span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <CardTitle>
                    <h2>Nadya Salsabila</h2>
                  </CardTitle>
                  <Badge variant="secondary">NIM 2106721094</Badge>
                </div>
                <CardDescription>
                  S1 Ilmu Komputer • Angkatan 2021 •{" "}
                  <span className="text-foreground font-semibold">
                    Semester 7 (Ganjil 2024/2025)
                  </span>
                </CardDescription>
                <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Mail className="text-muted-foreground size-3.5" />{" "}
                    nadya.salsabila@ui.ac.id
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="text-muted-foreground size-3.5" /> +62
                    812-3456-7890
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="text-primary size-3.5" /> Pembimbing:{" "}
                    <strong className="text-foreground">
                      Prof. Wisnu Jatmiko
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:w-auto">
              <div className="border-border bg-muted rounded-xl border p-3 text-center sm:p-4">
                <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                  IPK Kumulatif
                </span>
                <div className="text-foreground mt-1 text-xl font-black sm:text-2xl">
                  3.82{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    / 4.00
                  </span>
                </div>
                <Badge variant="secondary" className="mt-1">
                  ★ Predikat Cumlaude
                </Badge>
              </div>

              <div className="border-border bg-muted rounded-xl border p-3 text-center sm:p-4">
                <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                  Total SKS Lulus
                </span>
                <div className="text-foreground mt-1 text-xl font-black sm:text-2xl">
                  124{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    / 144 SKS
                  </span>
                </div>
                <Progress
                  aria-label="SKS telah lulus"
                  value={86}
                  className="mt-2"
                />
                <span className="text-muted-foreground mt-1 block text-[10px] font-semibold">
                  86% Selesai
                </span>
              </div>

              <div className="border-border bg-muted rounded-xl border p-3 text-center sm:p-4">
                <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                  Beban Semester 7
                </span>
                <div className="text-primary mt-1 text-xl font-black sm:text-2xl">
                  20{" "}
                  <span className="text-muted-foreground text-xs font-semibold">
                    SKS Aktif
                  </span>
                </div>
                <span className="text-muted-foreground mt-1 block text-[10px] font-medium">
                  6 Mata Kuliah
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border-border border-border bg-muted/50 -mx-6 mt-5 -mb-6 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl border-t border-b p-4 px-6 pt-4 text-xs">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <CheckCircle2 className="text-foreground size-4 shrink-0" />
                <span>
                  Status Prospek:{" "}
                  <strong>
                    On Track — Proyeksi Lulus Semester 8 (Juli 2025)
                  </strong>
                </span>
              </div>
              <span className="text-muted-foreground text-[11px]">
                Kebutuhan Sisa: <strong>0 SKS</strong> setelah semester 7 &amp;
                8 tuntas
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Two-Column Detail Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* 1. Rencana Studi Semester Berjalan */}
            <Card>
              <CardHeader className="mb-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="bg-muted text-primary rounded-xl p-2">
                    <BookOpen className="size-5" />
                  </div>
                  <div>
                    <CardTitle>
                      <h3>Rencana Studi Semester Berjalan</h3>
                    </CardTitle>
                    <CardDescription>
                      Tahun Akademik 2024/2025 Ganjil
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">20 SKS Aktif</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div className="border-border bg-background hover:border-border rounded-xl border p-3.5 transition">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-primary block text-[10px] font-bold tracking-wider uppercase">
                          CS401 • MATA KULIAH WAJIB AKHIR
                        </span>
                        <h4 className="text-foreground mt-0.5 text-sm font-bold">
                          Skripsi / Tugas Akhir
                        </h4>
                        <p className="text-muted-foreground mt-1 text-xs">
                          Dosen Pembimbing: Prof. Wisnu Jatmiko
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <Badge variant="secondary">6 SKS</Badge>
                        <Badge variant="secondary" className="mt-1.5">
                          ⚑ Fase: Proposal Disetujui
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="border-border bg-background hover:border-border rounded-xl border p-3.5 transition">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-foreground block text-[10px] font-bold tracking-wider uppercase">
                          CS412 • PEMINATAN AI
                        </span>
                        <h4 className="text-foreground mt-0.5 text-sm font-bold">
                          Machine Learning Lanjutan
                        </h4>
                        <p className="text-muted-foreground mt-1 text-xs">
                          Ruang Lab AI 301 • Kelas A
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <Badge variant="secondary">3 SKS</Badge>
                        <span className="text-muted-foreground mt-1 block text-[11px] font-semibold">
                          Kehadiran: 100%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-border bg-background hover:border-border rounded-xl border p-3.5 transition">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-foreground block text-[10px] font-bold tracking-wider uppercase">
                          CS425 • WAJIB FAKULTAS
                        </span>
                        <h4 className="text-foreground mt-0.5 text-sm font-bold">
                          Etika Profesi &amp; Hukum Siber
                        </h4>
                        <p className="text-muted-foreground mt-1 text-xs">
                          Gedung B 2.4 • Kelas B
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <Badge variant="secondary">2 SKS</Badge>
                        <span className="text-muted-foreground mt-1 block text-[11px] font-semibold">
                          Kehadiran: 92%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-border bg-background hover:border-border rounded-xl border p-3.5 transition">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-foreground block text-[10px] font-bold tracking-wider uppercase">
                          CS430 • PEMINATAN KHUSUS
                        </span>
                        <h4 className="text-foreground mt-0.5 text-sm font-bold">
                          Kapita Selekta Kecerdasan Artifisial
                        </h4>
                        <p className="text-muted-foreground mt-1 text-xs">
                          Seminar Hall 1 • Kelas A
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <Badge variant="secondary">3 SKS</Badge>
                        <span className="text-muted-foreground mt-1 block text-[11px] font-semibold">
                          Kehadiran: 100%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-border bg-background hover:border-border rounded-xl border p-3.5 transition">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-foreground block text-[10px] font-bold tracking-wider uppercase">
                          CS450 • MBKM / MAGANG
                        </span>
                        <h4 className="text-foreground mt-0.5 text-sm font-bold">
                          Praktik Kerja Lapangan / Magang Industri
                        </h4>
                        <p className="text-muted-foreground mt-1 text-xs">
                          PT Tokopedia (Software Eng. Intern)
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <Badge variant="secondary">6 SKS</Badge>
                        <Badge variant="secondary" className="mt-1">
                          Nilai A (Berjalan)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted text-muted-foreground mt-4 flex items-center gap-2 rounded-xl p-3 text-xs">
                  <AlertCircle className="text-muted-foreground size-4 shrink-0" />
                  <span>
                    Modul ini berfokus pada pemantauan berkala dan pendampingan
                    akademik mahasiswa bimbingan.
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 2. Catatan Dosen Pembimbing (PA Notes) */}
            <Card>
              <CardHeader className="mb-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="bg-muted text-primary rounded-xl p-2">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <CardTitle>
                      <h3>Catatan Dosen Pembimbing (PA Notes)</h3>
                    </CardTitle>
                    <CardDescription>
                      Privat &amp; Terekam Riwayatnya
                    </CardDescription>
                  </div>
                </div>
                <Lock className="text-muted-foreground size-4" />
              </CardHeader>
              <CardContent>
                {/* Form Input Catatan Baru */}
                <form onSubmit={handleAddNote} className="mb-6">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="catatan-pendampingan">
                        Tulis Catatan Pendampingan Baru
                      </FieldLabel>
                      <Textarea
                        id="catatan-pendampingan"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        rows={3}
                        placeholder="Masukkan arahan riset, evaluasi beban studi, atau kesepakatan bimbingan untuk Nadya..."
                        className="w-full"
                      />
                      <div className="border-border/80 mt-2 flex items-center justify-between border-t pt-2">
                        <span className="text-muted-foreground text-[10px]">
                          Tanggal otomatis tersemat
                        </span>
                        <Button type="submit" variant="default">
                          <Send data-icon="inline-start" />
                          Simpan Catatan
                        </Button>
                      </div>
                    </Field>
                  </FieldGroup>
                </form>
                {/* Histori Catatan Dosen */}
                <div className="flex flex-col gap-4">
                  {notes.map((note, idx) => (
                    <div
                      key={idx}
                      className="border-border bg-muted/70 flex flex-col gap-2 rounded-xl border p-4"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-primary size-2 rounded-full"></span>
                          <span className="text-foreground font-bold">
                            {note.author}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-[11px]">
                          {note.date}
                        </span>
                      </div>
                      <p className="border-border text-muted-foreground border-l-2 pl-4 text-xs leading-relaxed">
                        "{note.text}"
                      </p>
                      <div className="pt-1">
                        <Badge variant="secondary">Topik: {note.topic}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* 1. Jalur Kelulusan Mahasiswa */}
            <Card>
              <CardHeader className="mb-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="bg-muted text-foreground rounded-xl p-2">
                    <Milestone className="size-5" />
                  </div>
                  <div>
                    <CardTitle>
                      <h3>Jalur Kelulusan Mahasiswa</h3>
                    </CardTitle>
                    <CardDescription>
                      Graduation Pathway &amp; Pelacakan Milestone
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">Wisuda: Agustus 2025</Badge>
              </CardHeader>
              <CardContent>
                <Alert>
                  <Shield data-icon="inline-start" />
                  <AlertDescription>
                    <div>
                      <AlertTitle>
                        Prospek Kelulusan: Sangat Tinggi (Cumlaude)
                      </AlertTitle>
                      <p className="text-foreground/90 mt-1 text-xs leading-relaxed">
                        Mahasiswa berada pada lintasan unggul dengan IPK 3.82.
                        Persyaratan sisa terfokus pada perampungan naskah
                        skripsi, sidang tugas akhir, dan bebas administrasi.
                      </p>
                    </div>
                  </AlertDescription>
                </Alert>
                <div className="mt-5 flex flex-col gap-2">
                  <div className="text-foreground flex justify-between text-xs font-bold">
                    <span>Perjalanan SKS Kurikulum (Min. 144 SKS)</span>
                    <span className="text-primary">
                      144 / 144 SKS (Proyeksi 100%)
                    </span>
                  </div>
                  <div className="bg-muted flex h-3 w-full overflow-hidden rounded-full">
                    <div
                      className="bg-primary"
                      style={{ width: "86%" }}
                      title="124 SKS Selesai"
                    ></div>
                    <div
                      className="bg-rose-400"
                      style={{ width: "14%" }}
                      title="20 SKS Berjalan"
                    ></div>
                  </div>
                  <div className="text-muted-foreground grid grid-cols-3 pt-1 text-[10px] font-medium">
                    <div>
                      <strong className="text-foreground block">
                        124 SKS Selesai
                      </strong>
                      Semester 1 - 6
                    </div>
                    <div className="text-center">
                      <strong className="text-primary block">
                        +20 SKS Berjalan
                      </strong>
                      Semester 7
                    </div>
                    <div className="text-right">
                      <strong className="text-foreground block">
                        0 SKS Tersisa
                      </strong>
                      Target Lulus Sem 8
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="border-border bg-muted flex items-center gap-2.5 rounded-xl border p-3">
                    <div className="bg-muted text-foreground flex size-6 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-foreground text-xs font-bold">
                        MK Wajib Universitas
                      </h5>
                      <p className="text-foreground text-[10px] font-semibold">
                        100% Selesai (24 SKS)
                      </p>
                    </div>
                  </div>

                  <div className="border-border bg-muted flex items-center gap-2.5 rounded-xl border p-3">
                    <div className="bg-muted text-foreground flex size-6 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-foreground text-xs font-bold">
                        MK Wajib Fasilkom
                      </h5>
                      <p className="text-foreground text-[10px] font-semibold">
                        100% Selesai (72 SKS)
                      </p>
                    </div>
                  </div>

                  <div className="border-border bg-muted/50 flex items-center gap-2.5 rounded-xl border p-3">
                    <div className="bg-muted text-foreground flex size-6 shrink-0 items-center justify-center rounded-full">
                      <Award className="size-3.5" />
                    </div>
                    <div>
                      <h5 className="text-foreground text-xs font-bold">
                        Tugas Akhir / Skripsi
                      </h5>
                      <p className="text-foreground text-[10px] font-semibold">
                        Sedang Berjalan (Bimbingan Bab 3)
                      </p>
                    </div>
                  </div>

                  <div className="border-border bg-muted flex items-center gap-2.5 rounded-xl border p-3">
                    <div className="bg-muted text-foreground flex size-6 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-foreground text-xs font-bold">
                        Kemampuan Bhs. Inggris
                      </h5>
                      <p className="text-foreground text-[10px] font-semibold">
                        TOEFL 590 (Memenuhi Syarat)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Riwayat Studi Per Semester */}
            <Card>
              <CardHeader className="mb-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="bg-muted text-primary rounded-xl p-2">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <CardTitle>
                      <h3>Riwayat Studi Per Semester</h3>
                    </CardTitle>
                    <CardDescription>
                      Transkrip capaian &amp; indeks prestasi semester (IPS)
                    </CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => notify("Pratinjau transkrip resmi")}
                  variant="outline"
                >
                  <FileText data-icon="inline-start" />
                  Lihat Transkrip
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {semesters.map((item) => {
                    const isOpen = openSemesterDetail === item.sem;
                    return (
                      <Collapsible
                        key={item.sem}
                        className="border-border overflow-hidden rounded-xl border transition-all"
                        open={isOpen}
                        onOpenChange={(open) =>
                          setOpenSemesterDetail(open ? item.sem : null)
                        }
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
                            <span className="bg-muted text-foreground flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold">
                              S{item.sem}
                            </span>
                            <div>
                              <h4 className="text-foreground text-xs font-bold">
                                {item.title}
                              </h4>
                              <p className="text-muted-foreground text-[10px]">
                                {item.sks}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">IPS: {item.ips}</Badge>
                            {isOpen ? (
                              <ChevronUp data-icon="inline-start" />
                            ) : (
                              <ChevronDown data-icon="inline-start" />
                            )}
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="border-border bg-muted flex flex-col gap-2 border-t p-3.5 text-xs">
                            <div className="border-border text-muted-foreground flex justify-between border-b pb-1 text-[11px] font-semibold">
                              <span>Mata Kuliah</span>
                              <span>Nilai / SKS</span>
                            </div>
                            <div className="text-foreground flex justify-between">
                              <span>Struktur Data &amp; Algoritma</span>
                              <span className="text-foreground font-bold">
                                A (4 SKS)
                              </span>
                            </div>
                            <div className="text-foreground flex justify-between">
                              <span>Jaringan Komputer</span>
                              <span className="text-foreground font-bold">
                                A (3 SKS)
                              </span>
                            </div>
                            <div className="text-foreground flex justify-between">
                              <span>Sistem Operasi</span>
                              <span className="text-foreground font-bold">
                                A- (3 SKS)
                              </span>
                            </div>
                            <div className="text-foreground flex justify-between">
                              <span>Basis Data Lanjut</span>
                              <span className="text-foreground font-bold">
                                A (3 SKS)
                              </span>
                            </div>
                            <div className="text-foreground flex justify-between">
                              <span>Pemrograman Web Lanjut</span>
                              <span className="text-foreground font-bold">
                                A (4 SKS)
                              </span>
                            </div>
                            <div className="text-foreground flex justify-between">
                              <span>Statistika Probabilitas</span>
                              <span className="text-foreground font-bold">
                                B+ (3 SKS)
                              </span>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-border text-muted-foreground mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t px-4 pt-6 text-xs sm:px-6 lg:px-8">
        <p>KawanKRS Workspace • Sistem Bimbingan &amp; Pelacakan Akademik</p>
        <p>Fakultas Ilmu Komputer</p>
      </footer>
    </>
  );
}
