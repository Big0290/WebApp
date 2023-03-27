export const schema = gql`
  type Article {
    id: String!
    title: String!
    creation: DateTime!
    updateOn: DateTime
    body: String
    tags: [Tag]!
    author: User!
    userId: String!
  }

  type Query {
    articles: [Article!]! @requireAuth
    article(id: String!): Article @requireAuth
  }

  input CreateArticleInput {
    title: String!
    creation: DateTime!
    updateOn: DateTime
    body: String
    userId: String!
  }

  input UpdateArticleInput {
    title: String
    creation: DateTime
    updateOn: DateTime
    body: String
    userId: String
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article! @requireAuth
    updateArticle(id: String!, input: UpdateArticleInput!): Article!
      @requireAuth
    deleteArticle(id: String!): Article! @requireAuth
  }
`
