import { Request, Response, Router } from "express";
const geoip = require("geoip-lite");
const requestIp = require("request-ip");

const geoIpRouter = Router();

geoIpRouter.get("/", (req: Request, res: Response) => {
  const clientIp = requestIp.getClientIp(req);
  const clientGeoLocation = clientIp.getClientGeoLocation(clientIp);
  console.log(clientIp);
  res.status(200).json({
    ip: clientIp,
    ...clientGeoLocation,
  });
});

export default geoIpRouter;
