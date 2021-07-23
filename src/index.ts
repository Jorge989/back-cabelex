import express from "express";
import "./database/connect";
import "reflect-metadata";
import routes from "./routes";
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => console.log("🔥 Servidor rodando!"));
