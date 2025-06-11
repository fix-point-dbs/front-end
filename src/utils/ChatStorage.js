import { openDB } from "idb";

const DB_NAME = "chatbot-db";
const STORE_NAME = "messages";

export async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

export async function saveMessages(messages) {
  const db = await getDB();
  await db.put(STORE_NAME, messages, "chat");
}

export async function loadMessages() {
  const db = await getDB();
  return (await db.get(STORE_NAME, "chat")) || [];
}

export async function clearMessages() {
  const db = await getDB();
  await db.delete(STORE_NAME, "chat");
}
