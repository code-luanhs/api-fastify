import { createTaskController } from "#controllers/tasks/create.js";
import { deleteTaskController } from "#controllers/tasks/delete.js";
import { getAllTaskController, getByIdTaskController } from "#controllers/tasks/get.js";
import { updateTaskController } from "#controllers/tasks/update.js";
import { defineRoutes } from "#functions/utils.js";

export default defineRoutes(app => {
    app.get("/", getAllTaskController);
    app.get("/:id", getByIdTaskController)
    app.post("/", createTaskController);
    app.patch("/:id", updateTaskController);
    app.delete("/:id", deleteTaskController);
});
