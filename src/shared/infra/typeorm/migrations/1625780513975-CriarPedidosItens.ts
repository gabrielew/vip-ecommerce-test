import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarPedidosItens1625780513975
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedidos_items',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'produto_id',
            type: 'integer',
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
          {
            name: 'centro_distribuicao_id',
            type: 'integer',
          },
          {
            name: 'pedido_id',
            type: 'integer',
          },
          {
            name: 'quantidade',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'observacoes',
            type: 'varchar',
            length: '200',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_pedido_item_produto_id',
            columnNames: ['produto_id'],
            referencedTableName: 'produtos',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_empresa_pedido_item',
            columnNames: ['centro_distribuicao_id', 'empresa_id'],
            referencedTableName: 'clientes',
            referencedColumnNames: ['id', 'empresa_id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_pedido_item_pedido_id',
            columnNames: ['pedido_id'],
            referencedTableName: 'pedidos',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedidos_items');
  }
}
