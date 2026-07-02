"use client";

import { useEffect } from "react";

/**
 * ルートレイアウト自体が失敗した場合の最終フォールバック。
 * このファイルは自身で<html><body>を持つ必要がある（layout.tsxを置き換えるため）。
 */
export default function GlobalError({
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
    <html lang="ja">
      <body className="font-sans antialiased">
        <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-base font-semibold text-[#1D1D1F]">アプリを再読み込みしてください</p>
          <p className="text-sm text-[#6E6E73]">問題が続く場合は少し時間をおいてお試しください。</p>
          <button
            type="button"
            onClick={reset}
            className="mt-2 h-11 rounded-full bg-[#F5F5F7] px-4 text-base font-medium text-[#1D1D1F]"
          >
            再読み込み
          </button>
        </main>
      </body>
    </html>
  );
}
