import { cn } from "@/lib/utils";
import type { Level } from "@/types/phrase";

interface LevelDotsProps {
  label: string;
  value: Level;
  className?: string;
}

/** 頻度・フォーマル度・難易度を5段階のドットで直感的に表示する。数字を読ませない工夫。 */
export function LevelDots({ label, value, className }: LevelDotsProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <span className="text-sm text-ink-muted">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              i <= value ? "bg-accent" : "bg-surface-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}
