import { useState } from "react";

import LoginPage, {
  type UserRole,
} from "./pages/auth/LoginPage";

import KrsGeneratorPage from "./pages/mahasiswa/KrsGeneratorPage";
import StudentDetailPage from "./pages/dosen/StudentDetailPage";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  const [currentRole, setCurrentRole] =
    useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
  };

  const handleLogout = () => {
    setCurrentRole(null);
  };

  // BELUM LOGIN
  if (currentRole === null) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // MAHASISWA
  if (currentRole === "mahasiswa") {
    return (
      <div>
        <KrsGeneratorPage />

        <button
          type="button"
          onClick={handleLogout}
          className="fixed bottom-5 right-5 z-50 rounded-lg bg-[#9f2020] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#861a1a]"
        >
          Keluar
        </button>
      </div>
    );
  }

  // DOSEN WALI
  if (currentRole === "dosen") {
    return (
      <div>
        <StudentDetailPage />

        <button
          type="button"
          onClick={handleLogout}
          className="fixed bottom-5 right-5 z-50 rounded-lg bg-[#9f2020] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#861a1a]"
        >
          Keluar
        </button>
      </div>
    );
  }

  // ADMIN AKADEMIK
  if (currentRole === "admin") {
    return (
      <div>
        <AdminDashboard />

        <button
          type="button"
          onClick={handleLogout}
          className="fixed bottom-5 right-5 z-50 rounded-lg bg-[#9f2020] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#861a1a]"
        >
          Keluar
        </button>
      </div>
    );
  }

  return <LoginPage onLogin={handleLogin} />;
}

export default App;
