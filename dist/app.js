"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const geoIpRouters_1 = __importDefault(require("./routers/geoIpRouters"));
const app = (0, express_1.default)();
exports.app = app;
app.use("/geo-location", geoIpRouters_1.default);
// Define a simple route
app.get("/", (req, res) => {
    res
        .status(200)
        .json({ message: "Welcome to your Express.js with TypeScript app!" });
});
// Define another route
app.get("/about", (req, res) => {
    res.status(200).json({ message: "This is the about page." });
});
