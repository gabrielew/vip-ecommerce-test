import ICompanyRepository from '@modules/empresas/repositories/ICompanyRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import Company from '../../infra/typeorm/entities/Company';
import mock from './mock';

class FakeCompanyRepository implements ICompanyRepository {
  private companies: Company[] = mock;

  public async findAll(params: Params): Promise<PaginationReturn<Company>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const companies = this.companies.slice(skip, limit);
    return { data: companies, total: companies.length };
  }
}

export default FakeCompanyRepository;
