import express from "express";
import cors from "cors";
import "dotenv/config";

import { loadDBDataToCache } from "./src/cache/index.js";
import masterRouter from "./src/routes/index.js";

const PORT = process.env.PORT ?? 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(masterRouter);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Function to start the server
const startServer = async () => {
  try {
    console.log("Loading database data into cache...");
    await loadDBDataToCache();
    console.log("Cache loaded successfully.");

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Graceful Shutdown
    const shutdown = () => {
      console.log("Shutting down server...");
      server.close(() => {
        console.log("Server closed.");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();

export default app;
