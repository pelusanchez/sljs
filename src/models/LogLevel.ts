export type LogLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export const LogLevelWeight: { [level: string]: number } = {
  'TRACE': 5, 
  'DEBUG': 4,
  'INFO': 3,
  'WARN': 2,
  'ERROR': 1,
};
