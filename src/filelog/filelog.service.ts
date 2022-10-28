import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileLog } from 'src/entities/FileLog';
import { Repository, Db, EntityManager } from 'typeorm';

@Injectable()
export class FilelogService {
  constructor(
    @InjectRepository(FileLog)
    private readonly fileLogRepository: Repository<FileLog>,
  ) {}

  async handleWriteLog(file_name : string, log_date: string, action_log: string, status: string): Promise<FileLog[]> {
    const queryString = `CALL writeLog('${file_name}', '${log_date}', '${action_log}', '${status}');`;
    return await this.fileLogRepository.query(queryString);
  }
}