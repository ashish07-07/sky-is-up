"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatroom = void 0;
class chatroom {
    constructor() {
        this.rooms = [{}];
    }
    createRoom(socket) {
        this.rooms.push(socket);
        console.log(this.rooms);
    }
}
exports.chatroom = chatroom;
