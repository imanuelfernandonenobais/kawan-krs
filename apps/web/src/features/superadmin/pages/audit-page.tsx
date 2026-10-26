import { Search, RefreshCw, Download, Clock } from "lucide-react";

import { useFeedback } from "@/components/feedback-provider";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { useSuperAdminState } from "../state";

export function AuditPage() {
  const notify = useFeedback();
  const { searchLogs, setSearchLogs, auditLogs } = useSuperAdminState();
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
            Portal Administrasi &gt;{" "}
            <span className="text-primary">Audit Logs</span>
          </p>
          <div className="mt-1 flex items-center gap-3">
            <h2 className="text-foreground text-2xl font-black tracking-tight">
              Log Aktivitas Sistem
            </h2>
            <Badge variant="secondary">Live Monitoring</Badge>
          </div>
          <p className="text-muted-foreground mt-0.5 text-xs">
            Audit Trail &amp; Rekam Jejak Sistem
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => notify("Data log berhasil diperbarui!")}
            variant="outline"
          >
            <RefreshCw data-icon="inline-start" />
            Refresh Data
          </Button>

          <Button
            onClick={() => notify("Mengekspor log audit ke CSV/PDF...")}
            variant="default"
          >
            <Download data-icon="inline-start" />
            Export Log (CSV/PDF)
          </Button>
        </div>
      </div>

      {/* Filter toolbar */}
      <Card>
        <CardContent className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <InputGroup className="w-full md:flex-1">
            <InputGroupInput
              aria-label="Cari aktivitas, nama user, atau event sistem..."
              type="text"
              value={searchLogs}
              onChange={(e) => setSearchLogs(e.target.value)}
              placeholder="Cari aktivitas, nama user, atau event sistem..."
            />
            <InputGroupAddon>
              <Search data-icon="inline-start" />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
            <NativeSelect aria-label="Semua Kategori">
              <NativeSelectOption>Semua Kategori</NativeSelectOption>
              <NativeSelectOption>KRS System</NativeSelectOption>
              <NativeSelectOption>Database</NativeSelectOption>
              <NativeSelectOption>Security</NativeSelectOption>
              <NativeSelectOption>User Auth</NativeSelectOption>
            </NativeSelect>

            <NativeSelect aria-label="Semua Status">
              <NativeSelectOption>Semua Status</NativeSelectOption>
              <NativeSelectOption>Success</NativeSelectOption>
              <NativeSelectOption>Warning</NativeSelectOption>
              <NativeSelectOption>Failed</NativeSelectOption>
            </NativeSelect>

            <NativeSelect aria-label="Semua Waktu">
              <NativeSelectOption>Semua Waktu</NativeSelectOption>
              <NativeSelectOption>Hari Ini</NativeSelectOption>
              <NativeSelectOption>7 Hari Terakhir</NativeSelectOption>
              <NativeSelectOption>30 Hari Terakhir</NativeSelectOption>
            </NativeSelect>
          </div>
        </CardContent>
      </Card>

      {/* Table Audit Logs */}
      <Card>
        <CardContent className="overflow-hidden">
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
                {auditLogs
                  .filter(
                    (l) =>
                      l.actionTitle
                        .toLowerCase()
                        .includes(searchLogs.toLowerCase()) ||
                      l.user.toLowerCase().includes(searchLogs.toLowerCase())
                  )
                  .map((log, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="align-top whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
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
                      <TableCell className="max-w-md align-top">
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
          {/* Pagination */}
          <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-3 border-t p-4 text-xs sm:flex-row">
            <p>Menampilkan 1-8 dari 2.450 catatan log</p>
            <Pagination aria-label="Paginasi" className="mx-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button variant="outline" aria-label="Halaman sebelumnya">
                    ‹ Previous
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
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline">307</Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" aria-label="Halaman berikutnya">
                    Next ›
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
