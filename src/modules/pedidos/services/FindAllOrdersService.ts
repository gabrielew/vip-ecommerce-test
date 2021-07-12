import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IOrderRepository from '../repositories/IOrderRepository';
import Order from '../infra/typeorm/entities/Order';

@injectable()
class FindAllOrdersService {
  constructor(
    @inject('OrderRepository')
    private repository: IOrderRepository,
  ) {}

  public async execute(params: Params): Promise<PaginationReturn<Order>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllOrdersService;
