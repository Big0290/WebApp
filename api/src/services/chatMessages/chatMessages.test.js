import { chatMessages, chatMessage, deleteChatMessage } from './chatMessages'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('chatMessages', () => {
  scenario('returns all chatMessages', async (scenario) => {
    const result = await chatMessages()

    expect(result.length).toEqual(Object.keys(scenario.chatMessage).length)
  })

  scenario('returns a single chatMessage', async (scenario) => {
    const result = await chatMessage({ id: scenario.chatMessage.one.id })

    expect(result).toEqual(scenario.chatMessage.one)
  })

  scenario('deletes a chatMessage', async (scenario) => {
    const original = await deleteChatMessage({
      id: scenario.chatMessage.one.id,
    })
    const result = await chatMessage({ id: original.id })

    expect(result).toEqual(null)
  })
})
