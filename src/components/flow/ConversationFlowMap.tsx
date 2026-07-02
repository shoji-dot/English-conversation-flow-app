"use client";

import { categories, nextQuestionNode } from "@/data/categories";
import { FlowNode } from "./FlowNode";

/**
 * 5点を五角形状に配置し、中心角度 -90°起点で72°ずつ時計回りに並べる。
 * 会話ループ Question→Response→Opinion→Feeling→NextQuestion→(戻る)Question を
 * そのまま図形の並びとして表現する。
 *
 * RADIUSはノード実寸(FlowNodeのw-16=64px)を考慮し、iPhone SE等の狭い画面でも
 * ノードが画面端からはみ出さないよう安全マージンを確保した値。
 */
const RADIUS = 35;
function pointAt(index: number) {
  const angle = ((-90 + 72 * index) * Math.PI) / 180;
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
}

const questionPoint = pointAt(0);
const responsePoint = pointAt(1);
const opinionPoint = pointAt(2);
const feelingPoint = pointAt(3);
const nextQuestionPoint = pointAt(4);

const orderedPoints = [questionPoint, responsePoint, opinionPoint, feelingPoint, nextQuestionPoint];

function pathD() {
  return orderedPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .concat(`L ${orderedPoints[0]?.x} ${orderedPoints[0]?.y}`)
    .join(" ");
}

export function ConversationFlowMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d={pathD()}
          fill="none"
          stroke="#D2D2D7"
          strokeWidth={0.6}
          strokeDasharray="2 2.5"
        />
      </svg>

      {/* 中心ラベル */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Conversation
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Flow
        </span>
      </div>

      {categories.map((category, i) => {
        const point = orderedPoints[i];
        if (!point) return null;
        return (
          <FlowNode
            key={category.id}
            href={`/category/${category.id}`}
            icon={category.icon}
            label={category.label}
            labelJa={category.labelJa}
            x={point.x}
            y={point.y}
            order={i}
          />
        );
      })}

      <FlowNode
        href={`/category/${nextQuestionNode.targetCategory}`}
        icon={nextQuestionNode.icon}
        label={nextQuestionNode.label}
        labelJa={nextQuestionNode.labelJa}
        x={nextQuestionPoint.x}
        y={nextQuestionPoint.y}
        order={4}
        emphasized
      />
    </div>
  );
}
