import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderController = new OrderController();
const orderRouter = Router();

orderRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  orderController.index,
);

export default orderRouter;
