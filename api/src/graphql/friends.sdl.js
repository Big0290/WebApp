export const schema = gql`
  type Friend {
    id: String!
    friend: [User]!
  }

  type Query {
    friends: [Friend!]! @requireAuth
    friend(id: String!): Friend @requireAuth
  }

  input CreateFriendInput {
    id: String!
    friend: [String]!
  }

  input UpdateFriendInput {
    id: String
    friend: [String]
  }

  type Mutation {
    createFriend(input: CreateFriendInput!): Friend! @requireAuth
    updateFriend(id: String!, input: UpdateFriendInput!): Friend! @requireAuth
    deleteFriend(id: String!): Friend! @requireAuth
  }
`
