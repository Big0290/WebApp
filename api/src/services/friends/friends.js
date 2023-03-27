import { db } from 'src/lib/db'

export const friends = () => {
  return db.friend.findMany()
}

export const friend = ({ id }) => {
  return db.friend.findUnique({
    where: { id },
  })
}

export const createFriend = ({ input }) => {
  return db.friend.create({
    data: input,
  })
}

export const updateFriend = ({ id, input }) => {
  return db.friend.update({
    data: input,
    where: { id },
  })
}

export const deleteFriend = ({ id }) => {
  return db.friend.delete({
    where: { id },
  })
}

export const Friend = {
  friend: (_obj, { root }) => {
    return db.friend.findUnique({ where: { id: root?.id } }).friend()
  },
}
