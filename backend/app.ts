import cors from "cors";
import express from "express";
import http from "http";
import WebSocket from "ws";
import controller from "./src/controlers/booksList";
import bookRoutes from "./src/routes/bookRoutes";
import criticsRoutes from "./src/routes/criticRoutes";
import { UserRouter } from "./src/routes/userRoutes";
import cookieParser from 'cookie-parser';
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send("Books WebSocket");
});

setInterval(() => {
  const update = {
    type: "new_book",
    data: controller.generateRandomBook(),
  };

  wss.clients.forEach((client) => {
    if (client.readyState == WebSocket.OPEN) {
      client.send(JSON.stringify(update));
    }
  });
}, 20000);
//app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5000"],
    credentials: true
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", bookRoutes);
app.use("/api", criticsRoutes);
app.use("/auth", UserRouter);

const PORT = process.env.PORT || 3000;
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}...`);
// });
const dbURI =
  "mongodb+srv://engelinesie:Bubulinuta1!@cluster0.z77bt9z.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose
  .connect(dbURI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`DB conn established. Server is running on port ${PORT}...`);
    });
  })
  .catch((error: any) => console.log(error));

export default app;
