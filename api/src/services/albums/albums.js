import { db } from 'src/lib/db'

export const albums = () => {
  return db.album.findMany()
}

export const album = ({ id }) => {
  return db.album.findUnique({
    where: { id },
  })
}

export const createAlbum = ({ input }) => {
  return db.album.create({
    data: input,
  })
}

export const updateAlbum = ({ id, input }) => {
  return db.album.update({
    data: input,
    where: { id },
  })
}

export const deleteAlbum = ({ id }) => {
  return db.album.delete({
    where: { id },
  })
}

export const Album = {
  photos: (_obj, { root }) => {
    return db.album.findUnique({ where: { id: root?.id } }).photos()
  },
  Profile: (_obj, { root }) => {
    return db.album.findUnique({ where: { id: root?.id } }).Profile()
  },
}
