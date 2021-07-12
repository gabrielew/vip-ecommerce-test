import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IClientRepository from '../repositories/IClientRepository';
import Client from '../infra/typeorm/entities/Client';

@injectable()
class FindAllClientsService {
  constructor(
    @inject('ClientRepository')
    private repository: IClientRepository,
  ) {}

  public async execute(params: Params): Promise<PaginationReturn<Client>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllClientsService;
