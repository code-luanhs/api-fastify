import { CreateTaskSchema } from "#schemas/tasks.js";
import { taskService } from "#services/tasks.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(3)
}) satisfies z.ZodType<CreateTaskSchema>;

async function controller(req: FastifyRequest, reply: FastifyReply) {
    const data = schema.parse(req.body);
    const newTask = await taskService.create(data);

    return reply.status(StatusCodes.CREATED).send({
        mmessage: "Task created successfully!",
        taks: newTask
    });
}

export { controller as createTaskController };