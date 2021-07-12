import IProductsStockPriceRepository from '@modules/produtosEstoquePreco/repositories/IProductsStockPriceRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import ProductsStockPrice from '../entities/ProductsStockPrice';

class ProductsStockPriceRepository implements IProductsStockPriceRepository {
  private ormRepository: Repository<ProductsStockPrice>;

  constructor() {
    this.ormRepository = getRepository(ProductsStockPrice);
  }

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<ProductsStockPrice>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
      relations: ['empresa_id', 'produto_id', 'centro_distribuicao_id'],
    });

    return { data, total };
  }
}

export default ProductsStockPriceRepository;
