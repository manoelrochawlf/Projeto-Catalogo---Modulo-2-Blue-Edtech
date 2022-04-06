import express from "express";
import { routes } from "./src/routes/routes.js";
import path, { dirname } from "path"




let __dirname = path.resolve(path.dirname(""))

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(routes)




const port = 3000;
app.listen(port, () => console.log("Servidor rodando em http://localhost:300"));