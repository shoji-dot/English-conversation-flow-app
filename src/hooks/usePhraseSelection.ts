"use client";

import { useState } from "react";
import { useFavorites } from "./useFavorites";
import { useHistory } from "./useHistory";
import type { Phrase } from "@/types/phrase";

/**
 * 「フレーズをタップして詳細シートを開く」動作をまとめたhook。
 * 開いたフレーズは自動で履歴に記録される。PhraseListとチャート表示など、
 * フレーズをタップ可能な形で並べるあらゆる画面から共通で使う。
 */
export function usePhraseSelection() {
  const [selected, setSelected] = useState<Phrase | null>(null);
  const { isFavorite, toggle } = useFavorites();
  const { record } = useHistory();

  function select(phrase: Phrase) {
    setSelected(phrase);
    record(phrase.id);
  }

  function clear() {
    setSelected(null);
  }

  /** PhraseDetailSheetのonOpenChangeにそのまま渡せる形。閉じられた時だけselectedをクリアする。 */
  function onOpenChange(open: boolean) {
    if (!open) clear();
  }

  return { selected, select, clear, onOpenChange, isFavorite, toggle };
}
