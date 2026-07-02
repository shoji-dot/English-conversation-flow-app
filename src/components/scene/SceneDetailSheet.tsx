"use client";

import { Heart, Sparkles } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { LevelDots } from "@/components/ui/level-dots";
import { cn } from "@/lib/utils";
import type { ScenePhrase, PhraseTiers } from "@/types/scene";

interface SceneDetailSheetProps {
  phrase: ScenePhrase | null;
  onOpenChange: (open: boolean) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const tierLabels: { key: keyof PhraseTiers; labelJa: string }[] = [
  { key: "quick", labelJa: "最短" },
  { key: "standard", labelJa: "標準" },
  { key: "polite", labelJa: "丁寧" },
];

/** シーン別フレーズタップ時に下からせり上がる詳細シート。Quick/Standard/Polite全段階と伝え方を表示する。 */
export function SceneDetailSheet({
  phrase,
  onOpenChange,
  isFavorite,
  onToggleFavorite,
}: SceneDetailSheetProps) {
  return (
    <Sheet open={phrase !== null} onOpenChange={onOpenChange}>
      {phrase && (
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-3 pr-10">
            <p className="text-sm text-ink-muted">{phrase.situation}</p>
            <button
              type="button"
              aria-label={isFavorite ? "お気に入りから外す" : "お気に入りに追加"}
              onClick={() => onToggleFavorite(phrase.id)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-muted"
            >
              <Heart
                size={18}
                className={cn(isFavorite ? "fill-accent text-accent" : "text-ink-muted")}
              />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {tierLabels.map(({ key, labelJa }) => (
              <div key={key} className="rounded-card bg-surface-muted p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {labelJa}
                </p>
                <p lang="en" className="mt-1 text-base font-medium text-ink">
                  {phrase.tiers[key]}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2 rounded-card bg-surface-muted p-4">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                伝え方
              </p>
              <p className="mt-1 text-sm text-ink">{phrase.gesture}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <LevelDots label="使用頻度" value={phrase.frequency} />
            <LevelDots label="難易度" value={phrase.difficulty} />
          </div>
        </div>
      )}
    </Sheet>
  );
}
