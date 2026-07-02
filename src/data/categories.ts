import type { CategoryId } from "@/types/phrase";
import { HelpCircle, MessageCircle, Lightbulb, Heart, RotateCcw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Category {
  id: CategoryId;
  label: string;
  labelJa: string;
  icon: LucideIcon;
}

/** 会話ループの4カテゴリー。表示順 = 会話が進む順番。 */
export const categories: Category[] = [
  { id: "question", label: "Question", labelJa: "質問", icon: HelpCircle },
  { id: "response", label: "Response", labelJa: "相槌", icon: MessageCircle },
  { id: "opinion", label: "Opinion", labelJa: "考え", icon: Lightbulb },
  { id: "feeling", label: "Feeling", labelJa: "感情", icon: Heart },
];

/** 5つ目のノード。実データはQuestionを再利用し、Questionカテゴリーへ遷移させることでループを閉じる。 */
export const nextQuestionNode = {
  id: "next-question" as const,
  label: "Next Question",
  labelJa: "次の質問へ",
  icon: RotateCcw,
  targetCategory: "question" as CategoryId,
};

export function getCategory(id: CategoryId): Category {
  const found = categories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown category: ${id}`);
  return found;
}
