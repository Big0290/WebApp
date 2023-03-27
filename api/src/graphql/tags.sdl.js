export const schema = gql`
  type Tag {
    id: String!
    name: String
    articles: [Article]!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: String!): Tag @requireAuth
  }

  input CreateTagInput {
    name: String
  }

  input UpdateTagInput {
    name: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: String!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: String!): Tag! @requireAuth
  }
`
