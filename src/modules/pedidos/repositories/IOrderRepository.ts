import { PaginationReturn, Params } from '@shared/interfaces';
import Order from '../infra/typeorm/entities/Order';

export default interface OrderRepository {
  findAll(params: Params): Promise<PaginationReturn<Order>>;
}
