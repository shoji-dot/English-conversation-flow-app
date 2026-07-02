"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { PhraseScatterChart } from "@/components/chart/PhraseScatterChart";
import { PhraseDetailSheet } from "@/components/phrase/PhraseDetailSheet";
import { PhraseCard } from "@/components/phrase/PhraseCard";
import { usePhraseSelection } from "@/hooks/usePhraseSelection";
import { phrases } from "@/data/phrases";
import { cn } from "@/lib/utils";

type View = "chart" | "list";
type SortKey = "frequency" | "difficulty";

export default function ChartPage() {
  const [view, setView] = useState<View>("chart");
  const [sortKey, setSortKey] = useState<SortKey>("frequency");
  const { selected, select, clear, isFavorite, toggle } = usePhraseSelection();

  const sortedPhrases = useMemo(
    () => [...phrases].sort((a, b) => b[sortKey] - a[sortKey]),
    [sortKey]
  );

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title="Chart" subtitle="重要度 × 難易度でフレーズを一覧" />

      <div className="mb-5 flex gap-2">
        {(["chart", "list"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-pressed={view === v}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              view === v ? "bg-accent text-white" : "bg-surface-muted text-ink-muted"
            )}
          >
            {v === "chart" ? "Chart" : "List"}
          </button>
        ))}
      </div>

      {view === "chart" ? (
        <PhraseScatterChart phrases={phrases} onSelect={select} />
      ) : (
        <>
          <div className="mb-4 flex gap-2">
            {(["frequency", "difficulty"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSortKey(key)}
                aria-pressed={sortKey === key}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  sortKey === key ? "bg-accent text-white" : "bg-surface-muted text-ink-muted"
                )}
              >
                {key === "frequency" ? "重要度順" : "難易度順"}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {sortedPhrases.map((phrase) => (
              <PhraseCard key={phrase.id} phrase={phrase} onSelect={select} />
            ))}
          </div>
        </>
      )}

      <PhraseDetailSheet
        phrase={selected}
        onOpenChange={(open) => {
          if (!open) clear();
        }}
        isFavorite={selected ? isFavorite(selected.id) : false}
        onToggleFavorite={toggle}
      />
    </main>
  );
}
