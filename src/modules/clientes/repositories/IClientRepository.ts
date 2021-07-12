import { PaginationReturn, Params } from '@shared/interfaces';
import { IntegrationModelOne } from 'modules/clientes/infra/typeorm/repositories/interfaces';
import Client from '../infra/typeorm/entities/Client';

export default interface ClientRepository {
  findAll(params: Params): Promise<PaginationReturn<Client>>;
  findByModel(companyId: number): Promise<IntegrationModelOne[]>;
  findByModel2(type: string, company_id: number): Promise<any>;
}
