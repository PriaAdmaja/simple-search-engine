import { Router } from "express";

import homeRouter from "./home.route.js";

const masterRouter = Router();
masterRouter.use("/", homeRouter);

export default masterRouter;
