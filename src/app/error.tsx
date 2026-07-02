"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

/** セグメント内で予期しないエラーが起きた際に表示する画面。アプリの世界観を崩さないよう他画面と同じトーンで統一。 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 pb-[env(safe-area-inset-bottom)] text-center">
      <p className="text-base font-semibold text-ink">うまく表示できませんでした</p>
      <p className="text-sm text-ink-muted">一時的な問題の可能性があります。もう一度お試しください。</p>
      <Button variant="subtle" size="md" onClick={reset} className="mt-2">
        <RotateCcw size={16} />
        再読み込み
      </Button>
    </main>
  );
}
