import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarPedidos1625780201292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedidos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'cliente_id',
            type: 'integer',
          },
          {
            name: 'centro_distribuicao_id',
            type: 'integer',
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
          {
            // default 0 comment "o frente 0 é o frete grátis",
            name: 'valor_frete',
            type: 'float',
            default: 0,
          },
          {
            name: 'id_endereco',
            type: 'integer',
            isNullable: true,
          },
          {
            // default 0 comment "0 -> é entrega, 1 -> vai retirar na loja, neste caso o ID_ENDERECO pode ser null",
            name: 'retira',
            type: 'tinyint',
            default: 0,
          },
          {
            name: 'data_pedido',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'valor_pedido',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'valor_desconto',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'valor_total',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'data_agendamento_entrega',
            type: 'datetime',
            isNullable: true,
          },
          {
            // comment "data da realização da entrega",
            name: 'data_entrega',
            type: 'datetime',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_cliente_pedidos',
            columnNames: ['cliente_id'],
            referencedTableName: 'clientes',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_empresa_pedido_itens',
            columnNames: ['centro_distribuicao_id', 'empresa_id'],
            referencedTableName: 'clientes',
            referencedColumnNames: ['id', 'empresa_id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedidos');
  }
}
