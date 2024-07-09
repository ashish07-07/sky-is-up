import { WebSocket, WebSocketServer } from "ws";
import http from "http";

const server = http.createServer();

const wss = new WebSocketServer({ server });

wss.on("connection", function (ws: WebSocket) {
  console.log(`a client connected to me here `);

  ws.on("message", function () {
    console.log("a message in sent from client  from client to a server ");
  });
});

server.listen(8080, function () {
  console.log(`server listening on port 8000`);
});
