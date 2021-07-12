import { routesParams } from '@shared/interfaces';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientController = new ClientController();
const clientRouter = Router();

clientRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  clientController.index,
);

clientRouter.get(
  '/model/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientController.findByModel,
);

clientRouter.get(
  '/company/',
  celebrate({
    [Segments.QUERY]: {
      type: Joi.string().valid('clientes', 'pedidos').allow(''),
      company_id: Joi.number().required(),
    },
  }),
  clientController.findByModel2,
);

export default clientRouter;
