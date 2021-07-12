import { PaginationReturn, Params } from '@shared/interfaces';
import ProductsStockPrice from '../infra/typeorm/entities/ProductsStockPrice';

export default interface IProductsStockPriceRepository {
  findAll(params: Params): Promise<PaginationReturn<ProductsStockPrice>>;
}
