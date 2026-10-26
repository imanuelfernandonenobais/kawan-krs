import { createContext, useContext, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const FeedbackContext = createContext<((message: string) => void) | null>(null);

/** Presentation-only feedback for existing prototype actions, not an API success signal. */
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <FeedbackContext value={setMessage}>
      {children}
      <Dialog
        open={message !== null}
        onOpenChange={(open) => {
          if (!open) setMessage(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Informasi</DialogTitle>
            <DialogDescription>{message}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button />}>Tutup</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </FeedbackContext>
  );
}

export function useFeedback() {
  const notify = useContext(FeedbackContext);
  if (!notify)
    throw new Error("useFeedback must be used within FeedbackProvider");
  return notify;
}
