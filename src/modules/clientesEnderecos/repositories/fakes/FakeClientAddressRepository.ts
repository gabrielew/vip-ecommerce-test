import IClientAddressRepository from '@modules/clientesEnderecos/repositories/IClientAddressRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import ClientAddress from '../../infra/typeorm/entities/ClientAddress';
import mock from './mock';

class FakeProductRepository implements IClientAddressRepository {
  private clientAddresses: ClientAddress[] = mock;

  public async findAll(
    params: Params,
  ): Promise<PaginationReturn<ClientAddress>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const products = this.clientAddresses.slice(skip, limit);
    return { data: products, total: products.length };
  }
}

export default FakeProductRepository;
