"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { PhraseList } from "@/components/phrase/PhraseList";
import { useFavorites } from "@/hooks/useFavorites";
import { getPhraseById } from "@/data/phrases";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const phrases = favorites
    .map((id) => getPhraseById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title="Favorites" subtitle="お気に入り" />
      <PhraseList phrases={phrases} emptyMessage="お気に入りしたフレーズはまだありません" />
    </main>
  );
}
