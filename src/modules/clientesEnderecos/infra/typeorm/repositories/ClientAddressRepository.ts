import IClientAddressRepository from '@modules/clientesEnderecos/repositories/IClientAddressRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import ClientAddress from '../entities/ClientAddress';

class ClientAddressRepository implements IClientAddressRepository {
  private ormRepository: Repository<ClientAddress>;

  constructor() {
    this.ormRepository = getRepository(ClientAddress);
  }

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<ClientAddress>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
      relations: ['cliente_id'],
    });

    return { data, total };
  }
}

export default ClientAddressRepository;
