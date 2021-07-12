import IProductRepository from '@modules/produtos/repositories/IProductRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import Product from '../../infra/typeorm/entities/Product';
import mock from './mock';

class FakeProductRepository implements IProductRepository {
  private products: Product[] = mock;

  public async findAll(params: Params): Promise<PaginationReturn<Product>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const products = this.products.slice(skip, limit);
    return { data: products, total: products.length };
  }
}

export default FakeProductRepository;
