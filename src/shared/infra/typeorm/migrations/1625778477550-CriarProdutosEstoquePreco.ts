import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarProdutosEstoquePreco1625778477550
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos_estoque_preco',
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
            name: 'centro_distribuicao_id',
            type: 'integer',
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
          {
            name: 'estoque',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'estoque_seguranca',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'preco_venda',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'codigo_barras',
            type: 'varchar',
            length: '15',
          },
          {
            // default 1 comment "0 -> produto desativado, 1 -> produto ativado",
            name: 'status',
            type: 'tinyint',
            default: 0,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_empresa_cd',
            columnNames: ['centro_distribuicao_id', 'empresa_id'],
            referencedTableName: 'centro_distribuicao',
            referencedColumnNames: ['id', 'empresa_id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_produto_id',
            columnNames: ['produto_id'],
            referencedTableName: 'produtos',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos_estoque_preco');
  }
}
