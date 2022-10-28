import { Test, TestingModule } from '@nestjs/testing';
import { FilelogService } from './filelog.service';

describe('FilelogService', () => {
  let service: FilelogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilelogService],
    }).compile();

    service = module.get<FilelogService>(FilelogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
