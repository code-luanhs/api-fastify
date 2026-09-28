import { taskService } from "#services/tasks.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { notFoundTask } from "./helpers.js";
import { StatusCodes } from "http-status-codes";

interface DeleteRoute {
    Params: {
        id: string;
    }
}

async function controller(req: FastifyRequest<DeleteRoute>, reply: FastifyReply) {
    const { id } = req.params;
    const exists = await taskService.exists(id);

    if (!exists) {
        return notFoundTask(id, reply);
    }

    await taskService.delete(id);

    return reply.status(StatusCodes.OK).send({
        message: "Task deleted successfully"
    });
}

export { controller as deleteTaskController }
