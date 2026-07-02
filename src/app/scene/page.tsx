import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { sceneCategories } from "@/data/sceneCategories";

export const metadata: Metadata = { title: "Scenes | Talk Flow" };

/**
 * シーン一覧(ホーム画面)。現場で「今どの状況にいるか」から一瞬で選べることを最優先し、
 * アイコン+シーン名のみの2列グリッドで1画面に収める(Apple HIG: 余白・迷わない・スクロール最小)。
 */
export default function ScenePage() {
  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title="Scenes" subtitle="今のシーンをタップ" />

      <div className="grid grid-cols-2 gap-3">
        {sceneCategories.map(({ id, label, labelJa, icon: Icon }) => (
          <Link
            key={id}
            href={`/scene/${id}`}
            className="flex flex-col items-center justify-center gap-2 rounded-card bg-surface p-5 text-center shadow-card transition-transform active:scale-[0.97]"
          >
            <Icon size={26} strokeWidth={1.75} className="text-accent" />
            <div>
              <p className="text-sm font-medium text-ink">{labelJa}</p>
              <p className="text-[11px] text-ink-muted">{label}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
