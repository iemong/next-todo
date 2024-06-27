import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: any;

async function openDb() {
    if (!db) {
        db = await open({
            filename: './todo.sqlite',
            driver: sqlite3.Database,
        });
        await db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT
      )
    `);
    }
    return db;
}


export async function getTodos() {
    const db = await openDb();
    return db.all('SELECT * FROM todos ORDER BY id DESC');
}

export async function addTodoToDb(text: string) {
    const db = await openDb();
    return db.run('INSERT INTO todos (text) VALUES (?)', text);
}

export async function deleteTodoFromDb(id: number) {
    const db = await openDb();
    return db.run('DELETE FROM todos WHERE id = ?', id);
}