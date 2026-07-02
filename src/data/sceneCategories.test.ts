import { describe, expect, it } from "vitest";
import { getSceneCategory, sceneCategories } from "./sceneCategories";

describe("getSceneCategory", () => {
  it("既存のシーンIDに対応するSceneCategoryを返す", () => {
    expect(getSceneCategory("airport").labelJa).toBe("空港・移動");
  });

  it("未知のIDにはエラーを投げる", () => {
    // @ts-expect-error 未知のIDを意図的に渡してエラー発生を確認する
    expect(() => getSceneCategory("unknown")).toThrow();
  });
});

describe("sceneCategories", () => {
  it("11シーンすべてが定義されている", () => {
    expect(sceneCategories).toHaveLength(11);
  });

  it("IDが重複していない", () => {
    const ids = sceneCategories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
