import { LogLevel } from "../../../../winston-logger-replace-bootstrap/node_modules/@nestjs/common";

export interface CustomLogger {
    log(message: any, ...optionalParams: any[]): any;
    error(message: any, ...optionalParams: any[]): any;
    warn(message: any, ...optionalParams: any[]): any;
    debug?(message: any, ...optionalParams: any[]): any;
    verbose?(message: any, ...optionalParams: any[]): any;
    setLogLevels?(levels: LogLevel[]): any;
}