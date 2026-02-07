type ReadOnlyEnv = {
  appMode: "READ_ONLY";
  dbUrl: string;
};

export function requireReadOnlyEnv(): ReadOnlyEnv {
  const appMode = process.env.APP_MODE;
  if (appMode !== "READ_ONLY") {
    console.error("APP_MODE=READ_ONLY が必須です。その他の値は禁止されています。");
    process.exit(1);
  }

  const dbUrl = process.env.DB_URL;
  if (!dbUrl) {
    console.error("DB_URL が設定されていません。例: sqlite:./data/app.db");
    process.exit(1);
  }

  return {
    appMode: "READ_ONLY",
    dbUrl
  };
}
