import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from 'src/entities/Weather';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports:[TypeOrmModule.forFeature([Weather])],
  controllers: [WeatherController],
  providers: [WeatherService]
})
export class WeatherModule {}
