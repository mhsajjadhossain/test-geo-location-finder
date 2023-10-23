"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserGeoIpLocation = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const request_ip_1 = __importDefault(require("request-ip"));
const getUserGeoIpLocation = (req, res) => {
    try {
        const clientIp = request_ip_1.default.getClientIp(req);
        const clientGeoLocation = clientIp && geoip_lite_1.default.lookup(clientIp);
        return res.status(200).json({
            message: "successfully retrieved user information",
            data: Object.assign({ ip: clientIp }, clientGeoLocation),
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong!",
            data: null,
        });
    }
};
exports.getUserGeoIpLocation = getUserGeoIpLocation;
