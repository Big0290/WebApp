export const schema = gql`
  type Album {
    id: String!
    creation: DateTime
    update: DateTime
    photos: [Photo]!
    Profile: Profile
    profileId: String
  }

  type Query {
    albums: [Album!]! @requireAuth
    album(id: String!): Album @requireAuth
  }

  input CreateAlbumInput {
    creation: DateTime
    update: DateTime
    profileId: String
  }

  input UpdateAlbumInput {
    creation: DateTime
    update: DateTime
    profileId: String
  }

  type Mutation {
    createAlbum(input: CreateAlbumInput!): Album! @requireAuth
    updateAlbum(id: String!, input: UpdateAlbumInput!): Album! @requireAuth
    deleteAlbum(id: String!): Album! @requireAuth
  }
`
