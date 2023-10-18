import { Request, Response, Router } from "express";

const geoIpRouter = Router();
var geoip = require("geoip-lite");
geoIpRouter.get("/", (req: Request, res: Response) => {
  const reqJson = req;
  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const clientGeoLocation = geoip.lookup(clientIP);
  res.status(200).json({ ...clientGeoLocation });
});

export default geoIpRouter;
