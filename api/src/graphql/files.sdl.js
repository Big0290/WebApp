export const schema = gql`
  type File {
    id: String!
    fileName: String!
    folder: Folder
    folderId: String
  }

  type Query {
    files: [File!]! @requireAuth
    file(id: String!): File @requireAuth
  }

  input CreateFileInput {
    fileName: String!
    folderId: String
  }

  input UpdateFileInput {
    fileName: String
    folderId: String
  }

  type Mutation {
    createFile(input: CreateFileInput!): File! @requireAuth
    updateFile(id: String!, input: UpdateFileInput!): File! @requireAuth
    deleteFile(id: String!): File! @requireAuth
  }
`
