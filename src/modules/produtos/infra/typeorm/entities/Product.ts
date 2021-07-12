import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Company from '@modules/empresas/infra/typeorm/entities/Company';

@Entity('produtos')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '200' })
  descricao: string;

  @Column({ type: 'char', length: '2' })
  unidade_medida: string;

  @Column({ type: 'tinyint', default: 0 })
  bebida_alcoolica: number;

  @Column({ type: 'tinyint', default: 0 })
  pesavel: number;

  @OneToOne(() => Company)
  @JoinColumn({ name: 'empresa_id' })
  empresa_id: number;
}

export default Product;
