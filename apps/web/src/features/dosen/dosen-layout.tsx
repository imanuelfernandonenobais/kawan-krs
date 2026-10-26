import { Outlet } from "@tanstack/react-router";

import { DosenStateContext, useDosenFeatureState } from "./state";

export function DosenLayout() {
  const state = useDosenFeatureState();
  return (
    <DosenStateContext value={state}>
      <div className="bg-muted/50 text-foreground min-h-screen pb-16 font-sans">
        <Outlet />
      </div>
    </DosenStateContext>
  );
}
