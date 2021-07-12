import IOrderRepository from '@modules/pedidos/repositories/IOrderRepository';
import { PaginationReturn, Params } from '@shared/interfaces';
import { getRepository, Repository } from 'typeorm';
import Order from '../entities/Order';

class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findAll(params: Params): Promise<PaginationReturn<Order>> {
    const { page, limit } = params;
    const [data, total] = await this.ormRepository.findAndCount({
      skip: page,
      take: limit,
      relations: ['empresa_id', 'centro_distribuicao_id', 'cliente_id'],
    });

    return { data, total };
  }
}

export default OrderRepository;
