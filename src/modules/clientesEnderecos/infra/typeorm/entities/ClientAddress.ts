import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Client from '@modules/clientes/infra/typeorm/entities/Client';

@Entity('clientes_enderecos')
class ClientAddress {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '100' })
  logradouro: string;

  @Column({ type: 'varchar', length: '100' })
  bairro: string;

  @Column({ type: 'varchar', length: '100' })
  cidade: string;

  @Column({ type: 'varchar', length: '7' })
  numero: string;

  @Column({ type: 'varchar', length: '100' })
  complemento: string;

  @Column({ type: 'varchar', length: '2' })
  uf: string;

  @Column({ type: 'varchar', length: '20' })
  cep: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'cliente_id' })
  cliente_id: number;
}

export default ClientAddress;
