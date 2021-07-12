import IDistributionCenterRepository from '@modules/centroDistribuicao/repositories/IDistributionCenterRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import DistributionCenter from '../entities/DistributionCenter';

class DistributionCenterRepository implements IDistributionCenterRepository {
  private ormRepository: Repository<DistributionCenter>;

  constructor() {
    this.ormRepository = getRepository(DistributionCenter);
  }

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<DistributionCenter>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
    });

    return { data, total };
  }
}

export default DistributionCenterRepository;
