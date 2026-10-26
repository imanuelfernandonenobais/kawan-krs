import { cn } from "cn";
import { BookOpen, Users, ArrowRight, Calendar } from "lucide-react";

import { useFeedback } from "@/components/feedback-provider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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

import { useAdminState } from "../state";

export function DashboardPage() {
  const notify = useFeedback();
  const { selectedYear, setSelectedYear, logs } = useAdminState();
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
            Ringkasan Eksekutif
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground text-[11px]">
            Sinkronisasi Terakhir: Hari ini, 11:20 WIB
          </span>
        </div>
        <h2 className="text-foreground mt-1 text-xl font-black tracking-tight sm:text-2xl">
          Dashboard Akademik
        </h2>
        <p className="text-muted-foreground mt-0.5 text-xs">
          Kendali tata kelola kurikulum, siklus pengisian KRS, dan realisasi
          biaya perkuliahan.
        </p>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card>
          <CardContent className="relative">
            <div className="flex items-center justify-between">
              <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-xl">
                <Users className="size-5" />
              </div>
              <Badge variant="secondary">+142 Terverifikasi</Badge>
            </div>
            <div className="mt-4">
              <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                Jumlah User
              </span>
              <div className="text-foreground mt-1 text-3xl font-black">
                12.878
              </div>
              <span className="text-muted-foreground mt-1 block text-[11px]">
                <span className="mr-1.5 inline-block size-2 rounded-full bg-emerald-500"></span>
                Mahasiswa, Dosen &amp; Tendik
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="relative">
            <div className="flex items-center justify-between">
              <div className="bg-muted text-primary flex size-10 items-center justify-center rounded-xl">
                <Calendar className="size-5" />
              </div>
              <Badge variant="secondary">Aktif Berjalan</Badge>
            </div>
            <div className="mt-4">
              <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                Jumlah Semester
              </span>
              <div className="text-foreground mt-1 text-3xl font-black">
                8 Semester
              </div>
              <span className="text-muted-foreground mt-1 block text-[11px]">
                <span className="bg-primary mr-1.5 inline-block size-2 rounded-full"></span>
                Periode Ganjil 2024/2025
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="relative">
            <div className="flex items-center justify-between">
              <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-xl">
                <BookOpen className="size-5" />
              </div>
              <Badge variant="secondary">100% Terplot</Badge>
            </div>
            <div className="mt-4">
              <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                Total Mata Kuliah Aktif
              </span>
              <div className="text-foreground mt-1 text-3xl font-black">
                284 MK
              </div>
              <span className="text-muted-foreground mt-1 block text-[11px]">
                <span className="mr-1.5 inline-block size-2 rounded-full bg-amber-500"></span>
                Kurikulum Berjalan 2024/2025
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Academic Trend Card (Spline Chart) */}
      <Card>
        <CardHeader className="mb-6 flex flex-col flex-wrap items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <CardTitle>
              <h3>Tren Aktivitas Akademik Bulanan</h3>
            </CardTitle>
            <CardDescription>
              Perbandingan pertumbuhan dan keaktifan mahasiswa, dosen, serta
              mata kuliah
            </CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="text-foreground flex items-center gap-1.5">
                <span className="bg-primary size-2.5 rounded-full"></span>{" "}
                Mahasiswa
              </span>
              <span className="text-foreground flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-slate-800"></span>{" "}
                Dosen
              </span>
              <span className="text-foreground flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-amber-500"></span>{" "}
                Mata Kuliah
              </span>
            </div>

            <NativeSelect
              aria-label="Tahun: 2024"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <NativeSelectOption value="2024">Tahun: 2024</NativeSelectOption>
              <NativeSelectOption value="2023">Tahun: 2023</NativeSelectOption>
            </NativeSelect>
          </div>
        </CardHeader>
        <CardContent>
          {/* SVG Spline Graphic Chart */}
          <div className="relative h-64 w-full sm:h-72">
            <svg
              viewBox="0 0 900 260"
              className="h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="gradientRed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7a1212" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#7a1212" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="gradientYellow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <line
                x1="0"
                y1="50"
                x2="900"
                y2="50"
                stroke="#f1f5f9"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="0"
                y1="110"
                x2="900"
                y2="110"
                stroke="#f1f5f9"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="0"
                y1="170"
                x2="900"
                y2="170"
                stroke="#f1f5f9"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="0"
                y1="230"
                x2="900"
                y2="230"
                stroke="#e2e8f0"
                strokeWidth="1"
              />

              <path
                d="M 50 210 Q 150 200, 250 190 T 450 180 T 650 140 T 750 160 T 850 190 L 850 230 L 50 230 Z"
                fill="url(#gradientYellow)"
              />
              <path
                d="M 50 210 Q 150 200, 250 190 T 450 180 T 650 140 T 750 160 T 850 190"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
              />

              <path
                d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 65 T 750 130 T 850 175"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              <path
                d="M 50 180 Q 200 170, 350 110 T 550 160 T 650 50 T 750 120 T 850 170 L 850 230 L 50 230 Z"
                fill="url(#gradientRed)"
              />
              <path
                d="M 50 180 Q 200 170, 350 110 T 550 160 T 650 50 T 750 120 T 850 170"
                fill="none"
                stroke="#7a1212"
                strokeWidth="3.5"
              />

              <circle
                cx="650"
                cy="50"
                r="5"
                fill="#7a1212"
                stroke="#fff"
                strokeWidth="2.5"
              />
              <circle
                cx="650"
                cy="65"
                r="4"
                fill="#1e293b"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle
                cx="650"
                cy="140"
                r="4"
                fill="#f59e0b"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle cx="350" cy="110" r="4" fill="#7a1212" />

              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Agu (Puncak)",
                "Sep",
                "Okt",
                "Nov",
                "Des",
              ].map((month, idx) => (
                <text
                  key={month}
                  x={50 + idx * 72}
                  y="250"
                  textAnchor="middle"
                  className={cn(
                    "text-[10px]",
                    month.includes("Puncak")
                      ? "fill-[#7a1212] font-bold"
                      : "fill-slate-400"
                  )}
                >
                  {month}
                </text>
              ))}
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Logs */}
      <Card>
        <CardHeader className="mb-4 flex flex-wrap items-center justify-between">
          <div>
            <CardTitle>
              <h3>Log Aktivitas Sistem Terbaru</h3>
            </CardTitle>
            <CardDescription>
              Catatan ringkas audit trail dan kontrol konfigurasi sistem
              akademik.
            </CardDescription>
          </div>
          <Button
            onClick={() => notify("Membuka audit log penuh")}
            variant="ghost"
          >
            <span>Lihat Semua Log</span>
            <ArrowRight data-icon="inline-start" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Waktu</TableHead>
                  <TableHead>User / Aktor</TableHead>
                  <TableHead>Aksi / Event Sistem</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="align-top whitespace-nowrap">
                      <span className="text-foreground block font-semibold">
                        {log.time}
                      </span>
                      <span className="text-muted-foreground text-[11px]">
                        {log.clock}
                      </span>
                    </TableCell>
                    <TableCell className="align-top whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <Avatar>
                          <AvatarFallback>
                            {log.icon ? log.icon : log.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="text-foreground block leading-tight font-bold">
                            {log.user}
                          </span>
                          <span className="text-muted-foreground text-[10px]">
                            {log.role}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <span className="text-foreground block font-bold">
                        {log.actionTitle}
                      </span>
                      <p className="text-muted-foreground mt-0.5 text-[11px] leading-relaxed">
                        {log.actionDesc}
                      </p>
                    </TableCell>
                    <TableCell className="text-right align-top whitespace-nowrap">
                      <Badge
                        variant={
                          log.statusType === "success"
                            ? "secondary"
                            : log.statusType === "warning"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
