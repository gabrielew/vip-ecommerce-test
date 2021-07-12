import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IClientAddressRepository from '../repositories/IClientAddressRepository';
import ClientAddress from '../infra/typeorm/entities/ClientAddress';

@injectable()
class FindAllClientAddressesService {
  constructor(
    @inject('ClientAddressRepository')
    private repository: IClientAddressRepository,
  ) {}

  public async execute(
    params: Params,
  ): Promise<PaginationReturn<ClientAddress>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllClientAddressesService;
