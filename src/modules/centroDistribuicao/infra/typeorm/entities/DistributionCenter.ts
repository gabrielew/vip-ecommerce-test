import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Company from '@modules/empresas/infra/typeorm/entities/Company';

@Entity('centro_distribuicao')
class DistributionCenter {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  numero_cd: number;

  @OneToOne(() => Company)
  @JoinColumn({ name: 'empresa_id' })
  empresa_id: number;
}

export default DistributionCenter;
