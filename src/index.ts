import dotenv from "dotenv";
import express from "express";
import compression from "compression";
import { connectDB } from "./config/db";
import Routes from "./routes/routes"

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(compression())

connectDB()

app.get('/', (req, res) => {
    res.send('hello')
})

app.use("/api", Routes)
app.use("/*", (req, res) => {
    res.send(' page not found')
})


app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});