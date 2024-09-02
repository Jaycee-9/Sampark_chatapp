import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDb from "./database/index.js";
import { router } from "./routes/routes.js";
const PORT = 8000;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

Promise.all([connectToDb()])
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDb connection error: ${error.message}`);
  });
