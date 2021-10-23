import { LoggerAPI } from './LoggerAPI';
import { LogLevel } from './models/LogLevel';

export class ConsoleLogger extends LoggerAPI {

  write(level: LogLevel, name: string, message: string, ...args: any[]): void {
    if (level === 'ERROR') {
      return console.error(this.format({ 
        level, name, message, args
      }));
    }
    return console.log(this.format({ 
      level, name, message, args
    }));
  }

}

export default ConsoleLogger;
