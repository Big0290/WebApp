export const schema = gql`
  type Profile {
    id: String!
    story: String
    birthday: DateTime
    Album: [Album]!
    User: [User]!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: String!): Profile @requireAuth
  }

  input CreateProfileInput {
    story: String
    birthday: DateTime
  }

  input UpdateProfileInput {
    story: String
    birthday: DateTime
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: String!, input: UpdateProfileInput!): Profile!
      @requireAuth
    deleteProfile(id: String!): Profile! @requireAuth
  }
`
