"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
 * 中心合わせ(translate -50%,-50%)は静的なdivで担い、Framer Motionが管理する
 * transform(opacity/scaleアニメーション用)とは別要素に分離している。
 * 同一要素にCSSクラスのtransformとFramer Motionのtransformを併用すると、
 * 後者が前者を完全に上書きしてしまい、中心合わせが効かなくなるため。
 */
export function FlowNode({ href, icon: Icon, label, labelJa, x, y, order, emphasized }: FlowNodeProps) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.06 * order, duration: 0.32, ease: "easeOut" }}
      >
        <Link href={href} aria-label={`${label} ${labelJa}`}>
          <motion.div
            whileTap={{ scale: 0.92 }}
            className={
              "flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-full shadow-card " +
              (emphasized ? "bg-accent text-white" : "bg-surface text-ink")
            }
          >
            <Icon size={20} strokeWidth={1.75} />
            <span className="px-1 text-center text-[9px] font-medium leading-tight">{label}</span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
