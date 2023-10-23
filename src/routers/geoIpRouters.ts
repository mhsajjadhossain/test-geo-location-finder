import { Router } from "express";
import { getUserGeoIpLocation } from "../controllers/geoIpControllers";
const geoip = require("geoip-lite");
const requestIp = require("request-ip");

const geoIpRouter = Router();

geoIpRouter.get("/", getUserGeoIpLocation);

export default geoIpRouter;
