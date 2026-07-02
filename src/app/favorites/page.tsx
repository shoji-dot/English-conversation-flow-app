"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { PhraseList } from "@/components/phrase/PhraseList";
import { ScenePhraseList } from "@/components/scene/ScenePhraseList";
import { useFavorites } from "@/hooks/useFavorites";
import { getPhraseById } from "@/data/phrases";
import { getScenePhraseById } from "@/data/scenePhrases";

/**
 * お気に入りIDは新旧2つのフレーズ体系(シーン別/従来の会話ループ)を横断しうるため、
 * それぞれのデータソースで解決し、対応するリストコンポーネントで表示する。
 */
export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const scenePhrases = favorites
    .map((id) => getScenePhraseById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);
  const legacyPhrases = favorites
    .map((id) => getPhraseById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const isEmpty = scenePhrases.length === 0 && legacyPhrases.length === 0;

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title="Favorites" subtitle="お気に入り" />
      {isEmpty ? (
        <p className="pt-10 text-center text-sm text-ink-muted">
          お気に入りしたフレーズはまだありません
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {scenePhrases.length > 0 && <ScenePhraseList phrases={scenePhrases} />}
          {legacyPhrases.length > 0 && <PhraseList phrases={legacyPhrases} />}
        </div>
      )}
    </main>
  );
}
