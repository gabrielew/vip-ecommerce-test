import { routesParams } from '@shared/interfaces';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import DistributionCenterController from '../controllers/DistributionCenterController';

const distributionCenterController = new DistributionCenterController();
const distributionCenterRouter = Router();

distributionCenterRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: routesParams,
  }),
  distributionCenterController.index,
);

export default distributionCenterRouter;
