"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

/**
 * 画面下からせり上がるボトムシート。
 * Radix Dialogでアクセシビリティ（フォーカストラップ/Escで閉じる）を担保し、
 * 見た目のアニメーションはFramer Motionで制御する。
 */
export function Sheet({ open, onOpenChange, children }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-40 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-sheet bg-surface px-6 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-3 shadow-2xl"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 32, stiffness: 320 }}
              >
                <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-surface-muted" />
                <Dialog.Close asChild>
                  <button
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted text-ink-muted"
                    aria-label="閉じる"
                  >
                    <X size={16} />
                  </button>
                </Dialog.Close>
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
