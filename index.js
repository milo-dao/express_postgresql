import * as dotenv from "dotenv";
dotenv.config(); //must have, to read env
import userRouter from "./routes/userRouter.js";

import express from "express";

const app = express();
app.use(express.json());

//middleware parses incoming requests to JSON payloads

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Listen on port", port);
});

app.use("/users", userRouter);
