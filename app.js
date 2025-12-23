import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Express",
  });
});

router.get("/health", async (_req, res, next) => {
  try {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    res.send(healthcheck);
  } catch (error) {
    next(error);
  }
});

app.listen(8000, () => console.log("Server running at 8001"));
