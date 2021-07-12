import { PaginationReturn, Params } from '@shared/interfaces';
import DistributionCenter from '../infra/typeorm/entities/DistributionCenter';

export default interface DistributionCenterRepository {
  findAll(params: Params): Promise<PaginationReturn<DistributionCenter>>;
}
