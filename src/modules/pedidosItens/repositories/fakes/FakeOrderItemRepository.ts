import IOrderItemRepository from '@modules/pedidosItens/repositories/IOrderItemRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import OrderItem from '../../infra/typeorm/entities/OrderItem';
import mock from './mock';

class FakeProductRepository implements IOrderItemRepository {
  private orderItems: OrderItem[] = mock;

  public async findAll(params: Params): Promise<PaginationReturn<OrderItem>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const orderItems = this.orderItems.slice(skip, limit);
    return { data: orderItems, total: orderItems.length };
  }
}

export default FakeProductRepository;
