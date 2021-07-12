import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Company from '@modules/empresas/infra/typeorm/entities/Company';
import Product from '@modules/produtos/infra/typeorm/entities/Product';
import DistributionCenter from '@modules/centroDistribuicao/infra/typeorm/entities/DistributionCenter';
import Order from '@modules/pedidos/infra/typeorm/entities/Order';

@Entity('pedidos_itens')
class OrderItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'float', nullable: true })
  quantidade: number;

  @Column({ type: 'varchar', nullable: true })
  observacoes: string;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'produto_id' })
  produto_id: number;

  @OneToOne(() => DistributionCenter)
  @JoinColumn({ name: 'centro_distribuicao_id' })
  centro_distribuicao_id: number;

  @OneToOne(() => Company)
  @JoinColumn({ name: 'empresa_id' })
  empresa_id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'pedido_id' })
  pedido_id: number;
}

export default OrderItem;
