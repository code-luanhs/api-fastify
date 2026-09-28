import { DefineRouterHnadler } from "#settings/types.js";
import { FastifyInstance } from "fastify";

export function defineRoutes(handler: DefineRouterHnadler) {
    return function(app: FastifyInstance, _: {}, done: Function) {
        handler(app);
        done();
    }
}
