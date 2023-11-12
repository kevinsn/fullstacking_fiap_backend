import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "chunee.db.elephantsql.com",
    port: 5432,
    username: "zuyhoeio",
    password: "4j5zogsN6iWtmVpeqeU-4dwPVaZ46aXK",
    database: "zuyhoeio",
    synchronize: true,
    logging: false,
    entities: [Tasks],
    migrations: [],
    subscribers: [],
})
