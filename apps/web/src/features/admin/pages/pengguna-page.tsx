import { cn } from "cn";
import { Users, Search, Download, Edit3, Trash2, Filter } from "lucide-react";

import { ConfirmAction } from "@/components/confirm-action";
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

import { useAdminState } from "../state";

export function PenggunaPage() {
  const notify = useFeedback();
  const { searchUsers, setSearchUsers, usersList, setUsersList } =
    useAdminState();
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
            <span className="text-primary">KEPEGAWAIAN &amp; MAHASISWA</span> /
            Pengguna Sistem
          </p>
          <h2 className="text-foreground mt-1 text-2xl font-black tracking-tight">
            Manajemen Pengguna
          </h2>
          <p className="text-muted-foreground mt-0.5 text-xs">
            Kelola akun dan data civitas akademika
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            <Users data-icon="inline-start" />
            Total Terdaftar: 1.240
          </Badge>
          <Button
            onClick={() => notify("Mengekspor daftar pengguna...")}
            variant="outline"
          >
            <Download data-icon="inline-start" />
            Ekspor
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <InputGroup className="w-full md:flex-1">
            <InputGroupInput
              aria-label="Cari nama atau email pengguna..."
              type="text"
              value={searchUsers}
              onChange={(e) => setSearchUsers(e.target.value)}
              placeholder="Cari nama atau email pengguna..."
            />
            <InputGroupAddon>
              <Search data-icon="inline-start" />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
            <NativeSelect aria-label="Semua Fakultas">
              <NativeSelectOption>Semua Fakultas</NativeSelectOption>
              <NativeSelectOption>Fakultas Ilmu Komputer</NativeSelectOption>
              <NativeSelectOption>Fakultas Teknik</NativeSelectOption>
              <NativeSelectOption>
                Fakultas Ekonomi &amp; Bisnis
              </NativeSelectOption>
              <NativeSelectOption>Fakultas Kedokteran</NativeSelectOption>
            </NativeSelect>

            <NativeSelect aria-label="Semua Angkatan">
              <NativeSelectOption>Semua Angkatan</NativeSelectOption>
              <NativeSelectOption>2024</NativeSelectOption>
              <NativeSelectOption>2023</NativeSelectOption>
              <NativeSelectOption>2022</NativeSelectOption>
              <NativeSelectOption>2021</NativeSelectOption>
              <NativeSelectOption>Dosen</NativeSelectOption>
            </NativeSelect>

            <Button
              onClick={() => notify("Filter data pengguna")}
              variant="secondary"
            >
              <Filter data-icon="inline-start" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table Users */}
      <Card>
        <CardContent className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Fakultas</TableHead>
                  <TableHead className="text-center">Angkatan</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersList
                  .filter(
                    (u) =>
                      u.name
                        .toLowerCase()
                        .includes(searchUsers.toLowerCase()) ||
                      u.email.toLowerCase().includes(searchUsers.toLowerCase())
                  )
                  .map((user, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                          }
                          <div>
                            <strong className="text-foreground block leading-tight font-bold">
                              {user.name}
                            </strong>
                            <span
                              className={cn(
                                "text-[10px] font-medium",
                                user.isLecturer
                                  ? "text-primary font-semibold"
                                  : "text-muted-foreground"
                              )}
                            >
                              {user.sub}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {user.email}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <Badge variant="secondary">{user.faculty}</Badge>
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap">
                        {user.isLecturer ? (
                          <Badge variant="secondary">DOSEN</Badge>
                        ) : (
                          <span className="text-foreground font-bold">
                            {user.cohort}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right whitespace-nowrap">
                        <Button
                          aria-label="Edit"
                          onClick={() => notify(`Edit profil ${user.name}`)}
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
                          message={`Hapus pengguna ${user.name}?`}
                          onConfirm={() => {
                            setUsersList(usersList.filter((_, i) => i !== idx));
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
            <p>Menampilkan 1-8 dari 1.240 pengguna</p>
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
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline">155</Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" aria-label="Halaman berikutnya">
                    ›
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
