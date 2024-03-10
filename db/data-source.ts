import { Category } from 'src/typeom/entities/category.entity';
import { CustomerOrder } from 'src/typeom/entities/customer_order.entity';
import { Material } from 'src/typeom/entities/materials.entity';
import { Product } from 'src/typeom/entities/product.entity';
import { ProductType } from 'src/typeom/entities/product_type.entity';
import { User } from 'src/typeom/entities/user.entity';
import { Voucher } from 'src/typeom/entities/voucher.entity';
import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'furniture_store',
  entities: [
    User,
    Category,
    ProductType,
    Voucher,
    Product,
    CustomerOrder,
    Material,
  ],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
