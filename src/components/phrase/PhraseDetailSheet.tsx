"use client";

import { Heart } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { LevelDots } from "@/components/ui/level-dots";
import { cn } from "@/lib/utils";
import type { Phrase } from "@/types/phrase";

interface PhraseDetailSheetProps {
  phrase: Phrase | null;
  onOpenChange: (open: boolean) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

/** フレーズタップ時に下からせり上がる詳細シート。意味・例文・3指標を表示する。 */
export function PhraseDetailSheet({
  phrase,
  onOpenChange,
  isFavorite,
  onToggleFavorite,
}: PhraseDetailSheetProps) {
  return (
    <Sheet open={phrase !== null} onOpenChange={onOpenChange}>
      {phrase && (
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-3 pr-10">
            <div>
              <p lang="en" className="text-xl font-semibold text-ink">{phrase.en}</p>
              <p className="mt-1 text-sm text-ink-muted">{phrase.meaning}</p>
            </div>
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

          <div className="rounded-card bg-surface-muted p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">Example</p>
            <p lang="en" className="mt-1 text-sm text-ink">{phrase.example}</p>
          </div>

          <div className="flex flex-col gap-3">
            <LevelDots label="使用頻度" value={phrase.frequency} />
            <LevelDots label="フォーマル度" value={phrase.formality} />
            <LevelDots label="難易度" value={phrase.difficulty} />
          </div>
        </div>
      )}
    </Sheet>
  );
}
