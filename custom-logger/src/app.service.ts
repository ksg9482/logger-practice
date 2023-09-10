import { Injectable, Logger } from '@nestjs/common';
import { CustomLoggerService } from './logger/custom-logger.service';

@Injectable()
export class AppService {
  // 로거 인스턴스 생성 시 클래스명을 컨텍스트로 설정하여 로그 메시지 앞에 클래스명이 함께 출력되도록 함.
  private readonly logger = new Logger(AppService.name);
  private readonly customlogger = new CustomLoggerService();
  getHello(): string {
    this.logger.error('this is error');
    this.logger.warn('this is warn');
    this.logger.log('this is log');
    this.logger.verbose('this is verbose');
    this.logger.debug('this is debug');

    this.customlogger.error('this is custom logger error')
    return 'Hello World!';
  }
}
