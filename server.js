import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import requestLogger from "./middlewares/requestLogger.js";
import evaluationRouter from "./routes/evaluationRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
const server = express();

// env variables
dotenv.config();

// middlewares
server.use(cors());
server.use(express.json());

// request logging
server.use(requestLogger);

// errorHandling
server.use(errorHandler);

// evaluation route
server.use(evaluationRouter);

const PORT = process.env.PORT || 8002;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
