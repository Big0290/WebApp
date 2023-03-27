export const schema = gql`
  type Chat {
    id: String!
    text: [ChatMessage]!
    creation: DateTime!
    updadeOn: DateTime
    chatRoom: ChatRoom!
    photo: Photo
    chatRoomId: String!
    photoId: String
  }

  type Query {
    chats: [Chat!]! @requireAuth
    chat(id: String!): Chat @requireAuth
  }

  input CreateChatInput {
    creation: DateTime!
    updadeOn: DateTime
    chatRoomId: String!
    photoId: String
  }

  input UpdateChatInput {
    creation: DateTime
    updadeOn: DateTime
    chatRoomId: String
    photoId: String
  }

  type Mutation {
    createChat(input: CreateChatInput!): Chat! @requireAuth
    updateChat(id: String!, input: UpdateChatInput!): Chat! @requireAuth
    deleteChat(id: String!): Chat! @requireAuth
  }
`
