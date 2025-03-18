import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.listen(process.env.PORT, () => {
  console.log(`erver is running on port ${process.env.PORT}`);
});
