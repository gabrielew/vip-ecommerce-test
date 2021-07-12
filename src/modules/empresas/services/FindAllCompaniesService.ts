import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import ICompanyRepository from '../repositories/ICompanyRepository';
import Company from '../infra/typeorm/entities/Company';

@injectable()
class FindAllCompaniesService {
  constructor(
    @inject('CompanyRepository')
    private repository: ICompanyRepository,
  ) {}

  public async execute(params: Params): Promise<PaginationReturn<Company>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllCompaniesService;
