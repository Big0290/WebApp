export const schema = gql`
  type ChatRoom {
    id: String!
    chatRoomName: String!
    lastActivity: DateTime!
    creation: DateTime!
    chatRoomMessages: [ChatMessage]!
    Chats: [Chat]!
  }

  type Query {
    chatRooms: [ChatRoom!]! @requireAuth
    chatRoom(id: String!): ChatRoom @requireAuth
  }

  input CreateChatRoomInput {
    chatRoomName: String!
    lastActivity: DateTime!
    creation: DateTime!
  }

  input UpdateChatRoomInput {
    chatRoomName: String
    lastActivity: DateTime
    creation: DateTime
  }

  type Mutation {
    createChatRoom(input: CreateChatRoomInput!): ChatRoom! @requireAuth
    updateChatRoom(id: String!, input: UpdateChatRoomInput!): ChatRoom!
      @requireAuth
    deleteChatRoom(id: String!): ChatRoom! @requireAuth
  }
`
