import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IProductsStockPriceRepository from '../repositories/IProductsStockPriceRepository';
import ProductsStockPrice from '../infra/typeorm/entities/ProductsStockPrice';

@injectable()
class FindAllProductsStockPriceService {
  constructor(
    @inject('ProductsStockPriceRepository')
    private repository: IProductsStockPriceRepository,
  ) {}

  public async execute(
    params: Params,
  ): Promise<PaginationReturn<ProductsStockPrice>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllProductsStockPriceService;
