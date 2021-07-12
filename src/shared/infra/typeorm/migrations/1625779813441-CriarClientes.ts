import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarClientes1625779813441 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'sobrenome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
          {
            // default 0 comment "novo cliente = 0, cliente com e-mail verificado 1",
            name: 'verificado',
            type: 'tinyint',
            default: 0,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_empresa_id_cliente',
            columnNames: ['empresa_id'],
            referencedTableName: 'empresas',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
        indices: [
          {
            name: 'un_cliente_empresa',
            columnNames: ['cpf', 'empresa_id'],
            isUnique: true,
          },
          {
            name: 'un_email_empresa',
            columnNames: ['email', 'empresa_id'],
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clientes');
  }
}
