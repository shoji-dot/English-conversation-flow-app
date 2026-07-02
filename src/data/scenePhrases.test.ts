import { describe, expect, it } from "vitest";
import { sceneCategories } from "./sceneCategories";
import {
  getScenePhraseById,
  getScenePhrasesByCategory,
  scenePhrases,
  searchScenePhrases,
} from "./scenePhrases";

describe("getScenePhraseById", () => {
  it("既存のIDに対応するフレーズを返す", () => {
    const found = getScenePhraseById("air1");
    expect(found?.tiers.standard).toBe("I'm here for business.");
  });

  it("存在しないIDにはundefinedを返す", () => {
    expect(getScenePhraseById("does-not-exist")).toBeUndefined();
  });
});

describe("getScenePhrasesByCategory", () => {
  it("全シーンで最低1件以上返し、カテゴリーが一致する", () => {
    for (const scene of sceneCategories) {
      const result = getScenePhrasesByCategory(scene.id);
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((p) => p.scene === scene.id)).toBe(true);
    }
  });
});

describe("searchScenePhrases", () => {
  it("キーワード・タグどちらも空なら空配列を返す", () => {
    expect(searchScenePhrases("")).toEqual([]);
    expect(searchScenePhrases("", [])).toEqual([]);
  });

  it("標準フレーズの部分一致(大文字小文字を区別しない)で検索できる", () => {
    const result = searchScenePhrases("business");
    expect(result.some((p) => p.id === "air1")).toBe(true);
  });

  it("状況説明の部分一致で検索できる", () => {
    const result = searchScenePhrases("医師を紹介");
    expect(result.some((p) => p.id === "hos1")).toBe(true);
  });

  it("タグのみの指定で絞り込める", () => {
    const result = searchScenePhrases("", ["medical"]);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.tags.includes("medical"))).toBe(true);
  });

  it("一致しない場合は空配列を返す", () => {
    expect(searchScenePhrases("xxxxxxxxxxxxx")).toEqual([]);
  });
});

describe("フレーズデータそのものの整合性", () => {
  it("IDがすべて重複していない", () => {
    const ids = scenePhrases.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("すべてのフレーズがQuick/Standard/Politeの3段階を持つ", () => {
    for (const phrase of scenePhrases) {
      expect(phrase.tiers.quick.length).toBeGreaterThan(0);
      expect(phrase.tiers.standard.length).toBeGreaterThan(0);
      expect(phrase.tiers.polite.length).toBeGreaterThan(0);
    }
  });

  it("すべてのフレーズに伝え方(ジェスチャー)が設定されている", () => {
    for (const phrase of scenePhrases) {
      expect(phrase.gesture.length).toBeGreaterThan(0);
    }
  });
});
