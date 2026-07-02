import Link from "next/link";
import { Home } from "lucide-react";

/** 存在しないURL・不正なカテゴリーIDアクセス時に表示するカスタム404。他画面とトーンを統一する。 */
export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 pb-[env(safe-area-inset-bottom)] text-center">
      <p className="text-base font-semibold text-ink">ページが見つかりません</p>
      <p className="text-sm text-ink-muted">お探しの内容は見つかりませんでした。</p>
      <Link
        href="/"
        className="mt-2 flex h-11 items-center gap-1.5 rounded-full bg-surface-muted px-4 text-base font-medium text-ink"
      >
        <Home size={16} />
        ホームに戻る
      </Link>
    </main>
  );
}
