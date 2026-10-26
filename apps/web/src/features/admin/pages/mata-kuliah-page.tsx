import { Search, RefreshCw, Download, Plus, Edit3, Trash2 } from "lucide-react";

import { ConfirmAction } from "@/components/confirm-action";
import { useFeedback } from "@/components/feedback-provider";
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

import { useAdminState } from "../state";

export function MataKuliahPage() {
  const notify = useFeedback();
  const { searchMatkul, setSearchMatkul, matkulList, setMatkulList } =
    useAdminState();
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
            <span className="text-primary">KURIKULUM &amp; PERKULIAHAN</span> /
            Master Data
          </p>
          <h2 className="text-foreground mt-1 text-2xl font-black tracking-tight">
            Master Mata Kuliah
          </h2>
          <p className="text-muted-foreground mt-0.5 text-xs">
            Kelola data kurikulum, beban SKS, silabus, dan status ketersediaan
            mata kuliah.
          </p>
        </div>

        <Button
          onClick={() => notify("Membuka modal Tambah Mata Kuliah baru")}
          variant="default"
        >
          <Plus data-icon="inline-start" />
          Tambah Mata Kuliah
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <Card>
        <CardContent className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <InputGroup className="w-full md:flex-1">
            <InputGroupInput
              aria-label="Cari mata kuliah, kode MK, atau deskripsi..."
              type="text"
              value={searchMatkul}
              onChange={(e) => setSearchMatkul(e.target.value)}
              placeholder="Cari mata kuliah, kode MK, atau deskripsi..."
            />
            <InputGroupAddon>
              <Search data-icon="inline-start" />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
            <NativeSelect aria-label="Semua Semester">
              <NativeSelectOption>Semua Semester</NativeSelectOption>
              <NativeSelectOption>Semester 1</NativeSelectOption>
              <NativeSelectOption>Semester 3</NativeSelectOption>
              <NativeSelectOption>Semester 4</NativeSelectOption>
              <NativeSelectOption>Semester 5</NativeSelectOption>
            </NativeSelect>

            <NativeSelect aria-label="Semua Status">
              <NativeSelectOption>Semua Status</NativeSelectOption>
              <NativeSelectOption>Aktif</NativeSelectOption>
              <NativeSelectOption>Pilihan</NativeSelectOption>
            </NativeSelect>

            <Button
              onClick={() =>
                notify("Mengekspor data mata kuliah ke CSV/Excel...")
              }
              variant="outline"
            >
              <Download data-icon="inline-start" />
              Export
            </Button>

            <Button
              aria-label="Reset filter"
              onClick={() => setSearchMatkul("")}
              variant="outline"
              size="icon"
              title="Reset Filter"
            >
              <RefreshCw data-icon="inline-start" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table Mata Kuliah */}
      <Card>
        <CardContent className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Kode</TableHead>
                  <TableHead>Nama Mata Kuliah</TableHead>
                  <TableHead>Deskripsi</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {matkulList
                  .filter(
                    (m) =>
                      m.name
                        .toLowerCase()
                        .includes(searchMatkul.toLowerCase()) ||
                      m.code.toLowerCase().includes(searchMatkul.toLowerCase())
                  )
                  .map((mk, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="whitespace-nowrap">
                        {mk.code}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <strong className="text-foreground block font-bold">
                          {mk.name}
                        </strong>
                        <span className="text-muted-foreground text-[10px]">
                          {mk.type}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-xs">{mk.desc}</TableCell>
                      <TableCell className="whitespace-nowrap">
                        <Badge variant="secondary">{mk.semester}</Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <Badge
                          variant={
                            mk.statusType === "active" ? "secondary" : "outline"
                          }
                        >
                          {mk.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right whitespace-nowrap">
                        <Button
                          aria-label="Edit"
                          onClick={() => notify(`Edit ${mk.name}`)}
                          variant="ghost"
                          size="icon"
                        >
                          <Edit3 data-icon="inline-start" />
                        </Button>
                        <ConfirmAction
                          aria-label="Hapus"
                          variant="ghost"
                          size="icon"
                          className="ml-1"
                          message={`Hapus mata kuliah ${mk.name}?`}
                          onConfirm={() => {
                            setMatkulList(
                              matkulList.filter((_, i) => i !== idx)
                            );
                          }}
                        >
                          <Trash2 data-icon="inline-start" />
                        </ConfirmAction>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          {/* Pagination Footer */}
          <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-3 border-t p-4 text-xs sm:flex-row">
            <p>Menampilkan 1-8 dari 284 mata kuliah</p>
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
                  <Button variant="outline">36</Button>
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
