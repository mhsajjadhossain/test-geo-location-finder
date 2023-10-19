"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geoip = require("geoip-lite");
const requestIp = require("request-ip");
const geoIpRouter = (0, express_1.Router)();
geoIpRouter.get("/", (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    const clientGeoLocation = geoip.lookup(clientIp);
    console.log(clientIp);
    res.status(200).json(Object.assign({ ip: clientIp }, clientGeoLocation));
});
exports.default = geoIpRouter;
