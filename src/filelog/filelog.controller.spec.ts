import { Test, TestingModule } from '@nestjs/testing';
import { FilelogController } from './filelog.controller';

describe('FilelogController', () => {
  let controller: FilelogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilelogController],
    }).compile();

    controller = module.get<FilelogController>(FilelogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
