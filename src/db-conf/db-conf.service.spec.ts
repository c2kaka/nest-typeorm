import { Test, TestingModule } from '@nestjs/testing';
import { DbConfService } from './db-conf.service';

describe('DbConfService', () => {
  let service: DbConfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbConfService],
    }).compile();

    service = module.get<DbConfService>(DbConfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
