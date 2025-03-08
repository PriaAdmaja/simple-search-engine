import { Router } from "express";
import { dataReady, getData } from "../cache/index.js";

const homeRouter = Router();
homeRouter.get("/", (req, res) => {
  const { search } = req.query;
  const data = getData(search);

  if (search) {
    const searchResponse = {
      ...(data && data.length > 0
        ? { status: 200, message: "Success" }
        : { status: 404, message: "Not found!" }),
      data: data ?? [],
    };

    res.json(searchResponse);
    return;
  }

  const welcomeMessage = {
    message: "Welcome to the New World!⛵",
    dataStatus: dataReady()
      ? "Data is ready!"
      : "Data is not ready. Please try reloading a few more times!",
    author: "M. Pria Admaja",
    exampleQuery: "/?search=malang",
  };

  res.json(welcomeMessage);
});

export default homeRouter;
