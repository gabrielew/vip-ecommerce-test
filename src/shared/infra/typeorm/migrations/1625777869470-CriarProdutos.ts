import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarProdutos1625777869470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'descricao',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'unidade_medida',
            type: 'char',
            length: '2',
          },
          {
            // default 0 comment '0-> não é bebida alcoolica, 1 -> é bebida alcoolica',
            name: 'bebida_alcoolica',
            type: 'tinyint',
            default: 0,
          },
          {
            // default 0 comment '0 -> não é pesável, 1 -> é pesável',
            name: 'pesavel',
            type: 'tinyint',
            default: 0,
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_empresa_id_produto',
            columnNames: ['empresa_id'],
            referencedTableName: 'empresas',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos');
  }
}
