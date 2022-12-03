import { inject, injectable } from "inversify";
import * as http from "http";
import { IServer } from "../../interfaces/server";
import { TYPES } from "../../types";
import { ICamaServerConfig } from "../../interfaces/cama-server-config";
import { ILogger } from "../../interfaces/logger.interface";
import { LogLevel } from "../../interfaces/log-level.enum";


@injectable()
class HttpServer implements IServer {
   private server: any
    constructor(
        @inject(TYPES.CamaServerConfig) private config: ICamaServerConfig,
        @inject(TYPES.LOGGER) private logger: ILogger
      ) {
        this.server = http.createServer((req, res) => {

        });
        this.server.listen(this.config.port, this.config.hostname, () => {
            this.logger.log(LogLevel.Info, `Server is running on http://${host}:${port}`);
        });
      }


}