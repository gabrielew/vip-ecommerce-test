import { injectable, inject } from 'tsyringe';
import { PaginationReturn, Params } from '@shared/interfaces';
import IOrderItemRepository from '../repositories/IOrderItemRepository';
import OrderItem from '../infra/typeorm/entities/OrderItem';

@injectable()
class FindAllOrderItemsService {
  constructor(
    @inject('OrderItemRepository')
    private repository: IOrderItemRepository,
  ) {}

  public async execute(params: Params): Promise<PaginationReturn<OrderItem>> {
    const { page, limit } = params;

    return this.repository.findAll({
      page: (page - 1) * limit,
      limit,
    });
  }
}
export default FindAllOrderItemsService;
