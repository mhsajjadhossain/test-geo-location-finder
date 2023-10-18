import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
// import morgan from 'morgan';
import dotenv from "dotenv";
import { app } from "./app";

// Load environment variables from .env file
dotenv.config();

// Import your application setup from app.ts

const PORT = process.env.PORT || 3000;

const server = express();

// Middlewares
server.use(cors());
// server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Use the Express application defined in app.ts
server.use(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
