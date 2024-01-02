import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json);
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

const port = 3000; 

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});