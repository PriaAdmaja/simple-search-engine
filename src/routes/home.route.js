import { Router } from "express";
import { dataReady, getData } from "../cache/index.js";

const homeRouter = Router();
homeRouter.get("/", (req, res) => {
  const { search } = req.query;
  const data = getData(search);

  if (search) {
    if (data && data.length > 0) {
      return res.status(200).json({
        status: 200,
        message: "Success",
        data,
      });
    }

    return res.status(404).json({
      status: 404,
      message: "Not found!",
      data: [],
    });
  }

  const welcomeMessage = {
    message: "Welcome to the New World!⛵",
    dataStatus: dataReady()
      ? "Data is ready!"
      : "Data is not ready. Please try reloading a few more times!",
    author: "M. Pria Admaja",
    exampleQuery: "/?search=malang",
  };

  res.status(200).json(welcomeMessage);
});

export default homeRouter;
