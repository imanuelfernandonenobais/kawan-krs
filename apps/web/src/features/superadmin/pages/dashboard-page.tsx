import { Link } from "@tanstack/react-router";
import { cn } from "cn";
import {
  GraduationCap,
  ArrowRight,
  UserCheck,
  Shield,
  Clock,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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

import { useSuperAdminState } from "../state";

export function DashboardPage() {
  const { selectedYear, setSelectedYear, auditLogs } = useSuperAdminState();
  return (
    <main className="flex flex-col gap-6 p-6">
      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Dosen */}
        <Card>
          <CardContent className="flex items-start justify-between">
            <div>
              <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                Dosen
              </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-foreground text-3xl font-black">428</span>
                <Badge variant="secondary">+12 semester ini</Badge>
              </div>
              <span className="text-muted-foreground mt-2 block text-[11px]">
                Dosen Aktif Pengajar
              </span>
            </div>
            <div className="bg-muted text-primary flex size-10 items-center justify-center rounded-xl">
              <UserCheck className="size-5" />
            </div>
          </CardContent>
        </Card>

        {/* Mahasiswa */}
        <Card>
          <CardContent className="flex items-start justify-between">
            <div>
              <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                Mahasiswa
              </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-foreground text-3xl font-black">
                  12,450
                </span>
                <Badge variant="secondary">98.4% KRS Terisi</Badge>
              </div>
              <span className="text-muted-foreground mt-2 block text-[11px]">
                Mahasiswa Terdaftar
              </span>
            </div>
            <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-xl">
              <GraduationCap className="size-5" />
            </div>
          </CardContent>
        </Card>

        {/* Admin Akademik */}
        <Card>
          <CardContent className="flex items-start justify-between">
            <div>
              <span className="text-muted-foreground block text-[11px] font-bold tracking-wider uppercase">
                Admin Akademik
              </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-foreground text-3xl font-black">36</span>
                <Badge variant="secondary">Aktif Online</Badge>
              </div>
              <span className="text-muted-foreground mt-2 block text-[11px]">
                Staf BAA &amp; Fakultas
              </span>
            </div>
            <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-xl">
              <Shield className="size-5" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SIAKAD Traffic Spline Chart */}
      <Card>
        <CardHeader className="mb-6 flex flex-col flex-wrap items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <CardTitle>
              <h3>Tren Aktivitas &amp; Trafik Sistem SIAKAD</h3>
            </CardTitle>
            <CardDescription>
              Perbandingan aktivitas pengguna bulanan selama tahun akademik
              berjalan.
            </CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="text-foreground flex items-center gap-1.5">
                <span className="bg-primary size-2.5 rounded-full"></span>{" "}
                Mahasiswa
              </span>
              <span className="text-foreground flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-blue-600"></span>{" "}
                Dosen
              </span>
              <span className="text-foreground flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-amber-500"></span>{" "}
                Admin
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
          {/* Graphic Chart with Peak Tooltip */}
          <div className="relative h-64 w-full sm:h-72">
            <svg
              viewBox="0 0 900 260"
              className="h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient
                  id="gradientSuperRed"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#7a1212" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#7a1212" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient
                  id="gradientSuperBlue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <line
                x1="0"
                y1="230"
                x2="900"
                y2="230"
                stroke="#e2e8f0"
                strokeWidth="1"
              />

              {/* Admin dashed line */}
              <path
                d="M 50 200 L 850 200"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Dosen Blue Curve */}
              <path
                d="M 50 200 Q 200 190, 350 140 T 550 180 T 650 90 T 750 160 T 850 195 L 850 230 L 50 230 Z"
                fill="url(#gradientSuperBlue)"
              />
              <path
                d="M 50 200 Q 200 190, 350 140 T 550 180 T 650 90 T 750 160 T 850 195"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
              />

              {/* Mahasiswa Red Curve */}
              <path
                d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 40 T 750 130 T 850 180 L 850 230 L 50 230 Z"
                fill="url(#gradientSuperRed)"
              />
              <path
                d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 40 T 750 130 T 850 180"
                fill="none"
                stroke="#7a1212"
                strokeWidth="3.5"
              />

              {/* Vertical dashed line indicator on peak */}
              <line
                x1="650"
                y1="40"
                x2="650"
                y2="230"
                stroke="#7a1212"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle
                cx="650"
                cy="40"
                r="5"
                fill="#7a1212"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle
                cx="650"
                cy="90"
                r="4"
                fill="#2563eb"
                stroke="#fff"
                strokeWidth="2"
              />

              {/* X Axis labels */}
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

            {/* Floating Tooltip over peak */}
            <div className="border-border bg-popover text-popover-foreground pointer-events-none absolute top-2 left-[62%] -translate-x-1/2 rounded-xl border p-2 text-[10px] shadow-lg">
              <strong className="block font-bold">
                Agustus (Puncak KRS Ganjil)
              </strong>
              <span className="text-muted-foreground">
                Mahasiswa: 384,120 aktivitas / bln
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Table */}
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
          <Link
            to="/superadmin/audit"
            activeOptions={{ exact: true }}
            className={buttonVariants({ variant: "link" })}
          >
            <span>Lihat Semua Log</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Waktu</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Aksi / Event</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.slice(0, 5).map((log, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="align-top whitespace-nowrap">
                      <div className="text-foreground flex items-center gap-1.5 font-medium">
                        <Clock className="text-muted-foreground size-3.5 shrink-0" />
                        <span>{log.time}</span>
                      </div>
                    </TableCell>
                    <TableCell className="align-top whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        {
                          <Avatar>
                            <AvatarImage src={log.avatar} alt={log.user} />
                            <AvatarFallback>
                              {log.icon ? log.icon : log.initials}
                            </AvatarFallback>
                          </Avatar>
                        }
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
