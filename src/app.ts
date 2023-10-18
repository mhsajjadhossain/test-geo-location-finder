import express, { Request, Response } from "express";
import geoIpRouter from "./routers/geoIpRouters";

const app = express();

app.use("/geo-location", geoIpRouter);

// Define a simple route
app.get("/", (req: Request, res: Response) => {
    
  res
    .status(200)
    .json({ message: "Welcome to your Express.js with TypeScript app!" });
});

// Define another route
app.get("/about", (req: Request, res: Response) => {


  res.status(200).json({ message: "This is the about page." });
});

export { app };
