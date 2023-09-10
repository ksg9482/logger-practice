import { ConsoleLogger, LogLevel } from "../../../winston-logger-replace-bootstrap/node_modules/@nestjs/common";
import { CustomLogger } from "./type/custom-logger";

//customLogger가 로그 출력시 내장 logger처럼 여러 정보를 출력하게 하려면 
//ConsoleLogger를 상속 받은 후 원하는 메서드를 override한다
export class CustomLoggerService extends ConsoleLogger implements CustomLogger {
    log(message: any, ...optionalParams: any[]) {
        super.log(`${message}...`, ...optionalParams);
        this.doSomething();
    }

    error(message: any, ...optionalParams: [...any, string?]) {
        super.error(`${message}...`, ...optionalParams);
        this.doSomething();
    }

    warn(message: any, ...optionalParams: any[]) {
        super.warn(`${message}...`, ...optionalParams);
        this.doSomething();
    }

    debug(message: any, ...optionalParams: any[]) {
        super.debug(`${message}...`, ...optionalParams);
        this.doSomething();
    }

    verbose(message: any, ...optionalParams: any[]) {
        super.verbose(`${message}...`, ...optionalParams);
        this.doSomething();
    }

    private doSomething() {
        // 여기에 로깅에 관련된 부가 로직을 추가
        // ex. DB에 저장
    }
}