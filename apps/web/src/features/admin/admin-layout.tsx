import { Outlet, Link, useLocation } from "@tanstack/react-router";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  LogOut,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "@/components/ui/button";

import { AdminStateContext, useAdminFeatureState } from "./state";

export function AdminLayout() {
  const state = useAdminFeatureState();
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <AdminStateContext value={state}>
      <div className="bg-muted/50 text-foreground flex min-h-screen flex-col font-sans lg:flex-row">
        {/* Sidebar navigation */}
        <aside className="bg-sidebar text-sidebar-foreground flex w-full shrink-0 flex-col justify-between shadow-xl lg:w-64">
          <div>
            {/* Brand Logo Header */}
            <div className="border-sidebar-border flex items-center gap-3 border-b p-6">
              <div className="border-sidebar-border bg-sidebar-accent rounded-xl border p-2 backdrop-blur-md">
                <GraduationCap className="text-sidebar-foreground size-6" />
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight">KawanKRS</h1>
                <p className="text-sidebar-foreground text-[10px] font-semibold tracking-wider uppercase">
                  Akademik Portal
                </p>
              </div>
            </div>

            {/* Navigation Items (4 Menus) */}
            <nav
              aria-label="Navigasi utama"
              className="flex flex-col gap-1.5 p-4"
            >
              <Link
                to="/admin"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant: pathname === "/admin" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/admin/mata-kuliah"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant:
                    pathname === "/admin/mata-kuliah" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <BookOpen className="size-4" />
                <span>Mata Kuliah</span>
              </Link>

              <Link
                to="/admin/biaya"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant: pathname === "/admin/biaya" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <CreditCard className="size-4" />
                <span>Biaya Semester</span>
              </Link>

              <Link
                to="/admin/pengguna"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant: pathname === "/admin/pengguna" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <Users className="size-4" />
                <span>User Management</span>
              </Link>
            </nav>
          </div>

          {/* Bottom Sidebar Widget */}
          <div className="border-sidebar-border bg-sidebar-accent m-4 flex flex-col gap-3 rounded-2xl border p-4 text-xs">
            <div>
              <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                Tahun Akademik
              </span>
              <div className="text-sidebar-foreground mt-0.5 flex items-center gap-1.5 font-bold">
                <span>2024/2025 Ganjil</span>
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <Badge variant="secondary">Aktif</Badge>
              </div>
            </div>

            <div className="border-sidebar-border flex items-center justify-between border-t pt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sidebar-foreground hover:text-sidebar-foreground flex items-center gap-1.5 text-[11px] transition"
              >
                <HelpCircle className="size-3.5" />
                <span>Pusat Bantuan Akademik</span>
              </a>

              <Link
                to="/login"
                activeOptions={{ exact: true }}
                className={buttonVariants({ variant: "link" })}
              >
                <LogOut className="size-3.5" />
                <span>Keluar</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT MAIN CONTENT ================= */}
        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          {/* Top Header */}
          <header className="border-border bg-background sticky top-0 z-20 flex flex-wrap items-center justify-between border-b px-6 py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-muted-foreground text-xs font-medium">
                Dashboard Akademik
              </span>
              <Badge variant="secondary">
                <span className="size-1.5 rounded-full bg-emerald-500"></span>{" "}
                Sistem Normal
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                aria-label="Notifikasi"
                variant="ghost"
                size="icon"
                className="relative"
              >
                <Bell data-icon="inline-start" />
                <span className="bg-primary absolute top-1.5 right-1.5 size-2 rounded-full"></span>
              </Button>

              <div className="border-border flex items-center gap-3 border-l pl-3">
                <Avatar>
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div className="hidden text-left text-xs leading-tight sm:block">
                  <p className="text-foreground font-bold">
                    Rina Marlina, S.Sos.
                  </p>
                  <p className="text-muted-foreground text-[10px]">
                    Admin Akademik
                  </p>
                </div>
              </div>
            </div>
          </header>

          <Outlet />
        </div>
      </div>
    </AdminStateContext>
  );
}
