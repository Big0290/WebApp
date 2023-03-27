export const schema = gql`
  type ChatMessage {
    id: String!
    chats: Chat
    creation: DateTime!
    ChatRoom: ChatRoom
    chatRoomId: String
    chatId: String
  }

  type Query {
    chatMessages: [ChatMessage!]! @requireAuth
    chatMessage(id: String!): ChatMessage @requireAuth
  }

  input CreateChatMessageInput {
    creation: DateTime!
    chatRoomId: String
    chatId: String
  }

  input UpdateChatMessageInput {
    creation: DateTime
    chatRoomId: String
    chatId: String
  }

  type Mutation {
    createChatMessage(input: CreateChatMessageInput!): ChatMessage! @requireAuth
    updateChatMessage(
      id: String!
      input: UpdateChatMessageInput!
    ): ChatMessage! @requireAuth
    deleteChatMessage(id: String!): ChatMessage! @requireAuth
  }
`
