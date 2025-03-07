import { Router } from "express";
import { getData } from "../cache/index.js";

const masterRouter = Router();
masterRouter.use("/", (req, res) => {
  res.json({
    msg: "Welcome gaes",
    status: getData().length === 0 ? "Data is not ready!" : "Data is ready!",
    author: "M. Pria Admaja",
  });
});

export default masterRouter;
