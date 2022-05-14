import express from "express"; // import express
import cookieParser from "cookie-parser"; // import cookie-parser
import logger from "morgan"; // import morgan
import dotenv from "dotenv"; // import dotenv

import { connect, disconnect } from "./src/configs/db.config.js";

import routes from "./src/routes/main.routes.js"; // import user route

const app = express(); // create express app

dotenv.config(); // load env variables

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api", routes);

// Connect database
connect();

// Disconnect database connection on server stop
process.on("SIGINT", async () => {
  await disconnect();
  process.exit(0);
});

export default app;
