import type { Phrase, IndustryTag } from "@/types/phrase";

/**
 * V1.0のフレーズデータ。カテゴリーごとに厳選5件。
 * 将来的にSupabase等の外部データソースへ差し替える際も、
 * このファイルと同じ形（Phrase[]）を返すようにすれば呼び出し側は変更不要。
 */
export const phrases: Phrase[] = [
  // ---- Question ----
  {
    id: "q1",
    category: "question",
    en: "What do you think about...?",
    meaning: "〜についてどう思いますか？",
    example: "What do you think about the new design?",
    frequency: 5,
    formality: 3,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "q2",
    category: "question",
    en: "Can you tell me more about...?",
    meaning: "〜についてもっと教えてもらえますか？",
    example: "Can you tell me more about your production process?",
    frequency: 5,
    formality: 4,
    difficulty: 2,
    tags: ["business", "exhibition"],
  },
  {
    id: "q3",
    category: "question",
    en: "What made you...?",
    meaning: "何がきっかけで〜したのですか？",
    example: "What made you choose this material?",
    frequency: 3,
    formality: 3,
    difficulty: 2,
    tags: ["casual", "exhibition"],
  },
  {
    id: "q4",
    category: "question",
    en: "How did you...?",
    meaning: "どうやって〜したのですか？",
    example: "How did you come up with this idea?",
    frequency: 4,
    formality: 3,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "q5",
    category: "question",
    en: "What's the biggest...?",
    meaning: "一番の〜は何ですか？",
    example: "What's the biggest challenge you're facing right now?",
    frequency: 3,
    formality: 3,
    difficulty: 2,
    tags: ["business", "medical"],
  },

  // ---- Response ----
  {
    id: "r1",
    category: "response",
    en: "I see.",
    meaning: "なるほど。",
    example: "I see. That explains a lot.",
    frequency: 5,
    formality: 3,
    difficulty: 1,
    tags: ["business", "medical"],
  },
  {
    id: "r2",
    category: "response",
    en: "That's interesting.",
    meaning: "それは興味深いですね。",
    example: "That's interesting. I hadn't thought of it that way.",
    frequency: 5,
    formality: 3,
    difficulty: 1,
    tags: ["casual", "exhibition"],
  },
  {
    id: "r3",
    category: "response",
    en: "That makes sense.",
    meaning: "納得です。",
    example: "That makes sense, thanks for explaining.",
    frequency: 4,
    formality: 3,
    difficulty: 1,
    tags: ["business", "medical"],
  },
  {
    id: "r4",
    category: "response",
    en: "Really?",
    meaning: "本当ですか？",
    example: "Really? I didn't know that.",
    frequency: 4,
    formality: 2,
    difficulty: 1,
    tags: ["casual", "exhibition"],
  },
  {
    id: "r5",
    category: "response",
    en: "Good point.",
    meaning: "良い指摘ですね。",
    example: "Good point. Let's consider that.",
    frequency: 3,
    formality: 3,
    difficulty: 1,
    tags: ["business", "exhibition"],
  },

  // ---- Opinion ----
  {
    id: "o1",
    category: "opinion",
    en: "I think...",
    meaning: "私は〜だと思います。",
    example: "I think this design will work well for our market.",
    frequency: 5,
    formality: 3,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "o2",
    category: "opinion",
    en: "I guess...",
    meaning: "〜だと思います（控えめ）。",
    example: "I guess we could try a smaller batch first.",
    frequency: 3,
    formality: 2,
    difficulty: 1,
    tags: ["casual"],
  },
  {
    id: "o3",
    category: "opinion",
    en: "From my experience...",
    meaning: "私の経験では〜。",
    example: "From my experience, quality matters more than price here.",
    frequency: 3,
    formality: 4,
    difficulty: 2,
    tags: ["business", "medical"],
  },
  {
    id: "o4",
    category: "opinion",
    en: "In my opinion...",
    meaning: "私の意見では〜。",
    example: "In my opinion, we should move forward with this plan.",
    frequency: 4,
    formality: 4,
    difficulty: 2,
    tags: ["business", "exhibition"],
  },
  {
    id: "o5",
    category: "opinion",
    en: "It depends.",
    meaning: "状況によります。",
    example: "It depends on the budget we have.",
    frequency: 4,
    formality: 3,
    difficulty: 1,
    tags: ["business", "medical"],
  },

  // ---- Feeling ----
  {
    id: "f1",
    category: "feeling",
    en: "I'm glad...",
    meaning: "〜で嬉しいです。",
    example: "I'm glad we could meet in person.",
    frequency: 4,
    formality: 3,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "f2",
    category: "feeling",
    en: "I'm surprised...",
    meaning: "〜に驚きました。",
    example: "I'm surprised how fast your team delivered this.",
    frequency: 3,
    formality: 3,
    difficulty: 2,
    tags: ["casual", "exhibition"],
  },
  {
    id: "f3",
    category: "feeling",
    en: "I'm excited...",
    meaning: "〜にワクワクしています。",
    example: "I'm excited about this new partnership.",
    frequency: 4,
    formality: 3,
    difficulty: 1,
    tags: ["business", "exhibition"],
  },
  {
    id: "f4",
    category: "feeling",
    en: "I'm impressed...",
    meaning: "〜に感心しました。",
    example: "I'm impressed by the quality of your samples.",
    frequency: 3,
    formality: 4,
    difficulty: 2,
    tags: ["business", "exhibition"],
  },
  {
    id: "f5",
    category: "feeling",
    en: "I'm curious...",
    meaning: "〜に興味があります。",
    example: "I'm curious how you handle quality control.",
    frequency: 3,
    formality: 3,
    difficulty: 2,
    tags: ["casual", "medical"],
  },
];

export function getPhrasesByCategory(category: Phrase["category"]): Phrase[] {
  return phrases.filter((p) => p.category === category);
}

export function getPhraseById(id: string): Phrase | undefined {
  return phrases.find((p) => p.id === id);
}

/**
 * キーワード検索とタグ絞り込みを組み合わせて検索する。
 * キーワードが空でもタグ指定があればタグ一致のみで返す。
 */
export function searchPhrases(query: string, tags: IndustryTag[] = []): Phrase[] {
  const q = query.trim().toLowerCase();
  if (!q && tags.length === 0) return [];

  return phrases.filter((p) => {
    const matchesQuery =
      q === "" ||
      p.en.toLowerCase().includes(q) ||
      p.meaning.includes(q) ||
      p.example.toLowerCase().includes(q);
    const matchesTags = tags.length === 0 || tags.some((t) => p.tags.includes(t));
    return matchesQuery && matchesTags;
  });
}
