import { Controller, Get } from '@nestjs/common';
import { async } from 'rxjs';
import { Weather } from 'src/entities/Weather';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
     constructor(private readonly weatherService: WeatherService){}

     @Get('/import-data')
     async importDataFromCsvFile(): Promise<Weather[]> {
          return await this.weatherService.importDataFromCsvFile()
     }

     @Get('/handle-staging')
     async handleStaging(): Promise<Weather[]> {
          return await this.weatherService.handleStaging();
     }
}
