import { PaginationReturn, Params } from '@shared/interfaces';
import Company from '../infra/typeorm/entities/Company';

export default interface ICompaniesRepository {
  findAll(params: Params): Promise<PaginationReturn<Company>>;
}
