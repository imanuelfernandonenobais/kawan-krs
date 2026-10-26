import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

import { FeedbackProvider } from "../components/feedback-provider";
import { NotFoundPage } from "../components/not-found-page";
import { RoleSwitcher } from "../components/role-switcher";

export const Route = createRootRoute({
  head: () => ({ meta: [{ title: "Kawan KRS | Sistem Perencanaan Studi" }] }),
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <div className="bg-muted/50 relative min-h-screen">
      <HeadContent />
      <FeedbackProvider>
        <Outlet />
        <RoleSwitcher />
      </FeedbackProvider>
    </div>
  );
}
