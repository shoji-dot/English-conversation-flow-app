import { describe, expect, it } from "vitest";
import { getCategory } from "./categories";

describe("getCategory", () => {
  it("既存のカテゴリーIDに対応するCategoryを返す", () => {
    expect(getCategory("question").label).toBe("Question");
  });

  it("未知のIDにはエラーを投げる", () => {
    // @ts-expect-error 未知のIDを意図的に渡してエラー発生を確認する
    expect(() => getCategory("unknown")).toThrow();
  });
});
