import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarClientesEnderecos1625780030022
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes_enderecos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'logradouro',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'bairro',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'cidade',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'numero',
            type: 'varchar',
            length: '7',
            isNullable: true,
          },
          {
            name: 'complemento',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'uf',
            type: 'varchar',
            length: '2',
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'cliente_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_cliente_id_endereco',
            columnNames: ['cliente_id'],
            referencedTableName: 'clientes',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clientes_enderecos');
  }
}
