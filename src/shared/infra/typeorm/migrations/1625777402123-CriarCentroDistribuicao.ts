import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarCentroDistribuicao1625777402123
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'centro_distribuicao',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'numero_cd',
            type: 'integer',
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_empresa_id',
            columnNames: ['empresa_id'],
            referencedTableName: 'empresas',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
        ],
        indices: [
          {
            name: 'un_cd_empresa',
            columnNames: ['empresa_id', 'numero_cd'],
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('centro_distribuicao');
  }
}
