import IProductRepository from '@modules/produtos/repositories/IProductRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import FindAllProductsService from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<FindAllProductsService>;

  constructor() {
    this.ormRepository = getRepository(FindAllProductsService);
  }

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<FindAllProductsService>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
      relations: ['empresa_id'],
    });

    return { data, total };
  }
}

export default ProductRepository;
