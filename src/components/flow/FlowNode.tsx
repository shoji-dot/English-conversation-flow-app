import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface FlowNodeProps {
  href: string;
  icon: LucideIcon;
  label: string;
  labelJa: string;
  /** コンテナに対する中心座標(%) */
  x: number;
  y: number;
  /** 出現アニメーションの順番 */
  order: number;
  emphasized?: boolean;
}

/**
 * 会話フロー図の1ノード。タップで対応カテゴリーへ遷移する。
 *
 * 中心合わせ(translate -50%,-50%)は静的なdivで担う。
 * 出現アニメーション・タップ時の縮小はどちらも単純なCSS(keyframes/:active)で
 * 再現できるため、Framer Motionには依存しない(実行コスト・依存範囲の削減)。
 */
export function FlowNode({ href, icon: Icon, label, labelJa, x, y, order, emphasized }: FlowNodeProps) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
      <div
        className="animate-[flow-node-in_320ms_ease-out_both]"
        style={{ animationDelay: `${0.06 * order}s` }}
      >
        <Link href={href} aria-label={`${label} ${labelJa}`}>
          <div
            className={
              "flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-full shadow-card transition-transform active:scale-[0.92] " +
              (emphasized ? "bg-accent text-white" : "bg-surface text-ink")
            }
          >
            <Icon size={20} strokeWidth={1.75} />
            <span className="px-1 text-center text-[9px] font-medium leading-tight">{label}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
