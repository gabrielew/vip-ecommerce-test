import { injectable, inject } from 'tsyringe';
import IClientRepository from '../repositories/IClientRepository';
import Client from '../infra/typeorm/entities/Client';

@injectable()
class FindByModel2Service {
  constructor(
    @inject('ClientRepository')
    private repository: IClientRepository,
  ) {}

  public async execute(type: string, company_id: number): Promise<Client> {
    return this.repository.findByModel2(type, company_id);
  }
}
export default FindByModel2Service;
