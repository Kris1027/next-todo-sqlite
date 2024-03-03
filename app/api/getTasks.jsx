import sql from "better-sqlite3";
const db = sql("tasks.db");

export async function getTasks() {
  return db.prepare("SELECT * FROM tasks").all();
}
