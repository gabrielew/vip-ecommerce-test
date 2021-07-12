import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Company from '@modules/empresas/infra/typeorm/entities/Company';
import Product from '@modules/produtos/infra/typeorm/entities/Product';
import DistributionCenter from '@modules/centroDistribuicao/infra/typeorm/entities/DistributionCenter';

@Entity('produtos_estoque_preco')
class ProductsStockPrice {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'float', nullable: true })
  estoque: number;

  @Column({ type: 'float', nullable: true })
  estoque_seguranca: number;

  @Column({ type: 'float', nullable: true })
  preco_venda: number;

  @Column({ type: 'varchar', length: '15' })
  codigo_barras: string;

  @Column({ type: 'tinyint', default: 0 })
  status: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'produto_id' })
  produto_id: number;

  @OneToOne(() => DistributionCenter)
  @JoinColumn({ name: 'centro_distribuicao_id' })
  centro_distribuicao_id: number;

  @OneToOne(() => Company)
  @JoinColumn({ name: 'empresa_id' })
  empresa_id: number;
}

export default ProductsStockPrice;
