export const schema = gql`
  type Photo {
    id: String!
    fileName: String!
    uploadOn: DateTime!
    album: Album
    Url: String
    albumId: String
    Chat: [Chat]!
  }

  type Query {
    photos: [Photo!]! @requireAuth
    photo(id: String!): Photo @requireAuth
  }

  input CreatePhotoInput {
    fileName: String!
    uploadOn: DateTime!
    Url: String
    albumId: String
  }

  input UpdatePhotoInput {
    fileName: String
    uploadOn: DateTime
    Url: String
    albumId: String
  }

  type Mutation {
    createPhoto(input: CreatePhotoInput!): Photo! @requireAuth
    updatePhoto(id: String!, input: UpdatePhotoInput!): Photo! @requireAuth
    deletePhoto(id: String!): Photo! @requireAuth
  }
`
