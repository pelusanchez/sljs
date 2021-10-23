import { Log } from "./Log";
import { LogImpl } from "./LogImpl";

export class Logger {
  static getLogger(className?: string): Log {
    return new LogImpl(className);
  }
}

export default Logger;
