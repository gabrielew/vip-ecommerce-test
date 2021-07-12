import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Company from '@modules/empresas/infra/typeorm/entities/Company';

@Entity('clientes')
class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '100' })
  nome: string;

  @Column({ type: 'varchar', length: '100' })
  sobrenome: string;

  @Column({ type: 'varchar', length: '100', unique: true })
  email: string;

  @Column({ type: 'varchar', length: '100', unique: true })
  cpf: string;

  @Column({ type: 'tinyint', default: 0 })
  verificado: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'empresa_id' })
  empresa_id: number;
}

export default Client;
