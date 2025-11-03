import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table.js';

export class CreatePropertyImageTable1761771266758 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'PropertyImage',
        columns: [
          {
            name: 'id',
            generationStrategy: 'uuid',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'propertyId',
            type: 'uuid',
            isNullable: false,

          },
          {
            name: 'name',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'PropertyImage',
      new TableForeignKey({
        columnNames: ['propertyId'],
        referencedTableName: 'Property',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE', // delete images when property deleted
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('');
  }
}
