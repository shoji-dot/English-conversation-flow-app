import Link from "next/link";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { CategoryId } from "@/types/phrase";

interface CategoryTabsProps {
  active: CategoryId;
}

/**
 * カテゴリー間を直接切り替えるための横並びタブ。
 * ホームのフローマップまで戻らずに他カテゴリーへ移動できるようにする。
 */
export function CategoryTabs({ active }: CategoryTabsProps) {
  return (
    <div className="mb-5 flex gap-2 overflow-x-auto">
      {categories.map((category) => {
        const isActive = category.id === active;
        return (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              isActive ? "bg-accent text-white" : "bg-surface-muted text-ink-muted"
            )}
          >
            {category.labelJa}
          </Link>
        );
      })}
    </div>
  );
}
