"use client";

import { PhraseCard } from "./PhraseCard";
import { PhraseDetailSheet } from "./PhraseDetailSheet";
import { usePhraseSelection } from "@/hooks/usePhraseSelection";
import type { Phrase } from "@/types/phrase";

interface PhraseListProps {
  phrases: Phrase[];
  emptyMessage?: string;
}

/** フレーズ一覧と詳細シートの開閉・お気に入り・履歴記録をまとめて管理する。 */
export function PhraseList({ phrases, emptyMessage }: PhraseListProps) {
  const { selected, select, clear, isFavorite, toggle } = usePhraseSelection();

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
          <PhraseCard key={phrase.id} phrase={phrase} onSelect={select} />
        ))}
      </div>
      <PhraseDetailSheet
        phrase={selected}
        onOpenChange={(open) => {
          if (!open) clear();
        }}
        isFavorite={selected ? isFavorite(selected.id) : false}
        onToggleFavorite={toggle}
      />
    </>
  );
}
