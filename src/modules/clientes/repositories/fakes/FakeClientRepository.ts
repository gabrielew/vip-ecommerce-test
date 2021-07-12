import IClientRepository from '@modules/clientes/repositories/IClientRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { IntegrationModelOne } from 'modules/clientes/infra/typeorm/repositories/interfaces';
import Client from '../../infra/typeorm/entities/Client';
import mock from './mock';

class FakeProductRepository implements IClientRepository {
  private clients: Client[] = mock;

  public async findAll(params: Params): Promise<PaginationReturn<Client>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const products = this.clients.slice(skip, limit);
    return { data: products, total: products.length };
  }

  public async findByModel(company_id: number): Promise<IntegrationModelOne[]> {
    const integrationModelOne = {} as IntegrationModelOne;
    return [integrationModelOne]; // Sem teste, apenas para compor o repositório fake;
  }

  public async findByModel2(type: string, company_id: number): Promise<any> {
    return { type, company_id }; // Sem teste, apenas para compor o repositório fake;
  }
}

export default FakeProductRepository;
