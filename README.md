# Talk Flow (V1.1 / V2.0の一部)

会話中に0.5〜2秒で次の一言を選べる思考支援ツール。Question → Response → Opinion → Feeling → Next Question のループを、ホーム画面のフローマップから直接タップして辿れる。

## セットアップ

```bash
npm install
npm run dev
```

`npm run build` でビルドエラーゼロを確認済み。

## 実装済み機能

- ホーム: 5ノードの会話フローマップ（タップでカテゴリーへ）
- カテゴリー別フレーズ一覧（カード）+ 詳細シート（意味・例文・頻度/フォーマル度/難易度）
- お気に入り・履歴（localStorage、`src/hooks/useFavorites.ts` / `useHistory.ts`）
- 検索（キーワード + 業種タグ絞り込み、`/search`）
- 業種タグ（商談/展示会/雑談/医療、`src/data/industries.ts`）
- 重要度×難易度チャート（散布図 + 並び替え可能なリスト表示、`/chart`）
- 基本PWA（manifest, アイコン, ホーム画面追加対応）

## 次フェーズ候補

- 音声入出力・AIロールプレイ
- Supabase連携（データ層は `src/data/phrases.ts` に分離済みで差し替え容易）
- 自分専用フレーズ登録・SRS復習
