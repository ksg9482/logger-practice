import { Injectable, Inject, LoggerService, InternalServerErrorException } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';


@Injectable()
export class AppService {
  constructor(
     // 내장 로거 대체
     @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
  ){}
  getHello(): string {
    this.printLoggerServiceLog('Hello World!')
    return 'Hello World!';
  }

  private printLoggerServiceLog(message: string) {
    try {
      this.logger.warn('warn: ', message);
      this.logger.log('log: ', message);
      this.logger.verbose('verbose: ', message);
      this.logger.debug('debug: ', message);
      throw new InternalServerErrorException('test');
    } catch (e) {
      this.logger.error('error::', message, e.stack);
      //this.logger.error('error::', JSON.stringify(dto), e.stack);
      //LoggerService 는 WinstonLogger 와 다르게 인수로 받은 객체를 출력하지 않는다.
      //내용을 출력하기 위해서 객체를 string 으로 변환하여 메시지 내에 포함.
      //error 함수는 두 번째 인수로 받은 객체를 stack 속성을 가진 객체로 출력한다.
    }

   
  }
}
