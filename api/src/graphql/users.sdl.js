export const schema = gql`
  type User {
    id: String!
    email: String!
    userName: String!
    creationDate: DateTime!
    profile: Profile
    myFolder: Folder
    articles: [Article]!
    friends: Friend
    profilesId: String
    friendsId: String
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    userName: String!
    creationDate: DateTime!
    profilesId: String
    friendsId: String
  }

  input UpdateUserInput {
    email: String
    userName: String
    creationDate: DateTime
    profilesId: String
    friendsId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
