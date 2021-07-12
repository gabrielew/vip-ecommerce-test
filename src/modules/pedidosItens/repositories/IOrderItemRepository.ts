import { PaginationReturn, Params } from '@shared/interfaces';
import OrderItem from '../infra/typeorm/entities/OrderItem';

export default interface IProductsStockPriceRepository {
  findAll(params: Params): Promise<PaginationReturn<OrderItem>>;
}
