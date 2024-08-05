import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserData1722837696340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`user\` VALUES (1,'fanoy','fanoy@gmail.com');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM \`user\` WHERE id = 1;`);
  }
}
