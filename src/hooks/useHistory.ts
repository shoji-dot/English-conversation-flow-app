"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "talkflow.history";
const MAX_HISTORY = 30;

/**
 * 直近閲覧したフレーズID履歴（新しい順・重複なし）をlocalStorageで管理する。
 */
export function useHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch {
      // 破損データは無視
    }
  }, []);

  const record = useCallback((id: string) => {
    setHistory((prev) => {
      const next = [id, ...prev.filter((p) => p !== id)].slice(0, MAX_HISTORY);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // 容量超過・プライベートモード等での書き込み失敗は無視し、表示状態(state)のみ更新を継続する
      }
      return next;
    });
  }, []);

  return { history, record };
}
