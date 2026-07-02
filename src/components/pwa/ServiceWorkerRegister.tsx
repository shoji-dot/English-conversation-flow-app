"use client";

import { useEffect } from "react";

/**
 * オフラインキャッシュ用のService Workerを登録するだけの非表示コンポーネント。
 * 登録失敗時もアプリ動作には影響しない(通常のオンライン動作にフォールバック)ため無視する。
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // 登録できなくても致命的ではないため何もしない
      });
    }
  }, []);

  return null;
}
