import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Weather } from 'src/entities/Weather';
import { Repository, Db, EntityManager } from 'typeorm';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}

  async importDataFromCsvFile(): Promise<Weather[]> {
    const queryString = `truncate weatherdata_staging;LOAD DATA INFILE 'CsvFile/ThoiTietVN_10-10-2022.csv' INTO TABLE weatherdata_staging FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\\n' IGNORE 1 ROWS;`;
    return await this.weatherRepository.query(queryString);
  }

  async handleStaging(): Promise<Weather[]> {
    const queryString = `CALL initStaging();`;
    return await this.weatherRepository.query(queryString);
  }
}
