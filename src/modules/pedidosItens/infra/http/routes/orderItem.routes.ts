import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import OrderItemController from '../controllers/OrderItemController';

const orderItemController = new OrderItemController();
const orderItemRouter = Router();

orderItemRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  orderItemController.index,
);

export default orderItemRouter;
