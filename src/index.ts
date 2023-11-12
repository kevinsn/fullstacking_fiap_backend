import "reflect-metadata";
import * as express from "express";
import { AppDataSource } from "./data-source";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import routes from "./routes";

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(routes);
    app.listen(3333);
});