"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "talkflow.favorites";

/**
 * お気に入りフレーズID一覧をlocalStorageで管理する。
 * 将来Supabase等に差し替える場合はこのhookの内部実装のみ変更すればよい。
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      // 破損データは無視して空のまま扱う
    }
  }, []);

  const persist = useCallback((next: string[]) => {
    setFavorites(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // 容量超過・プライベートモード等での書き込み失敗は無視し、表示状態(state)のみ更新を継続する
    }
  }, []);

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

  const toggle = useCallback(
    (id: string) => {
      const next = favorites.includes(id)
        ? favorites.filter((f) => f !== id)
        : [id, ...favorites];
      persist(next);
    },
    [favorites, persist]
  );

  return { favorites, isFavorite, toggle };
}
