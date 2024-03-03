const sql = require("better-sqlite3");
const db = sql("tasks.db");

const data = [
  {
    task: "Do the laundry",
    completed: 0,
  },
  {
    task: "Take out the trash",
    completed: 0,
  },
  {
    task: "Clean the kitchen",
    completed: 0,
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        completed INTEGER NOT NULL
    )`
).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO tasks VALUES (
        null,
        @task,
        @completed
    )`);

  for (const task of data) {
    stmt.run(task);
  }
}

initData();
