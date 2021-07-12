import { injectable, inject } from 'tsyringe';
import { IntegrationModelOne } from 'modules/clientes/infra/typeorm/repositories/ClientRepository';
import IClientRepository from '../repositories/IClientRepository';

@injectable()
class FindByModelService {
  constructor(
    @inject('ClientRepository')
    private repository: IClientRepository,
  ) {}

  public async execute(companyId: number): Promise<IntegrationModelOne[]> {
    return this.repository.findByModel(companyId);
  }
}
export default FindByModelService;
