"use client";

import { ScenePhraseCard } from "./ScenePhraseCard";
import { SceneDetailSheet } from "./SceneDetailSheet";
import { usePhraseSelection } from "@/hooks/usePhraseSelection";
import type { ScenePhrase } from "@/types/scene";

interface ScenePhraseListProps {
  phrases: ScenePhrase[];
  emptyMessage?: string;
}

/** シーン別フレーズ一覧と詳細シートの開閉・お気に入り・履歴記録をまとめて管理する。 */
export function ScenePhraseList({ phrases, emptyMessage }: ScenePhraseListProps) {
  const { selected, select, onOpenChange, isFavorite, toggle } = usePhraseSelection<ScenePhrase>();

  if (phrases.length === 0) {
    return (
      <p className="pt-10 text-center text-sm text-ink-muted">
        {emptyMessage ?? "まだありません"}
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {phrases.map((phrase) => (
          <ScenePhraseCard key={phrase.id} phrase={phrase} onSelect={select} />
        ))}
      </div>
      <SceneDetailSheet
        phrase={selected}
        onOpenChange={onOpenChange}
        isFavorite={selected ? isFavorite(selected.id) : false}
        onToggleFavorite={toggle}
      />
    </>
  );
}
