import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Company from '@modules/empresas/infra/typeorm/entities/Company';
import DistributionCenter from '@modules/centroDistribuicao/infra/typeorm/entities/DistributionCenter';
import Client from '@modules/clientes/infra/typeorm/entities/Client';

@Entity('pedidos')
class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'float', default: 0 })
  valor_frete: number;

  @Column({ type: 'tinyint', default: 0 })
  retira: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_pedido: Date;

  @Column({ type: 'float', nullable: true })
  valor_pedido: number;

  @Column({ type: 'float', nullable: true })
  valor_desconto: number;

  @Column({ type: 'float', nullable: true })
  valor_total: number;

  @Column({ type: 'datetime', nullable: true })
  data_agendamento_entrega: Date;

  @Column({ type: 'datetime', nullable: true })
  data_entrega: Date;

  @Column({ type: 'integer', nullable: true })
  id_endereco: number;

  @OneToOne(() => DistributionCenter)
  @JoinColumn({ name: 'centro_distribuicao_id' })
  centro_distribuicao_id: number;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'cliente_id' })
  cliente_id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'empresa_id' })
  empresa_id: number;
}

export default Order;
