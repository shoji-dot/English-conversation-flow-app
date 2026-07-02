/** 会話ループを構成する4カテゴリー。Next QuestionはQuestionへの遷移として扱う（データの重複を避けるため）。 */
export type CategoryId = "question" | "response" | "opinion" | "feeling";

/** 1(低)〜5(高)の5段階評価。頻度・フォーマル度・難易度で共通利用。 */
export type Level = 1 | 2 | 3 | 4 | 5;

/** 業種・シーン別タグ。フレーズは複数タグを持てる（横断的な分類のため）。 */
export type IndustryTag = "business" | "exhibition" | "casual" | "medical";

export interface Phrase {
  id: string;
  category: CategoryId;
  /** 会話中にそのまま使う短いフレーズ */
  en: string;
  /** 日本語の意味 */
  meaning: string;
  /** 実際の会話で使う例文 */
  example: string;
  /** 使用頻度: 高いほどよく使う（学習画面ではこれを「重要度」として扱う） */
  frequency: Level;
  /** フォーマル度: 高いほど硬い/ビジネス向け */
  formality: Level;
  /** 難易度: 高いほど難しい */
  difficulty: Level;
  /** 業種・シーンタグ（商談/展示会/雑談/医療など） */
  tags: IndustryTag[];
}
