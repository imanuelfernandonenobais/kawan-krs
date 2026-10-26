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

export function BiayaPage() {
  const notify = useFeedback();
  const { searchBiaya, setSearchBiaya, biayaList, setBiayaList } =
    useAdminState();
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
            <span className="text-primary">KEUANGAN &amp; ADMINISTRASI</span> /
            Tarif Perkuliahan
          </p>
          <h2 className="text-foreground mt-1 text-2xl font-black tracking-tight">
            Biaya Semester
          </h2>
          <p className="text-muted-foreground mt-0.5 text-xs">
            Kelola konfigurasi skema biaya perkuliahan, tarif per SKS per
            angkatan, dan penyesuaian tahun ajaran.
          </p>
        </div>

        <Button
          onClick={() => notify("Membuka modal Tambah Biaya Semester baru")}
          variant="default"
        >
          <Plus data-icon="inline-start" />
          Tambah Biaya Semester
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <Card>
        <CardContent className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <InputGroup className="w-full md:flex-1">
            <InputGroupInput
              aria-label="Cari semester, kode tarif, atau tahun ajaran..."
              type="text"
              value={searchBiaya}
              onChange={(e) => setSearchBiaya(e.target.value)}
              placeholder="Cari semester, kode tarif, atau tahun ajaran..."
            />
            <InputGroupAddon>
              <Search data-icon="inline-start" />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
            <NativeSelect aria-label="Semua Angkatan">
              <NativeSelectOption>Semua Angkatan</NativeSelectOption>
              <NativeSelectOption>2024</NativeSelectOption>
              <NativeSelectOption>2023</NativeSelectOption>
              <NativeSelectOption>2022</NativeSelectOption>
              <NativeSelectOption>2021</NativeSelectOption>
            </NativeSelect>

            <NativeSelect aria-label="Semua Tahun Ajaran">
              <NativeSelectOption>Semua Tahun Ajaran</NativeSelectOption>
              <NativeSelectOption>2024/2025</NativeSelectOption>
              <NativeSelectOption>2023/2024</NativeSelectOption>
              <NativeSelectOption>2022/2023</NativeSelectOption>
            </NativeSelect>

            <Button
              aria-label="Reset filter"
              onClick={() => setSearchBiaya("")}
              variant="outline"
              size="icon"
              title="Reset Filter"
            >
              <RefreshCw data-icon="inline-start" />
            </Button>

            <Button
              onClick={() => notify("Mengekspor data tarif ke Excel...")}
              variant="outline"
            >
              <Download data-icon="inline-start" />
              Ekspor
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table Biaya Semester */}
      <Card>
        <CardContent className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Semester</TableHead>
                  <TableHead>Kode Tarif</TableHead>
                  <TableHead>Deskripsi Skema</TableHead>
                  <TableHead className="text-center">Angkatan</TableHead>
                  <TableHead>Tahun Ajaran</TableHead>
                  <TableHead>Tarif Per SKS</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {biayaList
                  .filter(
                    (b) =>
                      b.title
                        .toLowerCase()
                        .includes(searchBiaya.toLowerCase()) ||
                      b.code.toLowerCase().includes(searchBiaya.toLowerCase())
                  )
                  .map((biaya, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="whitespace-nowrap">
                        <Badge variant="secondary">•{biaya.semester}</Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {biaya.code}
                      </TableCell>
                      <TableCell className="max-w-sm">
                        <strong className="text-foreground block font-bold">
                          {biaya.title}
                        </strong>
                        <p className="text-muted-foreground mt-0.5 text-[10px] leading-relaxed">
                          {biaya.desc}
                        </p>
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap">
                        <Badge variant="secondary">{biaya.cohort}</Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {biaya.academicYear}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <span className="text-foreground block font-black">
                          {biaya.rate}
                        </span>
                        <span className="text-muted-foreground text-[10px]">
                          / SKS
                        </span>
                      </TableCell>
                      <TableCell className="text-right whitespace-nowrap">
                        <Button
                          aria-label="Edit"
                          onClick={() => notify(`Edit ${biaya.code}`)}
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
                          message={`Hapus konfigurasi ${biaya.code}?`}
                          onConfirm={() => {
                            setBiayaList(biayaList.filter((_, i) => i !== idx));
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
            <p>Menampilkan 1-6 dari 24 konfigurasi tarif</p>
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
