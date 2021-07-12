import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();
const productRouter = Router();

productRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  productController.index,
);

export default productRouter;
