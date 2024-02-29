import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductModule } from './modules/products/product.module';
import { DataSource } from 'typeorm';
import { User } from './typeom/entities/user.entity';
// import { ProductEntity } from './entities/product.entity';
// import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'furniture_store',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    // UsersModule,
    // ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
