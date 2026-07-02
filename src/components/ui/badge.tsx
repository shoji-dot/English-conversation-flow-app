import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

/** 小さなラベル表示用。カテゴリー名などに使用。 */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
