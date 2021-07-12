import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarEmpresas1625776937838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'empresas',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'descricao',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'cnpj',
            type: 'varchar',
            length: '30',
          },
          {
            // default 1 comment "situacao da empresa. 0 -> desativada, 1-> ativa no sistema"
            name: 'status',
            type: 'tinyint',
            default: 1,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('empresas');
  }
}
