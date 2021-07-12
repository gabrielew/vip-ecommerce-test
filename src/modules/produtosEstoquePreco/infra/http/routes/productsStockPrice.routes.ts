import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import ProductsStockPriceController from '../controllers/ProductsStockPriceController';

const productsStockPriceController = new ProductsStockPriceController();
const productsStockPriceRouter = Router();

productsStockPriceRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  productsStockPriceController.index,
);

export default productsStockPriceRouter;
