import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";

const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDatabase(dbName = "lectureTest") {
  try {
    await client.connect();
    console.log("Connected to the database");
    return client.db(dbName);
  } catch (error) {
    console.log("Error connecting to databasee", error);
    throw error;
  }
}

async function closeDatabase() {
  try {
    await client.close();
    console.log("Closed database connection");
  } catch (error) {
    console.log("Error closing database connection", error);
    throw error;
  }
}

export { connectDatabase, closeDatabase };
