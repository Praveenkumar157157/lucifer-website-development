import "server-only";

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

const client = new MongoClient(uri);
export const clientPromise =
  globalForMongo.mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = clientPromise;
}

export async function connectToMongoDB() {
  return clientPromise;
}

export async function disconnectFromMongoDB() {
  await (await clientPromise).close();
  if (process.env.NODE_ENV !== "production") {
    delete globalForMongo.mongoClientPromise;
  }
}

export default clientPromise;
