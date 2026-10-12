import { useState } from "react";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export type UserRole =
  | "admin"
  | "dosen"
  | "mahasiswa";

type LoginPageProps = {
  onLogin?: (role: UserRole) => void;
};

function LoginPage({
  onLogin,
}: LoginPageProps) {
  const [role, setRole] =
    useState<UserRole>("mahasiswa");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("SecretPassword123");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(true);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Remember:", rememberMe);

    if (onLogin) {
      onLogin(role);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ============================= */}
      {/* PANEL KIRI */}
      {/* ============================= */}

      <div className="hidden lg:flex lg:w-1/2 bg-primary-600 flex-col justify-between p-12 text-white relative overflow-hidden">
        {/* DEKORASI BACKGROUND */}

        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500 rounded-full opacity-50 blur-3xl" />

        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-700 rounded-full opacity-50 blur-3xl" />

        {/* LOGO */}

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                KawanKRS
              </h1>

              <p className="text-xs text-primary-200">
                Sistem Perencanaan Studi Cerdas
              </p>
            </div>
          </div>
        </div>

        {/* TEKS UTAMA */}

        <div className="relative z-10 mb-20">
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Rencanakan
            <br />
            Studi, Wujudkan
            <br />
            Masa Depan
          </h2>

          <p className="text-lg text-primary-100 max-w-md leading-relaxed">
            KawanKRS membantu pengelolaan
            akademik yang lebih mudah dan
            terintegrasi untuk mendukung
            keberhasilan mahasiswa.
          </p>
        </div>

        {/* DEKORASI BAWAH */}

        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end opacity-20">
          <div className="w-16 h-12 bg-white mx-1 rounded-t-sm" />

          <div className="w-24 h-24 bg-white mx-1 rounded-t-sm" />

          <div className="w-12 h-32 bg-white mx-1 rounded-t-sm" />

          <div className="w-32 h-16 bg-white mx-1 rounded-t-sm" />

          <div className="w-20 h-28 bg-white mx-1 rounded-t-sm" />

          <div className="w-28 h-20 bg-white mx-1 rounded-t-sm" />

          <div className="w-16 h-12 bg-white mx-1 rounded-t-sm" />
        </div>
      </div>

      {/* ============================= */}
      {/* PANEL KANAN */}
      {/* ============================= */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* JUDUL LOGIN */}

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Masuk ke KawanKRS
            </h2>

            <p className="text-gray-500">
              Silakan masuk dengan akun Anda
            </p>
          </div>

          {/* ============================= */}
          {/* FORM LOGIN */}
          {/* ============================= */}

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* ROLE */}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Peran Pengguna / Role
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(
                    e.target.value as UserRole
                  )
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              >
                <option value="mahasiswa">
                  Mahasiswa
                </option>

                <option value="dosen">
                  Dosen Wali
                </option>

                <option value="admin">
                  Admin Akademik
                </option>
              </select>
            </div>

            {/* EMAIL */}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail className="h-5 w-5" />
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="nama@kawankrs.ac.id"
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-5 w-5" />
                </div>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors text-gray-900"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  aria-label={
                    showPassword
                      ? "Sembunyikan password"
                      : "Tampilkan password"
                  }
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* INGAT SAYA */}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(
                      e.target.checked
                    )
                  }
                  className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />

                <span className="text-sm text-gray-600">
                  Ingat saya
                </span>
              </label>

              <a
                href="#"
                className="text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                Lupa password?
              </a>
            </div>

            {/* TOMBOL MASUK */}

            <button
              type="submit"
              className="w-full bg-[#9f2020] hover:bg-[#861a1a] text-white font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2"
            >
              Masuk

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* FOOTER */}

          <div className="mt-16 text-center">
            <p className="text-xs text-gray-400">
              © 2026 KawanKRS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
