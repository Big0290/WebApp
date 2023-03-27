import { db } from 'src/lib/db'

export const chatRooms = () => {
  return db.chatRoom.findMany()
}

export const chatRoom = ({ id }) => {
  return db.chatRoom.findUnique({
    where: { id },
  })
}

export const createChatRoom = ({ input }) => {
  return db.chatRoom.create({
    data: input,
  })
}

export const updateChatRoom = ({ id, input }) => {
  return db.chatRoom.update({
    data: input,
    where: { id },
  })
}

export const deleteChatRoom = ({ id }) => {
  return db.chatRoom.delete({
    where: { id },
  })
}

export const ChatRoom = {
  chatRoomMessages: (_obj, { root }) => {
    return db.chatRoom
      .findUnique({ where: { id: root?.id } })
      .chatRoomMessages()
  },
  Chats: (_obj, { root }) => {
    return db.chatRoom.findUnique({ where: { id: root?.id } }).Chats()
  },
}
