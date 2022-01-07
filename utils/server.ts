import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "../routes"

export function createServer() {
    const app = express();

    app.use(cors());
    app.use(
        bodyParser.urlencoded({
            extended: false
        })
    );
    app.use(bodyParser.json());
    app.use(routes)

    return app
}
module.exports = createServer