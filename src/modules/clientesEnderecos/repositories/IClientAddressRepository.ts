import { PaginationReturn, Params } from '@shared/interfaces';
import ClientAddress from '../infra/typeorm/entities/ClientAddress';

export default interface IClientAddressRepository {
  findAll(params: Params): Promise<PaginationReturn<ClientAddress>>;
}
