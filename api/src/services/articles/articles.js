import { db } from 'src/lib/db'

export const articles = () => {
  return db.article.findMany({ orderBy: { creation: 'desc' } })
}

export const article = ({ id }) => {
  return db.article.findUnique({
    where: { id },
  })
}

export const createArticle = ({ input }) => {
  return db.article.create({
    data: input,
  })
}

export const updateArticle = ({ id, input }) => {
  return db.article.update({
    data: input,
    where: { id },
  })
}

export const deleteArticle = ({ id }) => {
  return db.article.delete({
    where: { id },
  })
}

export const Article = {
  tags: (_obj, { root }) => {
    return db.article.findUnique({ where: { id: root?.id } }).tags()
  },
  author: (_obj, { root }) => {
    return db.article.findUnique({ where: { id: root?.id } }).author()
  },
}
