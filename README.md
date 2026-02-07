# my-project02

TypeScript/Node の最小構成 MVP です。CLI は `db:init` のみを提供します。

## 前提

- Codespaces など GitHub 上の環境で実行すること（ローカル禁止）。
- `APP_MODE=READ_ONLY` 必須（それ以外は即終了）。
- `DB_URL` は `sqlite:` で始まるパスを指定します（例: `sqlite:./data/app.db`）。

## セットアップ

```bash
npm ci
```

## DB 初期化

```bash
APP_MODE=READ_ONLY DB_URL=sqlite:./data/app.db npm run cli db:init
```

`src/db/schema.sql` は仕様書の全文を配置してから実行してください。
