import { inject, injectable } from "inversify";
import * as http2 from "http2";
import { IServer } from "../../interfaces/server";
import { TYPES } from "../../types";
import { ICamaServerConfig } from "../../interfaces/cama-server-config";
import { ILogger } from "../../interfaces/logger.interface";
import { LogLevel } from "../../interfaces/log-level.enum";


@injectable()
class HttpServer implements IServer {
   private server: http2.Http2Server;
    constructor(
        @inject(TYPES.CamaServerConfig) private config: ICamaServerConfig,
        @inject(TYPES.LOGGER) private logger: ILogger
      ) {
        this.server = http2.createServer();
        this.server.on('stream', (stream: http2.ServerHttp2Stream, headers: http2.IncomingHttpHeaders) => {

        });
        this.server.listen(this.config.port);
      }


}