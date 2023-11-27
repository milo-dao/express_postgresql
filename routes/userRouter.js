import * as express from "express";
import userController from "../controller/userController.js";

const userRouter = express.Router();
userRouter.get("/", userController.getUserList);
userRouter.post("/", userController.createUser);
userRouter.put("/", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
