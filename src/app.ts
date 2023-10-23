import express, { Request, Response } from "express";
import geoIpRouter from "./routers/geoIpRouters";

const app = express();

app.use("/geo-location", geoIpRouter);

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to test geo ip location" });
});

export { app };
