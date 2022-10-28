import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { FileLog } from 'src/entities/FileLog';
import { Weather } from 'src/entities/Weather';
import { Repository, Db, EntityManager } from 'typeorm';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}

  async importDataFromCsvFile(fileName: string): Promise<Weather[]> {
    const queryString = `truncate weatherdata_staging;LOAD DATA INFILE 'C:/Users/Admin/Downloads/${fileName}.csv' INTO TABLE weatherdata_staging FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\\n' IGNORE 1 ROWS;`;
    console.log(queryString)
    return await this.weatherRepository.query(queryString);
  }

  async handleStaging(): Promise<Weather[]> {
    const queryString = `CALL initStaging();`;
    return await this.weatherRepository.query(queryString);
  }

  async handleDataWarehouse(): Promise<Weather[]> {
    const queryString = `CALL initDataWarehouse();`;
    return await this.weatherRepository.query(queryString);
  }

  async handleWriteLog(file_name : string, log_date: string, action_log: string, status: string): Promise<FileLog[]> {
    const queryString = `CALL writeLog(${file_name}, ${log_date}, ${action_log}, ${status});`;
    return await this.weatherRepository.query(queryString);
  }
}
