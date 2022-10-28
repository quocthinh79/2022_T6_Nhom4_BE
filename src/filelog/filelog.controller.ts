import { Controller, Get, Param, Query } from '@nestjs/common';
import { FileLog } from 'src/entities/FileLog';
import { FilelogService } from './filelog.service';
@Controller('filelog')
export class FilelogController {
  constructor(private readonly fileLogService: FilelogService) {}
  @Get('/handle-write-log/:fileName/:logDate/:actionLog/:status')
  async handleWriteLog(
    @Param('fileName') fileName: string,
    @Param('logDate') logDate: string,
    @Param('actionLog') actionLog: string,
    @Param('status') status: string,
  ): Promise<FileLog[]> {
    const res = await this.fileLogService.handleWriteLog(
      fileName,
      logDate,
      actionLog,
      status,
    );
    return null;
  }
}
