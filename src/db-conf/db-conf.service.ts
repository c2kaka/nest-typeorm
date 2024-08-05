import { Inject, Injectable } from '@nestjs/common';
import { CreateDbConfDto } from './dto/create-db-conf.dto';
import { UpdateDbConfDto } from './dto/update-db-conf.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DbConfService {
  @Inject(ConfigService)
  private readonly configService: ConfigService;

  create(createDbConfDto: CreateDbConfDto) {
    return 'This action adds a new dbConf';
  }

  findAll() {
    return this.configService.get('db.mysql_server_username');
  }

  findOne(id: number) {
    return `This action returns a #${id} dbConf`;
  }

  update(id: number, updateDbConfDto: UpdateDbConfDto) {
    return `This action updates a #${id} dbConf`;
  }

  remove(id: number) {
    return `This action removes a #${id} dbConf`;
  }
}
