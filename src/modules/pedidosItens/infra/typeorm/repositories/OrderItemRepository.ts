import IOrderItemRepository from '@modules/pedidosItens/repositories/IOrderItemRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import OrderItem from '../entities/OrderItem';

class OrderItemRepository implements IOrderItemRepository {
  private ormRepository: Repository<OrderItem>;

  constructor() {
    this.ormRepository = getRepository(OrderItem);
  }

  public async findAll(params: Params): Promise<PaginationReturn<OrderItem>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
      relations: [
        'empresa_id',
        'produto_id',
        'centro_distribuicao_id',
        'pedido_id',
      ],
    });

    return { data, total };
  }
}

export default OrderItemRepository;
