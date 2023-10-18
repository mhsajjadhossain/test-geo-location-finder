"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geoIpRouter = (0, express_1.Router)();
var geoip = require("geoip-lite");
geoIpRouter.get("/", (req, res) => {
    const reqJson = req;
    const clientIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const clientGeoLocation = geoip.lookup(clientIP);
    res.status(200).json(Object.assign({}, clientGeoLocation));
});
exports.default = geoIpRouter;
