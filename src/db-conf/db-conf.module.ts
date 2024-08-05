import { Module } from '@nestjs/common';
import { DbConfService } from './db-conf.service';
import { DbConfController } from './db-conf.controller';

@Module({
  controllers: [DbConfController],
  providers: [DbConfService],
})
export class DbConfModule {}
