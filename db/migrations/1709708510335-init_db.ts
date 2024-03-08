import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1709708510335 implements MigrationInterface {
    name = 'InitDb1709708510335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`image\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`image\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`product_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`product_id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`id\`, \`product_id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`product_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`category_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`category_id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`id\`, \`product_id\`, \`category_id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`category_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`product_id\`, \`category_id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`customer_order\` CHANGE \`product_id\` \`product_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`customer_order\` CHANGE \`account_id\` \`account_id\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_f132cc7be455c359ba84d1e724\` ON \`category\` (\`product_id\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_cc7f32b7ab33c70b9e715afae8\` ON \`category\` (\`category_id\`)`);
        await queryRunner.query(`ALTER TABLE \`customer_order\` ADD CONSTRAINT \`FK_7a88f60a23ea7e254883b1fb8bf\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`product_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customer_order\` ADD CONSTRAINT \`FK_7f9e65ad96638b7c2510ffe76d2\` FOREIGN KEY (\`account_id\`) REFERENCES \`user\`(\`account_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_f132cc7be455c359ba84d1e7246\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`product_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_cc7f32b7ab33c70b9e715afae84\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_cc7f32b7ab33c70b9e715afae84\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_f132cc7be455c359ba84d1e7246\``);
        await queryRunner.query(`ALTER TABLE \`customer_order\` DROP FOREIGN KEY \`FK_7f9e65ad96638b7c2510ffe76d2\``);
        await queryRunner.query(`ALTER TABLE \`customer_order\` DROP FOREIGN KEY \`FK_7a88f60a23ea7e254883b1fb8bf\``);
        await queryRunner.query(`DROP INDEX \`IDX_cc7f32b7ab33c70b9e715afae8\` ON \`category\``);
        await queryRunner.query(`DROP INDEX \`IDX_f132cc7be455c359ba84d1e724\` ON \`category\``);
        await queryRunner.query(`ALTER TABLE \`customer_order\` CHANGE \`account_id\` \`account_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer_order\` CHANGE \`product_id\` \`product_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`id\`, \`product_id\`, \`category_id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`category_id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`id\`, \`product_id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`category_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`product_id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`id\` \`product_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`product_id\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`image\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`image\` varchar(255) NOT NULL`);
    }

}
