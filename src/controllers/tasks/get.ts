import { taskService } from "#services/tasks.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { notFoundTask } from "./helpers.js";

async function getAll(_: FastifyRequest, reply: FastifyReply) {
    const tasks = await taskService.getAll();

    return reply.status(StatusCodes.OK).send({
        message: `Tasks: ${tasks.length}`,
        tasks,
    });
}

interface GetBydIdRoute {
    Params: {
        id: string;
    }
}

async function getById(req: FastifyRequest<GetBydIdRoute>, reply: FastifyReply) {
    const { id } = req.params;
    const task = await taskService.getById(id);

    if (!task) {
        return notFoundTask(id, reply);
    }

    return reply.status(StatusCodes.OK).send(task);
}

export {
    getAll as getAllTaskController,
    getById as getByIdTaskController
};
