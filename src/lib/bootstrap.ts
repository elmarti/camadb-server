import { Container } from "inversify";
import { ICamaServerConfig } from "../../interfaces/cama-server-config";
import { IServer } from "../../interfaces/server";
import { TYPES } from "../../types";

export function bootstrap(config: ICamaServerConfig) {
    const CamaDbServerContainer = new Container();
    CamaDbServerContainer.bind<ICamaServerConfig>(TYPES.CamaServerConfig).toConstantValue(config);
    CamaDbServerContainer.bind<IServer>(TYPES.Server).toFactory<IServer,[true]>((context: any) => {
        return (name) => {
            return context.container.get(TYPES.Server);
        };
    });
}
