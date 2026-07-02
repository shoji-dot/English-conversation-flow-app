import { defineConfig } from "vitest/config";
import path from "node:path";

/** tsconfig.jsonの"@/*"エイリアスをテスト実行時にも解決できるようにする。 */
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "node",
  },
});
