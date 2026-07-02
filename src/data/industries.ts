import type { IndustryTag } from "@/types/phrase";

export interface Industry {
  id: IndustryTag;
  label: string;
  labelJa: string;
}

/** 検索画面のタグフィルタで使う業種・シーン一覧。 */
export const industries: Industry[] = [
  { id: "business", label: "Business", labelJa: "商談" },
  { id: "exhibition", label: "Exhibition", labelJa: "展示会" },
  { id: "casual", label: "Casual", labelJa: "雑談" },
  { id: "medical", label: "Medical", labelJa: "医療" },
];
