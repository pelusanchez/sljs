import ConsoleLogger from "./ConsoleLogger";
import { Log } from "./Log";
import { LoggerAPI } from "./LoggerAPI";
import { LogLevelWeight, LogLevel } from "./models/LogLevel";

export class LogImpl implements Log {
  private loglevel : number = LogLevelWeight['INFO'];
  private logger : LoggerAPI = new ConsoleLogger();
  private name: string = '';

  constructor(name?: string) {
    this.name = name || '';
  }

  setLogger(logger: LoggerAPI): void {
    this.logger = logger;
  }

  write(level: LogLevel, message: string, ...args: any[]): void {
    if (LogLevelWeight[level] <= this.loglevel && this.logger !== undefined) {
      this.logger.write(level, this.name, message, args);
    }
  }

  trace(message: string, ...args: any[]): void {
    this.write('TRACE', message, args);
  }
  debug(message: string, ...args: any[]): void {
    this.write('DEBUG', message, args);
  }
  info(message: string, ...args: any[]): void {
    this.write('INFO', message, args);
  }
  warn(message: string, ...args: any[]): void {
    this.write('WARN', message, args);
  }
  error(message: string, ...args: any[]): void {
    this.write('ERROR', message, args);
  }

  setLevel(logLevel: LogLevel): void {
    this.loglevel = LogLevelWeight[logLevel];
  }
}
