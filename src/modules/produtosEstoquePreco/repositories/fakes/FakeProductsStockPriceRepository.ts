import IProductsStockPriceRepository from '@modules/produtosEstoquePreco/repositories/IProductsStockPriceRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import ProductsStockPrice from '../../infra/typeorm/entities/ProductsStockPrice';
import mock from './mock';

class FakeProductRepository implements IProductsStockPriceRepository {
  private productsStockPrice: ProductsStockPrice[] = mock;

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<ProductsStockPrice>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const products = this.productsStockPrice.slice(skip, limit);
    return { data: products, total: products.length };
  }
}

export default FakeProductRepository;
