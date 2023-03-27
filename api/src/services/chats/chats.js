import { db } from 'src/lib/db'

export const chats = () => {
  return db.chat.findMany()
}

export const chat = ({ id }) => {
  return db.chat.findUnique({
    where: { id },
  })
}

export const createChat = ({ input }) => {
  return db.chat.create({
    data: input,
  })
}

export const updateChat = ({ id, input }) => {
  return db.chat.update({
    data: input,
    where: { id },
  })
}

export const deleteChat = ({ id }) => {
  return db.chat.delete({
    where: { id },
  })
}

export const Chat = {
  text: (_obj, { root }) => {
    return db.chat.findUnique({ where: { id: root?.id } }).text()
  },
  chatRoom: (_obj, { root }) => {
    return db.chat.findUnique({ where: { id: root?.id } }).chatRoom()
  },
  photo: (_obj, { root }) => {
    return db.chat.findUnique({ where: { id: root?.id } }).photo()
  },
}
