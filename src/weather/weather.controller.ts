import { Controller, Get, Param, Query } from '@nestjs/common';
import { Weather } from 'src/entities/Weather';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/import-data/:fileName')
  async importDataFromCsvFile(
    @Param('fileName') fileName: string,
  ): Promise<Weather[]> {
    return await this.weatherService.importDataFromCsvFile(fileName);
  }

  @Get('/handle-staging')
  async handleStaging(): Promise<Weather[]> {
    return await this.weatherService.handleStaging();
  }

  @Get('/handle-data-warehouse')
  async handleDataWarehouse(): Promise<Weather[]> {
    return await this.weatherService.handleDataWarehouse();
  }
}
