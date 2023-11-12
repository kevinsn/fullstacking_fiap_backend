import "reflect-metadata";
import * as express from "express";
import { AppDataSource } from "./data-source";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import routes from "./routes";




AppDataSource.initialize().then(async () => {
    const app = express();
    const allowedOrigins = ['http://localhost:3000'];
    cors({
        origin: function (origin, callback) {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
    app.use(cors());
    app.use(bodyParser.json());
    app.use(routes);
    app.listen(3333);
});