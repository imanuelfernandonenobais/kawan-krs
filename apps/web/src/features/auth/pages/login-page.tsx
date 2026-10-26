import { Link, useNavigate } from "@tanstack/react-router";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserCheck,
  ShieldCheck,
  ShieldAlert,
  GraduationCap as StudentIcon,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants, Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const demoAccounts = [
  {
    role: "mahasiswa",
    email: "nadya.salsabila@kawankrs.ac.id",
    label: "Mahasiswa",
    name: "Nadya",
    icon: StudentIcon,
  },
  {
    role: "dosen",
    email: "wisnu.jatmiko@kawankrs.ac.id",
    label: "Dosen PA",
    name: "Prof. Wisnu",
    icon: UserCheck,
  },
  {
    role: "admin",
    email: "rina.marlina@kawankrs.ac.id",
    label: "Admin",
    name: "Rina Marlina",
    icon: ShieldCheck,
  },
  {
    role: "superadmin",
    email: "sarah.jenkins@kawankrs.ac.id",
    label: "Super Admin",
    name: "Dr. Sarah",
    icon: ShieldAlert,
  },
] as const;

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("nadya.salsabila@kawankrs.ac.id");
  const [password, setPassword] = useState("SecretPassword123");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "mahasiswa" | "dosen" | "admin" | "superadmin"
  >("mahasiswa");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSelectDemoAccount = (
    role: "mahasiswa" | "dosen" | "admin" | "superadmin",
    demoEmail: string
  ) => {
    setEmail(demoEmail);
    setPassword("SecretPassword123");
    setSelectedRole(role);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email.trim(),
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.message ||
            "Gagal masuk. Periksa kembali email/NIM dan password Anda."
        );
        setIsLoading(false);
        return;
      }

      // Simpan session token & data profil user ke localStorage
      if (result.data) {
        localStorage.setItem("kawan_krs_token", result.data.sessionToken);
        localStorage.setItem(
          "kawan_krs_user",
          JSON.stringify(result.data.user)
        );
      }

      const userName = result.data?.user?.fullName || "Pengguna";
      const userRole = (result.data?.user?.role || "mahasiswa").toLowerCase();
      setSuccessMessage(
        `Login berhasil! Selamat datang, ${userName}. Mengalihkan...`
      );

      setTimeout(() => {
        if (userRole === "superadmin") {
          void navigate({ to: "/superadmin" });
        } else if (userRole === "admin") {
          void navigate({ to: "/admin" });
        } else if (userRole === "dosen") {
          void navigate({ to: "/dosen/mahasiswa" });
        } else {
          void navigate({ to: "/mahasiswa/rekomendasi" });
        }
      }, 500);
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage(
        "Tidak dapat terhubung ke server API. Pastikan server backend sedang aktif di port 3001."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-muted flex min-h-screen font-sans">
      {/* Left Pane - Branding */}
      <div className="bg-primary text-primary-foreground relative hidden flex-col justify-between overflow-hidden p-12 select-none lg:flex lg:w-1/2">
        <div className="pointer-events-none absolute top-0 right-0 -mt-24 -mr-24 h-[500px] w-[500px] rounded-full bg-[#a72020] opacity-40 blur-2xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 -mb-24 -ml-24 h-[450px] w-[450px] rounded-full bg-[#671010] opacity-50 blur-3xl"></div>

        {/* Top Header Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="border-primary-foreground/20 bg-primary-foreground/10 rounded-2xl border p-2.5">
            <GraduationCap className="size-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">KawanKRS</h1>
            <p className="text-primary-foreground text-xs">
              Sistem Perencanaan Studi Cerdas
            </p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="relative z-10 my-auto max-w-lg py-12">
          <h2 className="mb-6 text-5xl leading-[1.15] font-extrabold tracking-tight">
            Rencanakan
            <br />
            Studi, Wujudkan
            <br />
            Masa Depan
          </h2>
          <p className="text-primary-foreground/90 text-lg leading-relaxed font-light">
            KawanKRS membantu pengelolaan akademik yang lebih mudah dan
            terintegrasi untuk mendukung keberhasilan mahasiswa.
          </p>
        </div>

        {/* Cityscape decorative bottom */}
        <div className="text-primary-foreground/80 relative z-10 flex items-center justify-between border-t border-white/10 pt-8 text-xs">
          <span>Telkom University • Fasilkom</span>
          <span>Edisi Kurikulum 2024/2025</span>
        </div>

        {/* Abstract Cityscape Graphic */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 flex h-32 items-end opacity-20">
          <div className="bg-background mx-1 h-12 w-16 rounded-t-sm"></div>
          <div className="bg-background mx-1 size-24 rounded-t-sm"></div>
          <div className="bg-background mx-1 h-32 w-12 rounded-t-sm"></div>
          <div className="bg-background mx-1 h-16 w-32 rounded-t-sm"></div>
          <div className="bg-background mx-1 h-28 w-20 rounded-t-sm"></div>
          <div className="bg-background mx-1 h-20 w-28 rounded-t-sm"></div>
          <div className="bg-background mx-1 h-12 w-16 rounded-t-sm"></div>
        </div>
      </div>

      {/* Right Pane - Login Form */}
      <div className="bg-background flex w-full items-center justify-center p-6 md:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Header Title */}
          <div className="mb-6">
            <h2 className="text-foreground mb-2 text-3xl font-extrabold tracking-tight">
              Masuk ke KawanKRS
            </h2>
            <p className="text-muted-foreground text-sm">
              Silakan masuk dengan akun akademik Anda
            </p>
          </div>

          {/* Quick Demo Autofill Selector (4 Roles) */}
          <div className="border-border bg-muted/60 mb-6 rounded-xl border p-3.5">
            <p className="text-primary mb-2 flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="size-2 animate-pulse rounded-full bg-red-600"></span>
                Isi Otomatis Akun Contoh (Demo Role):
              </span>
              <span className="text-muted-foreground text-[10px] font-normal">
                Klik untuk mengisi form
              </span>
            </p>
            <ToggleGroup
              aria-label="Akun contoh"
              variant="outline"
              className="grid w-full grid-cols-2 sm:grid-cols-4"
              value={
                demoAccounts.some(
                  (account) =>
                    account.role === selectedRole && account.email === email
                )
                  ? [selectedRole]
                  : []
              }
              onValueChange={(values) => {
                const account = demoAccounts.find(
                  (candidate) => candidate.role === values[0]
                );
                if (account)
                  handleSelectDemoAccount(account.role, account.email);
              }}
            >
              {demoAccounts.map(({ role, label, name, icon: Icon }) => (
                <ToggleGroupItem
                  key={role}
                  value={role}
                  aria-label={`${label}: ${name}`}
                  className="h-auto flex-col gap-1 p-2"
                >
                  <Icon data-icon="inline-start" />
                  <span>{label}</span>
                  <span>{name}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle data-icon="inline-start" />
              <AlertDescription>
                <div className="flex-1">
                  <AlertTitle>Gagal Masuk</AlertTitle>
                  <p className="text-primary mt-0.5 leading-relaxed">
                    {errorMessage}
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {successMessage && (
            <Alert className="mb-4">
              <CheckCircle2 data-icon="inline-start" />
              <AlertDescription>
                <p className="leading-relaxed font-semibold">
                  {successMessage}
                </p>
              </AlertDescription>
            </Alert>
          )}

          {/* Form Login Asli (Email & Password) */}
          <form onSubmit={handleSubmit} aria-busy={isLoading}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="login-page-field-1">
                  Email Akademik / NIM / NIP
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="login-page-field-1"
                    autoComplete="username"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="nama@kawankrs.ac.id atau 2106721094"
                    required
                    disabled={isLoading}
                  />
                  <InputGroupAddon>
                    <Mail data-icon="inline-start" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="login-page-field-2">Password</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="login-page-field-2"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <InputGroupAddon>
                    <Lock data-icon="inline-start" />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      size="icon-sm"
                      aria-label={
                        showPassword
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                      aria-pressed={showPassword}
                    >
                      {showPassword ? (
                        <Eye data-icon="inline-start" />
                      ) : (
                        <EyeOff data-icon="inline-start" />
                      )}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <div className="flex items-center justify-between gap-4">
                <Field orientation="horizontal" className="w-auto">
                  <Checkbox id="login-page-field-3" defaultChecked />
                  <FieldLabel htmlFor="login-page-field-3">
                    Ingat saya
                  </FieldLabel>
                </Field>
                <a
                  href="#forgot"
                  onClick={(e) => e.preventDefault()}
                  className="text-primary hover:text-primary text-xs font-semibold"
                >
                  Lupa password?
                </a>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                variant="default"
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Spinner data-icon="inline-start" />
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk</span>
                    <ArrowRight data-icon="inline-start" />
                  </>
                )}
              </Button>
            </FieldGroup>
          </form>

          {/* Switch to Register */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-xs">
              Belum memiliki akun KawanKRS?{" "}
              <Link
                to="/register"
                activeOptions={{ exact: true }}
                className={buttonVariants({ variant: "link" })}
              >
                Daftar sekarang
              </Link>
            </p>
          </div>

          <div className="border-border mt-12 border-t pt-6 text-center">
            <p className="text-muted-foreground text-[11px]">
              © 2026 KawanKRS • Sistem Cerdas Rekomendasi Rencana Studi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
