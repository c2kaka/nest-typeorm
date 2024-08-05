import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DbConfService } from './db-conf.service';
import { CreateDbConfDto } from './dto/create-db-conf.dto';
import { UpdateDbConfDto } from './dto/update-db-conf.dto';

@Controller('db-conf')
export class DbConfController {
  constructor(private readonly dbConfService: DbConfService) {}

  @Post()
  create(@Body() createDbConfDto: CreateDbConfDto) {
    return this.dbConfService.create(createDbConfDto);
  }

  @Get()
  findAll() {
    return this.dbConfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dbConfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDbConfDto: UpdateDbConfDto) {
    return this.dbConfService.update(+id, updateDbConfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dbConfService.remove(+id);
  }
}
