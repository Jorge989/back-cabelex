import { createConnection } from "typeorm";

createConnection().then(() => console.log("🎲 banco conectado com sucesso"));
