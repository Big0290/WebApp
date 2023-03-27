import { db } from 'src/lib/db'

export const photos = () => {
  return db.photo.findMany()
}

export const photo = ({ id }) => {
  return db.photo.findUnique({
    where: { id },
  })
}

export const createPhoto = ({ input }) => {
  return db.photo.create({
    data: input,
  })
}

export const updatePhoto = ({ id, input }) => {
  return db.photo.update({
    data: input,
    where: { id },
  })
}

export const deletePhoto = ({ id }) => {
  return db.photo.delete({
    where: { id },
  })
}

export const Photo = {
  album: (_obj, { root }) => {
    return db.photo.findUnique({ where: { id: root?.id } }).album()
  },
  Chat: (_obj, { root }) => {
    return db.photo.findUnique({ where: { id: root?.id } }).Chat()
  },
}
