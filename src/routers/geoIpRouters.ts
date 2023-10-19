import { Request, Response, Router } from "express";
const geoip = require("geoip-lite");
const requestIp = require("request-ip");

const geoIpRouter = Router();

geoIpRouter.get("/", (req: Request, res: Response) => {
  const clientIp = requestIp.getClientIp(req);

  console.log(clientIp);
  res.send(clientIp);
});

export default geoIpRouter;
