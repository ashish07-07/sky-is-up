import { WebSocket } from "ws";
interface roomdetails {
  type: string;
  name: string;
  college: string;
}
export class chatroom {
  private rooms: [{}] = [{}];

  createRoom(socket: WebSocket, roomie: roomdetails) {
    this.rooms.push(socket, roomie);

    console.log(this.rooms);
  }
}
