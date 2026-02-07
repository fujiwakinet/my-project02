import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { requireReadOnlyEnv } from "../config/env";

function resolveSqlitePath(dbUrl: string): string {
  if (!dbUrl.startsWith("sqlite:")) {
    throw new Error("DB_URL は sqlite: で始まる必要があります。");
  }

  const rawPath = dbUrl.replace(/^sqlite:/, "");
  if (!rawPath || rawPath === ":memory:") {
    return ":memory:";
  }

  return rawPath;
}

export function runDbInit(): void {
  const { dbUrl } = requireReadOnlyEnv();
  const dbPath = resolveSqlitePath(dbUrl);

  const schemaPath = path.resolve(__dirname, "..", "db", "schema.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf8");

  if (dbPath !== ":memory:") {
    const dir = path.dirname(dbPath);
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(dbPath);
  try {
    db.exec(schemaSql);
  } finally {
    db.close();
  }

  console.log("schema.sql を適用しました。");
}
