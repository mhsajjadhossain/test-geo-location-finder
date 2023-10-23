import { Request, Response } from "express";
import geoip from "geoip-lite";
import requestIp from "request-ip";

export const getUserGeoIpLocation = (req: Request, res: Response) => {
  try {
    const clientIp = requestIp.getClientIp(req);
    const clientGeoLocation = clientIp && geoip.lookup(clientIp);

    return res.status(200).json({
      message: "successfully retrieved user information",
      data: {
        ip: clientIp,
        ...clientGeoLocation,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong!",
      data: null,
    });
  }
};
