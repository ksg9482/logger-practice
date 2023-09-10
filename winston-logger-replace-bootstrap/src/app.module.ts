import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports:[
        new winston.transports.Console({
          level: 'silly', //process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: winston.format.combine(
            winston.format.timestamp(), //로그 남긴 시각 표시
            utilities.format.nestLike('Logger-Prac', { //로그 출처인 appName('앱이름') 설정
              prettyPrint:true
            })
          )
        })
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
