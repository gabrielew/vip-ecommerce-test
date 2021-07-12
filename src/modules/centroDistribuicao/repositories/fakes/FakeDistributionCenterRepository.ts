import IDistributionCenterRepository from '@modules/centroDistribuicao/repositories/IDistributionCenterRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import DistributionCenter from '../../infra/typeorm/entities/DistributionCenter';
import mock from './mock';

class FakeDistributionCenterRepository
  implements IDistributionCenterRepository {
  private distributionCenter: DistributionCenter[] = mock;

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<DistributionCenter>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const distributionCenter = this.distributionCenter.slice(skip, limit);
    return { data: distributionCenter, total: distributionCenter.length };
  }
}

export default FakeDistributionCenterRepository;
