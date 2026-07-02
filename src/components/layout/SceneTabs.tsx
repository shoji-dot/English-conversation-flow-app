import Link from "next/link";
import { sceneCategories } from "@/data/sceneCategories";
import { cn } from "@/lib/utils";
import type { SceneId } from "@/types/scene";

interface SceneTabsProps {
  active: SceneId;
}

/** シーン間を直接切り替えるための横並びタブ。シーン一覧まで戻らずに他シーンへ移動できる。 */
export function SceneTabs({ active }: SceneTabsProps) {
  return (
    <div className="mb-5 flex gap-2 overflow-x-auto">
      {sceneCategories.map((scene) => {
        const isActive = scene.id === active;
        return (
          <Link
            key={scene.id}
            href={`/scene/${scene.id}`}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              isActive ? "bg-accent text-white" : "bg-surface-muted text-ink-muted"
            )}
          >
            {scene.labelJa}
          </Link>
        );
      })}
    </div>
  );
}
