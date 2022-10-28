import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { FilelogModule } from './filelog/filelog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: "",
      database: "data_warehouse",
      entities: [],
      synchronize: true,
      multipleStatements: true
    }),
    WeatherModule,
    FilelogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
