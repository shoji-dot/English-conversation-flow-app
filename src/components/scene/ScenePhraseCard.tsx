"use client";

import { Badge } from "@/components/ui/badge";
import { industries } from "@/data/industries";
import type { ScenePhrase } from "@/types/scene";

interface ScenePhraseCardProps {
  phrase: ScenePhrase;
  onSelect: (phrase: ScenePhrase) => void;
}

/** シーン別フレーズ1件を表すカード。状況を小さく、標準フレーズを大きく見せる。 */
export function ScenePhraseCard({ phrase, onSelect }: ScenePhraseCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(phrase)}
      className="w-full rounded-card bg-surface p-4 text-left shadow-card transition-transform active:scale-[0.97]"
    >
      <p className="text-xs text-ink-muted">{phrase.situation}</p>
      <p lang="en" className="mt-1 text-base font-medium text-ink">{phrase.tiers.standard}</p>
      {phrase.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {phrase.tags.map((tag) => {
            const industry = industries.find((i) => i.id === tag);
            return <Badge key={tag}>{industry?.labelJa ?? tag}</Badge>;
          })}
        </div>
      )}
    </button>
  );
}
