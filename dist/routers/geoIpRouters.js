"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geoip = require("geoip-lite");
const requestIp = require("request-ip");
const geoIpRouter = (0, express_1.Router)();
geoIpRouter.get("/", (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
    res.send(clientIp);
});
exports.default = geoIpRouter;
