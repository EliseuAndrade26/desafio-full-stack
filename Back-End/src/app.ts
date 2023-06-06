import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express, { Application } from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleErrors } from "./errors/AppErrors";
import { contactsRoutes } from "./routes/contacts.routes";
import { loginRoutes } from "./routes/login.routes";

const app: Application = express();
app.use(cors());

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/contacts", contactsRoutes);

app.use("/login", loginRoutes);

app.use(handleErrors);

export default app;
