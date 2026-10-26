import { Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>
            <h1>Halaman tidak ditemukan</h1>
          </EmptyTitle>
          <EmptyDescription>
            Alamat yang Anda buka tidak tersedia.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link to="/login" className={buttonVariants()}>
            Kembali ke halaman masuk
          </Link>
        </EmptyContent>
      </Empty>
    </main>
  );
}
