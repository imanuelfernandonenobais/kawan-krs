import { Link, useNavigate } from "@tanstack/react-router";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Hash,
  Eye,
  EyeOff,
  ArrowRight,
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
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Spinner } from "@/components/ui/spinner";

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    identifier: "",
    role: "mahasiswa",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage(
        "Konfirmasi password tidak cocok dengan password yang Anda masukkan."
      );
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage("Password minimal harus terdiri dari 8 karakter.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          identifier: formData.identifier,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.message || "Pendaftaran akun gagal. Silakan periksa data Anda."
        );
        setIsLoading(false);
        return;
      }

      setSuccessMessage(
        "Pendaftaran akun KawanKRS berhasil! Mengalihkan ke halaman login..."
      );
      setTimeout(() => {
        void navigate({ to: "/login" });
      }, 1500);
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage(
        "Tidak dapat terhubung ke server backend API. Pastikan server aktif di port 3001."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-muted flex min-h-screen font-sans">
      {/* Left Pane - Branding (Same as Login) */}
      <div className="bg-primary text-primary-foreground relative hidden flex-col justify-between overflow-hidden p-12 select-none lg:flex lg:w-1/2">
        <div className="pointer-events-none absolute top-0 right-0 -mt-24 -mr-24 h-[500px] w-[500px] rounded-full bg-[#a72020] opacity-40 blur-2xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 -mb-24 -ml-24 h-[450px] w-[450px] rounded-full bg-[#671010] opacity-50 blur-3xl"></div>

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

        <div className="relative z-10 my-auto max-w-lg py-12">
          <h2 className="mb-6 text-5xl leading-[1.15] font-extrabold tracking-tight">
            Mulai Langkah
            <br />
            Akademik Terbaik
            <br />
            Bersama Kami
          </h2>
          <p className="text-primary-foreground/90 text-lg leading-relaxed font-light">
            Daftarkan diri Anda untuk merasakan kemudahan rekomendasi rencana
            studi, visualisasi kelulusan, dan bimbingan terpadu.
          </p>
        </div>

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

      {/* Right Pane - Register Form */}
      <div className="bg-background flex w-full items-center justify-center overflow-y-auto p-6 md:p-10 lg:w-1/2">
        <div className="my-auto w-full max-w-md">
          <div className="mb-6">
            <h2 className="text-foreground mb-1.5 text-2xl font-extrabold tracking-tight md:text-3xl">
              Buat Akun KawanKRS
            </h2>
            <p className="text-muted-foreground text-sm">
              Lengkapi data diri Anda untuk pendaftaran akun baru
            </p>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle data-icon="inline-start" />
              <AlertDescription>
                <div className="flex-1">
                  <AlertTitle>Gagal Mendaftar</AlertTitle>
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

          <form onSubmit={handleSubmit} aria-busy={isLoading}>
            <FieldGroup>
              {/* Full Name */}
              <Field>
                <FieldLabel htmlFor="register-page-field-1">
                  Nama Lengkap
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="register-page-field-1"
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nadya Salsabila"
                    required
                    disabled={isLoading}
                  />
                  <InputGroupAddon>
                    <User data-icon="inline-start" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {/* Role & NIM/NIP Row */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="register-page-field-2">
                    Peran Akun
                  </FieldLabel>
                  <NativeSelect
                    id="register-page-field-2"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full"
                  >
                    <NativeSelectOption value="mahasiswa">
                      Mahasiswa
                    </NativeSelectOption>
                    <NativeSelectOption value="dosen">
                      Dosen Wali
                    </NativeSelectOption>
                    <NativeSelectOption value="admin">
                      Admin Akademik
                    </NativeSelectOption>
                  </NativeSelect>
                </Field>

                <Field>
                  <FieldLabel htmlFor="register-page-field-3">
                    NIM / NIP
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="register-page-field-3"
                      type="text"
                      name="identifier"
                      value={formData.identifier}
                      onChange={handleChange}
                      placeholder="2106721094"
                      required
                      disabled={isLoading}
                    />
                    <InputGroupAddon>
                      <Hash data-icon="inline-start" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </div>
              {/* Email */}
              <Field>
                <FieldLabel htmlFor="register-page-field-4">
                  Email Akademik
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="register-page-field-4"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nadya.salsabila@kawankrs.ac.id"
                    required
                    disabled={isLoading}
                  />
                  <InputGroupAddon>
                    <Mail data-icon="inline-start" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {/* Password */}
              <Field>
                <FieldLabel htmlFor="register-page-field-5">
                  Password
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="register-page-field-5"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimal 8 karakter"
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
              {/* Confirm Password */}
              <Field>
                <FieldLabel htmlFor="register-page-field-6">
                  Konfirmasi Password
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="register-page-field-6"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Ulangi password"
                    required
                    disabled={isLoading}
                  />
                  <InputGroupAddon>
                    <Lock data-icon="inline-start" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="register-page-field-7" required />
                <FieldLabel htmlFor="register-page-field-7">
                  <span className="text-muted-foreground text-xs">
                    Saya menyetujui Ketentuan Layanan &amp; Kebijakan Privasi
                    KawanKRS.
                  </span>
                </FieldLabel>
              </Field>
              <Button
                type="submit"
                disabled={isLoading}
                variant="default"
                className="mt-2 w-full"
              >
                {isLoading ? (
                  <>
                    <Spinner data-icon="inline-start" />
                    <span>Mendaftarkan Akun...</span>
                  </>
                ) : (
                  <>
                    <span>Daftar Sekarang</span>
                    <ArrowRight data-icon="inline-start" />
                  </>
                )}
              </Button>
            </FieldGroup>
          </form>

          {/* Switch to Login */}
          <div className="mt-5 text-center">
            <p className="text-muted-foreground text-xs">
              Sudah memiliki akun?{" "}
              <Link
                to="/login"
                activeOptions={{ exact: true }}
                className={buttonVariants({ variant: "link" })}
              >
                Masuk di sini
              </Link>
            </p>
          </div>

          <div className="border-border mt-8 border-t pt-4 text-center">
            <p className="text-muted-foreground text-[11px]">
              © 2026 KawanKRS • Sistem Cerdas Rekomendasi Rencana Studi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
