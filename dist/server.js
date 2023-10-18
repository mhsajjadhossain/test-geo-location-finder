"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// import morgan from 'morgan';
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
// Load environment variables from .env file
dotenv_1.default.config();
// Import your application setup from app.ts
const PORT = process.env.PORT || 3000;
const server = (0, express_1.default)();
// Middlewares
server.use((0, cors_1.default)());
// server.use(morgan('dev'));
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
// Use the Express application defined in app.ts
server.use(app_1.app);
// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
