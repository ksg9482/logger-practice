import { Injectable } from '@nestjs/common';
import { CustomLoggerService } from './logger/custom-logger.service';

@Injectable()
export class AppService {
  constructor(private customLogger: CustomLoggerService) {}
  // 로거 인스턴스 생성 시 클래스명을 컨텍스트로 설정하여 로그 메시지 앞에 클래스명이 함께 출력되도록 함.
  getHello(): string {
    this.customLogger.error('this is error');
    this.customLogger.warn('this is warn');
    this.customLogger.log('this is log');
    this.customLogger.verbose('this is verbose');
    this.customLogger.debug('this is debug');

    return 'Hello World!';
  }
}
