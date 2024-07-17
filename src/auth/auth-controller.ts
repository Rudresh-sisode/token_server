import { Request, Response } from 'express';
import { createJWTToken } from './auth-helpers';
import { appConfig } from '../config/app-config';

export class AuthController {

  public authorize(req: Request, res: Response) {
    console.log("seesion server ", appConfig.sessionServer);
    res.status(200)
      .json({
        success: true,
        url: `wss://${appConfig.sessionServer}`,
        jwt: createJWTToken(appConfig.orchestrationServer)
      })
  }
  
}

export const authController = new AuthController();
