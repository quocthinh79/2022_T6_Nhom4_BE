import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileLog } from 'src/entities/FileLog';
import { FilelogController } from './filelog.controller';
import { FilelogService } from './filelog.service';

@Module({
  imports:[TypeOrmModule.forFeature([FileLog])],
  controllers: [FilelogController],
  providers: [FilelogService]
})
export class FilelogModule {}
