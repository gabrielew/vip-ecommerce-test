import { PaginationReturn, Params } from '@shared/interfaces';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  findAll(params: Params): Promise<PaginationReturn<Product>>;
}
