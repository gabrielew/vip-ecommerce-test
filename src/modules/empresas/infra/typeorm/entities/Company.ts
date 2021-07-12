import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empresas')
class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '100' })
  descricao: string;

  @Column({ type: 'varchar', length: '30' })
  cnpj: string;

  @Column({ type: 'tinyint', default: 1 })
  status: number;
}

export default Company;
