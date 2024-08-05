import { PartialType } from '@nestjs/mapped-types';
import { CreateDbConfDto } from './create-db-conf.dto';

export class UpdateDbConfDto extends PartialType(CreateDbConfDto) {}
