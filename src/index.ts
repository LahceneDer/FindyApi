import express from "express";
import http from "http"
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import { connectDB } from "./config/db";
import Routes from "./routes/routes"

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(compression())
app.use(cors())

const server = http.createServer(app)

connectDB()

app.get('/', (req, res) => {
    res.send('hello')
})

app.use("/api", Routes)
app.use("/*", (req, res) => {
    res.send(' page not found')
})


server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});