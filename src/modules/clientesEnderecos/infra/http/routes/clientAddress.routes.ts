import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import ClientAddressController from '../controllers/ClientAddressController';

const clientAddressController = new ClientAddressController();
const ClientAddressRouter = Router();

ClientAddressRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  clientAddressController.index,
);

export default ClientAddressRouter;
