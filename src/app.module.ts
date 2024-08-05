import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbConfModule } from './db-conf/db-conf.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { City } from './city/entities/city.entity';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [configuration],
      envFilePath: ['src/.env', 'src/.env.development'],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'fanoy',
    //   database: 'typeorm_test',
    //   entities: [User, City],
    //   synchronize: false,
    //   migrations: ['./src/migrations/*.ts'],
    //   logging: true,
    //   poolSize: 10,
    //   connectorPackage: 'mysql2',
    //   extra: {
    //     authPlugins: 'sha256_password',
    //   },
    // }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory(configService: ConfigService) {
    //     return {
    //       type: 'mysql',
    //       host: configService.get('db.mysql_server_host'),
    //       port: configService.get('db.mysql_server_port'),
    //       username: configService.get('db.mysql_server_username'),
    //       password: configService.get('db.mysql_server_password'),
    //       database: configService.get('db.mysql_server_database'),
    //       entities: [User, City],
    //       synchronize: false,
    //       migrations: ['./src/migrations/*.ts'],
    //       logging: true,
    //       poolSize: 10,
    //       connectorPackage: 'mysql2',
    //       extra: {
    //         authPlugins: 'sha256_password',
    //       },
    //     };
    //   },
    //   inject: [ConfigService],
    // } as any),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory(configService: ConfigService) {
        return {
          type: 'mysql',
          host: configService.get('mysql_server_host'),
          port: configService.get('mysql_server_port'),
          username: configService.get('mysql_server_username'),
          password: configService.get('mysql_server_password'),
          database: configService.get('mysql_server_database'),
          entities: [User, City],
          synchronize: false,
          migrations: ['./src/migrations/*.ts'],
          logging: true,
          poolSize: 10,
          connectorPackage: 'mysql2',
          extra: {
            authPlugins: 'sha256_password',
          },
        };
      },
      inject: [ConfigService],
    } as any),
    CityModule,
    DbConfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
