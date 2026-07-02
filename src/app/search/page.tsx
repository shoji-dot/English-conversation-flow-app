"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { PhraseList } from "@/components/phrase/PhraseList";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { searchPhrases } from "@/data/phrases";
import { industries } from "@/data/industries";
import type { IndustryTag } from "@/types/phrase";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<IndustryTag[]>([]);

  const results = useMemo(
    () => searchPhrases(query, activeTags),
    [query, activeTags]
  );

  function toggleTag(tag: IndustryTag) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  const hasFilter = query.trim() !== "" || activeTags.length > 0;

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title="Search" subtitle="フレーズを検索" />

      <div className="relative mb-3">
        <SearchIcon
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="英語・日本語で検索"
          className="pl-10"
          autoFocus
        />
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {industries.map((industry) => {
          const active = activeTags.includes(industry.id);
          return (
            <button
              key={industry.id}
              type="button"
              onClick={() => toggleTag(industry.id)}
              aria-pressed={active}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                active ? "bg-accent text-white" : "bg-surface-muted text-ink-muted"
              )}
            >
              {industry.labelJa}
            </button>
          );
        })}
      </div>

      {!hasFilter ? (
        <p className="pt-10 text-center text-sm text-ink-muted">
          キーワードまたはタグで絞り込み
        </p>
      ) : (
        <PhraseList phrases={results} emptyMessage="見つかりませんでした" />
      )}
    </main>
  );
}
