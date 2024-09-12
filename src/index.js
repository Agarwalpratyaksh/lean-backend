//we will run this file so we can write db code here but prefferd to write all database code in db folder fro clean code
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
