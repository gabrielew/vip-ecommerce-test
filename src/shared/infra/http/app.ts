import 'reflect-metadata';

import express, { Express, Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import createConnection from '@shared/infra/typeorm';
import { isCelebrateError } from 'celebrate';
import AppError from '../../errors/AppError';

import routes from './routes';
import '@shared/container';

class App {
  public server: Express;

  constructor() {
    this.server = express();

    createConnection();
    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.server.use(express.json());

    this.server.use(cors());

    this.server.use(helmet());
  }

  routes(): void {
    this.server.use(routes);

    this.server.all('*', (_request: Request, response: Response) => {
      return response.status(404).json({
        status: 404,
        message: 'Route not found',
        keyError: 'error-api:route-not-found',
      });
    });

    this.server.use(
      (err: Error, request: Request, response: Response, _: NextFunction) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            keyError: err.keyError,
          });
        }

        if (isCelebrateError(err)) {
          if (err.details) {
            const errorBody: any = err.details.get('body');
            const {
              details: [errorDetails],
            } = errorBody;

            return response.status(400).json({
              status: 'error',
              message: errorDetails.message,
              keyError: 'error-api:bad-request',
            });
          }
        }

        console.error(err);

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
          keyError: 'error-api:server-error',
        });
      },
    );
  }
}

export default new App().server;
