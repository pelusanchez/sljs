import ConsoleLogger from "./ConsoleLogger";
import { LoggerAPI } from "./LoggerAPI";
import { LogData } from "./models/LogData";
import { LogLevel, LogLevelWeight } from "./models/LogLevel";

export interface Log {
  setLogger(logger: LoggerAPI): void;
  write(level: LogLevel, message: string, ...args: any[]): void;
  trace(message: string, ...args: any[]): void;
  debug(message: string, ...args: any[]): void;
  info(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  setLevel(logLevel: LogLevel): void;
}
