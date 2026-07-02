"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { PhraseList } from "@/components/phrase/PhraseList";
import { useHistory } from "@/hooks/useHistory";
import { getPhraseById } from "@/data/phrases";

export default function HistoryPage() {
  const { history } = useHistory();
  const phrases = history
    .map((id) => getPhraseById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title="History" subtitle="最近見たフレーズ" />
      <PhraseList phrases={phrases} emptyMessage="閲覧履歴はまだありません" />
    </main>
  );
}
