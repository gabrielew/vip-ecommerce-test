import ICompanyRepository from '@modules/empresas/repositories/ICompanyRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import Company from '../entities/Company';

class CompanyRepository implements ICompanyRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  public async findAll(params: Params): Promise<PaginationReturn<Company>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
    });

    return { data, total };
  }
}

export default CompanyRepository;
