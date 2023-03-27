import {
  chatRooms,
  chatRoom,
  createChatRoom,
  updateChatRoom,
  deleteChatRoom,
} from './chatRooms'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('chatRooms', () => {
  scenario('returns all chatRooms', async (scenario) => {
    const result = await chatRooms()

    expect(result.length).toEqual(Object.keys(scenario.chatRoom).length)
  })

  scenario('returns a single chatRoom', async (scenario) => {
    const result = await chatRoom({ id: scenario.chatRoom.one.id })

    expect(result).toEqual(scenario.chatRoom.one)
  })

  scenario('creates a chatRoom', async () => {
    const result = await createChatRoom({
      input: {
        chatRoomName: 'String9479202',
        lastActivity: '2023-03-27T17:14:32.162Z',
      },
    })

    expect(result.chatRoomName).toEqual('String9479202')
    expect(result.lastActivity).toEqual(new Date('2023-03-27T17:14:32.162Z'))
  })

  scenario('updates a chatRoom', async (scenario) => {
    const original = await chatRoom({
      id: scenario.chatRoom.one.id,
    })
    const result = await updateChatRoom({
      id: original.id,
      input: { chatRoomName: 'String25698272' },
    })

    expect(result.chatRoomName).toEqual('String25698272')
  })

  scenario('deletes a chatRoom', async (scenario) => {
    const original = await deleteChatRoom({
      id: scenario.chatRoom.one.id,
    })
    const result = await chatRoom({ id: original.id })

    expect(result).toEqual(null)
  })
})
