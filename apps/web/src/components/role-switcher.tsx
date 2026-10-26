import { Link, useLocation } from "@tanstack/react-router";
import {
  GraduationCap,
  LogIn,
  ShieldCheck,
  UserCheck,
  UserPlus,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

const demoViews = [
  {
    role: "login",
    to: "/login",
    label: "Login",
    title: "Buka Halaman Login",
    icon: LogIn,
  },
  {
    role: "register",
    to: "/register",
    label: "Register",
    title: "Buka Halaman Register",
    icon: UserPlus,
  },
  {
    role: "mahasiswa",
    to: "/mahasiswa/rekomendasi",
    label: "Mahasiswa",
    title: "Buka Antarmuka Mahasiswa",
    icon: GraduationCap,
  },
  {
    role: "dosen",
    to: "/dosen/mahasiswa",
    label: "Dosen PA",
    title: "Buka Antarmuka Dosen PA",
    icon: UserCheck,
  },
  {
    role: "admin",
    to: "/admin",
    label: "Admin",
    title: "Buka Antarmuka Admin Akademik",
    icon: ShieldCheck,
  },
  {
    role: "superadmin",
    to: "/superadmin",
    label: "Super Admin",
    title: "Buka Antarmuka Super Admin",
    icon: ShieldCheck,
  },
] as const;

// Demo navigation only: these links intentionally do not authenticate a user.
export function RoleSwitcher() {
  const currentView = useLocation({
    select: (location) => location.pathname.split("/")[1],
  });

  return (
    <aside
      aria-label="Demo Role Switcher"
      className="border-border bg-popover text-popover-foreground fixed right-4 bottom-4 z-40 flex max-w-[calc(100%-2rem)] flex-wrap items-center gap-1.5 rounded-xl border p-1.5 text-xs shadow-xl"
    >
      <span className="border-border text-muted-foreground hidden border-r px-3 py-1 text-[10px] font-bold tracking-widest uppercase md:inline-block">
        Demo Mode
      </span>
      {demoViews.map(({ role, to, label, title, icon: Icon }) => (
        <Link
          key={role}
          to={to}
          activeOptions={{ exact: true }}
          title={title}
          className={buttonVariants({
            variant: currentView === role ? "default" : "ghost",
          })}
        >
          <Icon data-icon="inline-start" />
          <span className="hidden sm:inline">{label}</span>
        </Link>
      ))}
    </aside>
  );
}
