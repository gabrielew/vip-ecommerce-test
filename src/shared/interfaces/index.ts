import { Joi } from 'celebrate';

export interface Params {
  limit: number;
  page: number;
}

export interface RoutesParams {
  limit: object;
  page: object;
}

export interface PaginationReturn<T> {
  data: T[];
  total: number;
}

export const routesParams: RoutesParams = {
  limit: Joi.number().greater(0).default(20),
  page: Joi.number().greater(0).default(1),
};
