import { inject, injectable } from 'inversify';
import * as logger from 'loglevel';
import { ILogger } from '../../interfaces/logger.interface';
import { LogLevel } from '../../interfaces/log-level.enum';
import { TYPES } from '../../types';
import { ICamaServerConfig } from '../../interfaces/cama-server-config';


@injectable()
export class LoglevelLogger implements ILogger {

  //Not so sure about this
  private profilerMap:any = {};
  private logger: any;
  constructor(
    @inject(TYPES.CamaServerConfig) private config: ICamaServerConfig,
  ) {
    if(config.logLevel) {
      logger.setLevel(config.logLevel as any);
    }
  }
  log(level: LogLevel, message:any): void {
      logger[level]({
        level,
        message
      })
    
  }
  startTimer(): string {
    // const pointer = v4uuid();
    // this.profilerMap[pointer] = this.logger?.startTimer();
    // return pointer;
    return "";
  }

  endTimer(level: LogLevel, pointer:string, message =""): void {
    // this.profilerMap[pointer]?.done({
    //   level,
    //   message
    // })
    // delete this.profilerMap[pointer];

  }

}