import { db } from 'src/lib/db'

export const chatMessages = () => {
  return db.chatMessage.findMany()
}

export const chatMessage = ({ id }) => {
  return db.chatMessage.findUnique({
    where: { id },
  })
}

export const createChatMessage = ({ input }) => {
  return db.chatMessage.create({
    data: input,
  })
}

export const updateChatMessage = ({ id, input }) => {
  return db.chatMessage.update({
    data: input,
    where: { id },
  })
}

export const deleteChatMessage = ({ id }) => {
  return db.chatMessage.delete({
    where: { id },
  })
}

export const ChatMessage = {
  chats: (_obj, { root }) => {
    return db.chatMessage.findUnique({ where: { id: root?.id } }).chats()
  },
  ChatRoom: (_obj, { root }) => {
    return db.chatMessage.findUnique({ where: { id: root?.id } }).ChatRoom()
  },
}
