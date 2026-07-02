import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
}

/** カテゴリー/お気に入り/履歴など、下位画面共通のヘッダー（戻る + タイトル）。 */
export function PageHeader({ title, subtitle, backHref = "/" }: PageHeaderProps) {
  return (
    <div className="mb-5 flex items-center gap-2">
      <Link
        href={backHref}
        aria-label="ホームに戻る"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-ink"
      >
        <ChevronLeft size={20} />
      </Link>
      <div>
        <h1 className="text-lg font-semibold text-ink">{title}</h1>
        {subtitle && <p className="text-xs text-ink-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
