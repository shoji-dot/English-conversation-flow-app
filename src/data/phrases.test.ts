import { describe, expect, it } from "vitest";
import { getPhraseById, getPhrasesByCategory, phrases, searchPhrases } from "./phrases";

describe("getPhraseById", () => {
  it("既存のIDに対応するフレーズを返す", () => {
    const found = getPhraseById("q1");
    expect(found?.en).toBe("What do you think about...?");
  });

  it("存在しないIDにはundefinedを返す", () => {
    expect(getPhraseById("does-not-exist")).toBeUndefined();
  });
});

describe("getPhrasesByCategory", () => {
  it("各カテゴリーちょうど10件を返す", () => {
    for (const category of ["question", "response", "opinion", "feeling"] as const) {
      const result = getPhrasesByCategory(category);
      expect(result).toHaveLength(10);
      expect(result.every((p) => p.category === category)).toBe(true);
    }
  });
});

describe("searchPhrases", () => {
  it("キーワード・タグどちらも空なら空配列を返す", () => {
    expect(searchPhrases("")).toEqual([]);
    expect(searchPhrases("", [])).toEqual([]);
  });

  it("英語フレーズの部分一致(大文字小文字を区別しない)で検索できる", () => {
    const result = searchPhrases("WHAT DO YOU THINK");
    expect(result.some((p) => p.id === "q1")).toBe(true);
  });

  it("日本語の意味の部分一致で検索できる", () => {
    const result = searchPhrases("なるほど");
    expect(result.some((p) => p.id === "r1")).toBe(true);
  });

  it("例文の部分一致でも検索できる", () => {
    const result = searchPhrases("production process");
    expect(result.some((p) => p.id === "q2")).toBe(true);
  });

  it("タグのみの指定で絞り込める", () => {
    const result = searchPhrases("", ["medical"]);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.tags.includes("medical"))).toBe(true);
  });

  it("キーワードとタグを両方指定すると両方に一致するものだけを返す", () => {
    const result = searchPhrases("i think", ["casual"]);
    expect(result.every((p) => p.tags.includes("casual"))).toBe(true);
    expect(
      result.every(
        (p) =>
          p.en.toLowerCase().includes("i think") ||
          p.meaning.includes("i think") ||
          p.example.toLowerCase().includes("i think")
      )
    ).toBe(true);
  });

  it("一致しない場合は空配列を返す", () => {
    expect(searchPhrases("xxxxxxxxxxxxx")).toEqual([]);
  });
});

describe("フレーズデータそのものの整合性", () => {
  it("IDがすべて重複していない", () => {
    const ids = phrases.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
