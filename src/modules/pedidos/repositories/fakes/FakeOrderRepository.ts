import IOrderRepository from '@modules/pedidos/repositories/IOrderRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import Order from '../../infra/typeorm/entities/Order';
import mock from './mock';

class OrderRepository implements IOrderRepository {
  private orders: Order[] = mock;

  public async findAll(params: Params): Promise<PaginationReturn<Order>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const orders = this.orders.slice(skip, limit);
    return { data: orders, total: orders.length };
  }
}

export default OrderRepository;
