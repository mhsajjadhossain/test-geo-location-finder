"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geoIpControllers_1 = require("../controllers/geoIpControllers");
const geoip = require("geoip-lite");
const requestIp = require("request-ip");
const geoIpRouter = (0, express_1.Router)();
geoIpRouter.get("/", geoIpControllers_1.getUserGeoIpLocation);
exports.default = geoIpRouter;
