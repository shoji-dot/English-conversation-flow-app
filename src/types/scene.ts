import type { IndustryTag, Level } from "./phrase";

/**
 * 海外医療機器営業の1日に登場する11の現場シーン。
 * 既存のCategoryId(Question/Response/Opinion/Feeling=会話ループ軸)とは別の分類軸のため、
 * 型・データ・コンポーネントを完全に分離して追加する(既存機能への影響ゼロを優先)。
 */
export type SceneId =
  | "airport"
  | "hotel"
  | "meal"
  | "hospital"
  | "sales"
  | "conference"
  | "contract"
  | "smalltalk"
  | "sightseeing"
  | "trouble"
  | "departure";

/** 1フレーズにつき常に3段階を揃える。ネイティブらしさより実務で確実に伝わることを優先。 */
export interface PhraseTiers {
  /** 最短: 単語レベルで即座に出す */
  quick: string;
  /** 標準: 通常の会話で使う一文 */
  standard: string;
  /** 丁寧: 初対面・目上・フォーマルな場面向け */
  polite: string;
}

export interface ScenePhrase {
  id: string;
  scene: SceneId;
  /** どんな状況で使うかの日本語説明 */
  situation: string;
  tiers: PhraseTiers;
  /** 伝え方: 表情・ジェスチャー・声のトーンなど非言語の補足 */
  gesture: string;
  frequency: Level;
  difficulty: Level;
  tags: IndustryTag[];
}
