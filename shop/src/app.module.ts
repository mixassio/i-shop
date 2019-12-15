import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: ['src/**/*.entity{.ts,.js}'],
      migrations: ['src/seeds/**/*.ts'],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    OrderModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
