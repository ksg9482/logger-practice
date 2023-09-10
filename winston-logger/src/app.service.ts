import { Injectable, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER, WinstonLogger } from 'nest-winston';


@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger,
  ){}
  getHello(): string {
    this.printWinstonLog('Hello World!')
    return 'Hello World!';
  }

  private printWinstonLog(message: string) {
    // console.log(this.logger.name);

    this.logger.error('error: ', message);
    this.logger.warn('warn: ', message);
    this.logger.verbose('verbose: ', message);
    this.logger.debug('debug: ', message);
  }
}
