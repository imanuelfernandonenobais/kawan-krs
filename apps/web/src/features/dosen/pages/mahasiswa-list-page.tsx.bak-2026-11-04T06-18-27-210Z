import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Bell,
  Download,
  Search,
  Users,
  TrendingUp,
  CheckSquare,
  BookOpen,
  AlertTriangle,
  ArrowRight,
  Plus,
  ShieldCheck,
  LogOut,
} from "lucide-react";

import { useFeedback } from "@/components/feedback-provider";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { useDosenState } from "../state";

export function MahasiswaListPage() {
  const notify = useFeedback();
  const {
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
    selectedCohort,
    setSelectedCohort,
    filteredStudents,
  } = useDosenState();
  return (
    <>
      {/* Top Header */}
      <header className="border-border bg-background sticky top-0 z-30 border-b shadow-xs">
        <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-xl shadow-xs">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-foreground text-base font-bold tracking-tight">
                  KawanKRS
                </span>
                <Badge variant="secondary">PA PORTAL</Badge>
              </div>
              <p className="text-muted-foreground text-[10px]">
                Fakultas Ilmu Komputer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="border-border bg-muted text-foreground hidden items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold md:flex">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500"></span>
              T.A. Aktif: 2024/2025 Ganjil
            </div>

            <Button
              onClick={() =>
                notify("Mengunduh rekap monitoring bimbingan PA (Excel/PDF)...")
              }
              variant="outline"
              className="hidden"
            >
              <Download data-icon="inline-start" />
              Unduh Rekap
            </Button>

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

      <main className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        {/* Hero Welcome Banner */}
        <Card>
          <CardContent className="relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="bg-muted text-primary mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold">
                  <ShieldCheck className="size-3.5" />
                  Portal Pendampingan Akademik Aktif
                </div>
                <h1 className="text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Selamat Datang,{" "}
                  <span className="text-primary">Prof. Wisnu Jatmiko</span>
                </h1>
                <p className="text-muted-foreground mt-1.5 max-w-2xl text-xs leading-relaxed sm:text-sm">
                  Portal terpadu evaluasi dan monitoring kemajuan studi 18
                  mahasiswa bimbingan (anak wali) Fasilkom. Pantau progres SKS,
                  evaluasi IRS semester berjalan, serta kesiapan tugas akhir
                  secara tepat waktu.
                </p>
              </div>

              <Button
                onClick={() => notify("Membuka modal agenda konsultasi baru")}
                variant="default"
                className="shrink-0"
              >
                <Plus data-icon="inline-start" />
                Agenda Konsultasi Baru
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Card>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                  Total Bimbingan
                </span>
                <div className="text-foreground mt-1 text-2xl font-black">
                  18{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    Mahasiswa
                  </span>
                </div>
                <span className="text-foreground mt-1 flex items-center gap-1 text-[11px] font-semibold">
                  <span className="size-1.5 rounded-full bg-emerald-500"></span>{" "}
                  100% Terdaftar Aktif
                </span>
              </div>
              <div className="bg-muted text-primary flex size-10 items-center justify-center rounded-xl">
                <Users className="size-5" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                  Rata-Rata IPK
                </span>
                <div className="text-foreground mt-1 text-2xl font-black">
                  3.62{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    / 4.00
                  </span>
                </div>
                <span className="text-foreground mt-1 flex items-center gap-1 text-[11px] font-semibold">
                  <TrendingUp className="size-3.5" /> +0.08 tren semester ini
                </span>
              </div>
              <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-xl">
                <span className="text-base font-bold">★</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                  Penyelesaian KRS
                </span>
                <div className="text-foreground mt-1 text-2xl font-black">
                  18/18{" "}
                  <Badge variant="secondary" className="ml-1">
                    Terisi Penuh
                  </Badge>
                </div>
                <span className="text-muted-foreground mt-1 block text-[11px] font-medium">
                  Seluruh rencana studi telah diisi
                </span>
              </div>
              <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-xl">
                <CheckSquare className="size-5" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                  Tingkat Akhir
                </span>
                <div className="text-primary mt-1 text-2xl font-black">
                  4{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    Mahasiswa
                  </span>
                </div>
                <span className="text-foreground mt-1 flex items-center gap-1 text-[11px] font-semibold">
                  ⚑ Target Wisuda Genap 2025
                </span>
              </div>
              <div className="bg-muted text-primary flex size-10 items-center justify-center rounded-xl">
                <BookOpen className="size-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search & Filter Controls */}
        <Card>
          <CardContent className="flex flex-col gap-3">
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <InputGroup className="w-full md:w-96">
                <InputGroupInput
                  aria-label="Cari berdasarkan nama mahasiswa, NIM, atau fokus studi..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari berdasarkan nama mahasiswa, NIM, atau fokus studi..."
                />
                <InputGroupAddon>
                  <Search data-icon="inline-start" />
                </InputGroupAddon>
              </InputGroup>

              <div className="flex flex-wrap items-center gap-2">
                <ToggleGroup
                  aria-label="Status mahasiswa"
                  value={[selectedStatus]}
                  onValueChange={(values) => {
                    const value = values[0];
                    if (
                      value === "all" ||
                      value === "on-track" ||
                      value === "needs-help"
                    )
                      setSelectedStatus(value);
                  }}
                  variant="outline"
                  className="flex-wrap"
                >
                  <ToggleGroupItem value="all">Semua (18)</ToggleGroupItem>
                  <ToggleGroupItem value="on-track">
                    <span className="size-1.5 rounded-full bg-emerald-500"></span>
                    On-Track (15)
                  </ToggleGroupItem>
                  <ToggleGroupItem value="needs-help">
                    <span className="size-1.5 rounded-full bg-amber-500"></span>
                    Perlu Pendampingan (3)
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground mr-1 shrink-0 text-[11px] font-bold tracking-wider uppercase">
                Angkatan:
              </span>
              <ToggleGroup
                aria-label="Angkatan mahasiswa"
                value={[selectedCohort]}
                onValueChange={(values) => {
                  if (values[0]) setSelectedCohort(values[0]);
                }}
                variant="outline"
                className="flex-wrap"
              >
                <ToggleGroupItem value="all">Semua Angkatan</ToggleGroupItem>
                <ToggleGroupItem value="2024">2024 (Sem 1)</ToggleGroupItem>
                <ToggleGroupItem value="2023">2023 (Sem 3)</ToggleGroupItem>
                <ToggleGroupItem value="2022">2022 (Sem 5)</ToggleGroupItem>
                <ToggleGroupItem value="2021">2021 (Sem 7)</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        {/* Student Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="justify-between">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-11">
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-foreground text-sm leading-snug font-bold">
                          {student.name}
                        </h3>
                        <p className="text-muted-foreground text-[11px]">
                          {student.nim}
                        </p>
                        <p className="text-muted-foreground mt-0.5 text-[10px]">
                          {student.prodi}
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant={
                        student.statusType === "needs-help"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {student.status}
                    </Badge>
                  </div>

                  <div className="border-border bg-muted/80 my-3 grid grid-cols-3 gap-2 rounded-xl border p-2.5 text-center">
                    <div>
                      <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                        IPK
                      </span>
                      <span className="text-foreground mt-0.5 block text-xs font-black">
                        {student.ipk}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                        SKS Lulus
                      </span>
                      <span className="text-foreground mt-0.5 block text-xs font-black">
                        {student.sks}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block text-[9px] font-bold uppercase">
                        Beban KRS
                      </span>
                      <span className="text-primary mt-0.5 block text-xs font-black">
                        {student.krsLoad}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3 flex flex-col gap-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-muted-foreground">
                        Progres Menuju Kelulusan
                      </span>
                      <span className="text-foreground font-bold">
                        {student.progressText}
                      </span>
                    </div>
                    <Progress
                      aria-label="Progres menuju kelulusan"
                      value={Math.min(student.progress, 100)}
                    />
                  </div>

                  {student.warning ? (
                    <Alert className="mb-4">
                      <AlertTriangle data-icon="inline-start" />
                      <AlertDescription>
                        <span>{student.warning}</span>
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div className="border-border bg-muted text-foreground mb-3 flex items-center gap-1.5 rounded-lg border p-2 text-[11px] font-medium">
                      <BookOpen className="text-primary size-3.5 shrink-0" />
                      <span>{student.coursesInfo}</span>
                    </div>
                  )}

                  <div className="border-border bg-muted text-muted-foreground mb-4 rounded-xl border p-2.5 text-[11px]">
                    <strong className="text-foreground mb-1 block text-[10px] font-bold tracking-wider uppercase">
                      ! CATATAN TERAKHIR DOSEN PA:
                    </strong>
                    <p className="text-muted-foreground line-clamp-2 leading-relaxed italic">
                      "{student.note}"
                    </p>
                  </div>
                </div>
                {/* Tombol Masuk ke Detail Mahasiswa Bimbingan */}
              </CardContent>
              <CardFooter>
                <Link
                  to="/dosen/mahasiswa/$mahasiswaId"
                  activeOptions={{ exact: true }}
                  params={{ mahasiswaId: student.id }}
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full",
                  })}
                >
                  <span>Buka Detail &amp; Jalur Kelulusan</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
          {filteredStudents.length === 0 && (
            <Empty className="col-span-full" role="status">
              <EmptyHeader>
                <EmptyTitle>Tidak ada mahasiswa yang sesuai</EmptyTitle>
                <EmptyDescription>
                  Ubah kata pencarian atau filter untuk melihat mahasiswa
                  bimbingan.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          )}
        </div>

        {/* Pagination & Meta Footer */}
        <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-3 border-t pt-4 text-xs sm:flex-row">
          <p>
            Menampilkan 6 dari 18 mahasiswa bimbingan • Terakhir diperbarui:
            Hari ini, 09:30 WIB
          </p>
          <Pagination aria-label="Paginasi" className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button variant="outline" aria-label="Halaman sebelumnya">
                  ‹
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="default" aria-current="page">
                  1
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="outline">2</Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="outline">3</Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="outline" aria-label="Halaman berikutnya">
                  ›
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <footer className="border-border text-muted-foreground mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t px-4 pt-6 text-xs sm:px-6 lg:px-8">
        <p>
          KawanKRS • Sistem Informasi Bimbingan Akademik &amp; Rencana Studi
          Mahasiswa
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-muted-foreground"
          >
            Panduan Dosen PA
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-muted-foreground"
          >
            Pusat Bantuan Akademik
          </a>
          <span>© 2025 Fasilkom UI</span>
        </div>
      </footer>
    </>
  );
}
