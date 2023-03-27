export const schema = gql`
  type Folder {
    id: String!
    owner: User!
    folderName: String!
    files: [File]!
    pathUrl: String!
    creation: DateTime
    userId: String!
  }

  type Query {
    folders: [Folder!]! @requireAuth
    folder(id: String!): Folder @requireAuth
  }

  input CreateFolderInput {
    folderName: String!
    pathUrl: String!
    creation: DateTime
    userId: String!
  }

  input UpdateFolderInput {
    folderName: String
    pathUrl: String
    creation: DateTime
    userId: String
  }

  type Mutation {
    createFolder(input: CreateFolderInput!): Folder! @requireAuth
    updateFolder(id: String!, input: UpdateFolderInput!): Folder! @requireAuth
    deleteFolder(id: String!): Folder! @requireAuth
  }
`
