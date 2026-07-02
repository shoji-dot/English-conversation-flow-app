"use client";

import { useEffect } from "react";

/**
 * iOS Safariは、どこにもtouchstartリスナーが登録されていない場合、
 * CSSの:active疑似クラスがタップ操作で発火しないという既知の癖がある。
 * この無害なリスナーを1つ登録するだけで、アプリ全体で:active(押した時の縮小/減光)が
 * 確実に効くようになる。表示要素は持たない。
 */
export function IosActiveFix() {
  useEffect(() => {
    document.addEventListener("touchstart", () => {}, { passive: true });
  }, []);

  return null;
}
