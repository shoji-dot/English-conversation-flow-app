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

/** 会話フロー図の1ノード。タップで対応カテゴリーへ遷移する。 */
export function FlowNode({ href, icon: Icon, label, labelJa, x, y, order, emphasized }: FlowNodeProps) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
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
          <span className="text-[10px] font-medium leading-none">{label}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
