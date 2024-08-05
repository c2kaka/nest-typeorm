import { Test, TestingModule } from '@nestjs/testing';
import { DbConfController } from './db-conf.controller';
import { DbConfService } from './db-conf.service';

describe('DbConfController', () => {
  let controller: DbConfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbConfController],
      providers: [DbConfService],
    }).compile();

    controller = module.get<DbConfController>(DbConfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
