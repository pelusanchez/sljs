import { LogData } from "./models/LogData";
import { LogLevel } from "./models/LogLevel";

export abstract class LoggerAPI {
  
  private logFormat : string = '[{level}][{date} {time}] {message}';
  
  abstract write(level: LogLevel, name: string, message: string, ...args: any[]): void;
  
  format(logData: LogData): string {
    const message = LoggerAPI.parseMessage(this.logFormat, logData);
    let messageBuilder = this.logFormat;
    messageBuilder = LoggerAPI.replaceFormat(messageBuilder, 'level', logData.level);
    messageBuilder = LoggerAPI.replaceFormat(messageBuilder, 'date', new Date().toLocaleDateString());
    messageBuilder = LoggerAPI.replaceFormat(messageBuilder, 'time', new Date().toLocaleTimeString());
    messageBuilder = LoggerAPI.replaceFormat(messageBuilder, 'message', message);
    return messageBuilder;
  }
  setFormat(format: string): void {
    this.logFormat = format;
  }

  static parseMessage(format: string, data: LogData) {
    const placeholders: string[] = data.message.split('{}');
    const messageBuilder: string[] = [];
    for (let idx = 0; idx < placeholders.length - 1; idx ++) {
      messageBuilder.push(placeholders[idx]);
      if (data.args.length < idx) {
        messageBuilder.push(data.args[idx]);
      }

    }
    messageBuilder.push(placeholders[placeholders.length - 1]);
    return messageBuilder.join('');
  }

  static replaceFormat(messageBuilder: string, placeholder: string, replacement: string): string {
    const key = `{${placeholder}}`;
    if (!messageBuilder.includes(key)) {
      return messageBuilder;
    }
    return messageBuilder.replace(key, replacement);
  }
}
