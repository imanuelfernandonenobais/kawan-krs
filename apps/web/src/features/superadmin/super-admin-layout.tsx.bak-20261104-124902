import { Outlet, Link, useLocation } from "@tanstack/react-router";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  FileText,
  Bell,
  LogOut,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants, Button } from "@/components/ui/button";

import { SuperAdminStateContext, useSuperAdminFeatureState } from "./state";

export function SuperAdminLayout() {
  const state = useSuperAdminFeatureState();
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <SuperAdminStateContext value={state}>
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
                  Admin Portal
                </p>
              </div>
            </div>

            {/* Navigation Items (3 Menus) */}
            <nav
              aria-label="Navigasi utama"
              className="flex flex-col gap-1.5 p-4"
            >
              <Link
                to="/superadmin"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant: pathname === "/superadmin" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/superadmin/pengguna"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant:
                    pathname === "/superadmin/pengguna" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <Users className="size-4" />
                <span>User Management</span>
              </Link>

              <Link
                to="/superadmin/audit"
                activeOptions={{ exact: true }}
                className={buttonVariants({
                  variant:
                    pathname === "/superadmin/audit" ? "default" : "ghost",
                  className: "w-full justify-start",
                })}
              >
                <FileText className="size-4" />
                <span>Audit Logs</span>
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
            <div>
              <h2 className="text-foreground text-sm font-bold">
                System Infrastructure &amp; Logs
              </h2>
              <p className="text-muted-foreground text-[11px]">
                Super Administrator Control Overview
              </p>
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
                <Avatar className="size-9">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                    alt="Dr. Sarah Jenkins"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="hidden text-left text-xs leading-tight sm:block">
                  <p className="text-foreground font-bold">Dr. Sarah Jenkins</p>
                  <p className="text-muted-foreground text-[10px]">
                    Super Administrator
                  </p>
                </div>
                <ChevronDown className="text-muted-foreground size-3.5" />
              </div>
            </div>
          </header>

          <Outlet />
        </div>
      </div>
    </SuperAdminStateContext>
  );
}
