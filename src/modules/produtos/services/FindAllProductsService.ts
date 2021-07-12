import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IProductRepository from '../repositories/IProductRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
class FindAllProductsService {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}

  public async execute(params: Params): Promise<PaginationReturn<Product>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllProductsService;
