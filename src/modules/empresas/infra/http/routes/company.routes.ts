import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';

const companiesController = new CompanyController();
const companyRouter = Router();

companyRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  companiesController.index,
);

export default companyRouter;
