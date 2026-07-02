"use client";

import type { Phrase } from "@/types/phrase";

interface PhraseScatterChartProps {
  phrases: Phrase[];
  onSelect: (phrase: Phrase) => void;
}

const AXIS_MIN = 10;
const AXIS_MAX = 90;

function toCoord(level: number) {
  // level 1〜5 を AXIS_MIN〜AXIS_MAX に線形マッピング
  return AXIS_MIN + ((level - 1) / 4) * (AXIS_MAX - AXIS_MIN);
}

/**
 * 重要度(frequency) × 難易度(difficulty) の散布図。
 * 同じ座標に複数フレーズがある場合は小さくずらして重なりを避ける。
 */
export function PhraseScatterChart({ phrases, onSelect }: PhraseScatterChartProps) {
  const groups = new Map<string, Phrase[]>();
  for (const phrase of phrases) {
    const key = `${phrase.frequency}-${phrase.difficulty}`;
    const group = groups.get(key) ?? [];
    group.push(phrase);
    groups.set(key, group);
  }

  const points = Array.from(groups.values()).flatMap((group) =>
    group.map((phrase, i) => {
      const baseX = toCoord(phrase.frequency);
      const baseY = AXIS_MAX + AXIS_MIN - toCoord(phrase.difficulty); // 難易度が高いほど上へ
      const offset = group.length > 1 ? 3.2 : 0;
      const angle = (2 * Math.PI * i) / group.length;
      return {
        phrase,
        x: baseX + Math.cos(angle) * offset,
        y: baseY + Math.sin(angle) * offset,
      };
    })
  );

  return (
    <div className="w-full">
      <svg viewBox="0 0 100 100" className="h-auto w-full">
        {/* 軸線 */}
        <line x1={AXIS_MIN} y1={AXIS_MAX} x2={AXIS_MAX} y2={AXIS_MAX} stroke="#D2D2D7" strokeWidth={0.5} />
        <line x1={AXIS_MIN} y1={AXIS_MIN} x2={AXIS_MIN} y2={AXIS_MAX} stroke="#D2D2D7" strokeWidth={0.5} />

        {points.map(({ phrase, x, y }) => (
          <g
            key={phrase.id}
            onClick={() => onSelect(phrase)}
            className="cursor-pointer"
            role="button"
            aria-label={phrase.en}
          >
            <circle cx={x} cy={y} r={7} fill="transparent" />
            <circle cx={x} cy={y} r={2.2} className="fill-accent" />
          </g>
        ))}
      </svg>

      <div className="mt-2 flex items-center justify-between text-[11px] text-ink-muted">
        <span>重要度: 低</span>
        <span>重要度: 高 →</span>
      </div>
      <div className="mt-1 flex items-center justify-between text-[11px] text-ink-muted">
        <span>↑ 難易度: 高</span>
        <span />
      </div>
    </div>
  );
}
