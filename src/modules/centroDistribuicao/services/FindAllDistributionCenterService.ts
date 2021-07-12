import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IDistributionCenterRepository from '../repositories/IDistributionCenterRepository';
import DistributionCenter from '../infra/typeorm/entities/DistributionCenter';

@injectable()
class FindAllDistributionCenterService {
  constructor(
    @inject('DistributionCenterRepository')
    private repository: IDistributionCenterRepository,
  ) {}

  public async execute(
    params: Params,
  ): Promise<PaginationReturn<DistributionCenter>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllDistributionCenterService;
