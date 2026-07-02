"use client";

import { useState } from "react";
import { useFavorites } from "./useFavorites";
import { useHistory } from "./useHistory";
import type { Phrase } from "@/types/phrase";

/**
 * 「フレーズをタップして詳細シートを開く」動作をまとめたhook。
 * 開いたフレーズは自動で履歴に記録される。PhraseListとチャート表示など、
 * フレーズをタップ可能な形で並べるあらゆる画面から共通で使う。
 *
 * Tはidを持つ任意のフレーズ型(既存のPhrase、シーン別のScenePhraseなど)。
 * 型引数を省略した場合は既存のPhraseのまま動作する(呼び出し側の変更は不要)。
 */
export function usePhraseSelection<T extends { id: string } = Phrase>() {
  const [selected, setSelected] = useState<T | null>(null);
  const { isFavorite, toggle } = useFavorites();
  const { record } = useHistory();

  function select(phrase: T) {
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
