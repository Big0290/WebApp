import { chats, chat, createChat, updateChat, deleteChat } from './chats'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('chats', () => {
  scenario('returns all chats', async (scenario) => {
    const result = await chats()

    expect(result.length).toEqual(Object.keys(scenario.chat).length)
  })

  scenario('returns a single chat', async (scenario) => {
    const result = await chat({ id: scenario.chat.one.id })

    expect(result).toEqual(scenario.chat.one)
  })

  scenario('creates a chat', async (scenario) => {
    const result = await createChat({
      input: { chatRoomId: scenario.chat.two.chatRoomId },
    })

    expect(result.chatRoomId).toEqual(scenario.chat.two.chatRoomId)
  })

  scenario('updates a chat', async (scenario) => {
    const original = await chat({ id: scenario.chat.one.id })
    const result = await updateChat({
      id: original.id,
      input: { chatRoomId: scenario.chat.two.chatRoomId },
    })

    expect(result.chatRoomId).toEqual(scenario.chat.two.chatRoomId)
  })

  scenario('deletes a chat', async (scenario) => {
    const original = await deleteChat({ id: scenario.chat.one.id })
    const result = await chat({ id: original.id })

    expect(result).toEqual(null)
  })
})
