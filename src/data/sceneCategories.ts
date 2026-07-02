import type { SceneId } from "@/types/scene";
import {
  Plane,
  Hotel,
  Utensils,
  Stethoscope,
  Users,
  Presentation,
  FileSignature,
  Coffee,
  Camera,
  AlertTriangle,
  PlaneTakeoff,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SceneCategory {
  id: SceneId;
  label: string;
  labelJa: string;
  icon: LucideIcon;
}

/**
 * 1日の業務タイムライン(朝→空港→移動→昼食→病院→営業同行→学会→夕食→ホテル→帰国)に
 * 沿った11シーン。並び順=実際に発生する時系列に合わせている。
 */
export const sceneCategories: SceneCategory[] = [
  { id: "airport", label: "Airport & Transit", labelJa: "空港・移動", icon: Plane },
  { id: "hotel", label: "Hotel", labelJa: "ホテル", icon: Hotel },
  { id: "meal", label: "Meals", labelJa: "食事", icon: Utensils },
  { id: "hospital", label: "Hospital Visit", labelJa: "病院訪問", icon: Stethoscope },
  { id: "sales", label: "Sales Visit", labelJa: "営業同行", icon: Users },
  { id: "conference", label: "Conference & Expo", labelJa: "学会・展示会", icon: Presentation },
  { id: "contract", label: "Contract & Deal", labelJa: "契約・商談", icon: FileSignature },
  { id: "smalltalk", label: "Small Talk", labelJa: "雑談・アイスブレイク", icon: Coffee },
  { id: "sightseeing", label: "Sightseeing", labelJa: "観光・おもてなし", icon: Camera },
  { id: "trouble", label: "Trouble & Check", labelJa: "トラブル対応・聞き返し", icon: AlertTriangle },
  { id: "departure", label: "Departure", labelJa: "帰国", icon: PlaneTakeoff },
];

export function getSceneCategory(id: SceneId): SceneCategory {
  const found = sceneCategories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown scene: ${id}`);
  return found;
}
