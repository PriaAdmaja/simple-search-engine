import { Router } from "express";
import { dataReady, getData } from "../cache/index.js";

const homeRouter = Router();
homeRouter.get("/", (req, res) => {
  const { search } = req.query;
  const data = getData(search);

  const welcomeMessage = {
    msg: "Welcome to the New World!⛵",
    statusMessage: dataReady()
      ? "Data is ready!"
      : "Data is not ready. Please reload in several times again!",
    author: "M. Pria Admaja",
    ...(data && data.length > 0 && { data }),
  };

  res.json(welcomeMessage);
});

export default homeRouter;
