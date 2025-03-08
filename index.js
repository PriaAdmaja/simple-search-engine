import express from "express";
import cors from "cors";
import "dotenv/config";

import { loadDBDataToCache } from "./src/cache/index.js";
import masterRouter from "./src/routes/index.js";

const PORT = 8000;

await loadDBDataToCache();

const app = express();
app.use(cors());
app.use(express.json());

app.use(masterRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
