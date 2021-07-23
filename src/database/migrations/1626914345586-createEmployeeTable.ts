import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createEmployeeTable1626914345586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "funcionarios",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "data_nascimento",
            type: "date",
          },
          {
            name: "data_admissao",
            type: "date",
          },
          {
            name: "setor",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "cargo",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "nivel",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "created_at",
            type: "timestamp",

            default: "now()",
          },
          {
            name: "update_at",
            type: "timestamp",

            default: "now()",
          },
          {
            name: "filialId",
            type: "integer",
            default: null,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("funcionarios");
  }
}
