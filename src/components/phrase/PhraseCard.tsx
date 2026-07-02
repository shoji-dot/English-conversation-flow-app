"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { industries } from "@/data/industries";
import type { Phrase } from "@/types/phrase";

interface PhraseCardProps {
  phrase: Phrase;
  onSelect: (phrase: Phrase) => void;
}

/** フレーズ1件を表すカード。英語フレーズを最優先で大きく見せ、意味は補助的に添える。 */
export function PhraseCard({ phrase, onSelect }: PhraseCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(phrase)}
      whileTap={{ scale: 0.97 }}
      className="w-full rounded-card bg-surface p-4 text-left shadow-card"
    >
      <p className="text-base font-medium text-ink">{phrase.en}</p>
      <p className="mt-1 text-sm text-ink-muted">{phrase.meaning}</p>
      {phrase.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {phrase.tags.map((tag) => {
            const industry = industries.find((i) => i.id === tag);
            return <Badge key={tag}>{industry?.labelJa ?? tag}</Badge>;
          })}
        </div>
      )}
    </motion.button>
  );
}
