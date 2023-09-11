import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as winstonDaily from 'winston-daily-rotate-file';
import { WinstonDailyModule } from './logger/winston-logger.module';
const logDir = __dirname + '/../../logs';
const dailyOptions = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD',
    dirname: logDir + `/${level}`,
    filename: `%DATE%.${level}.log`,
    zippedArchive: true,
  };
};
const baseFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format((info) => {
    info.level = info.level.toUpperCase();
    return info;
  })(),
);

const prettyFormat = winston.format.combine(
  baseFormat,
  utilities.format.nestLike('Logger-Prac', { //로그 출처인 appName('앱이름') 설정
    prettyPrint:true
  })
);

@Module({
  imports: [
    WinstonDailyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
