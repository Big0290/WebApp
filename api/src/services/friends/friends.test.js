import { friends, friend, deleteFriend } from './friends'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('friends', () => {
  scenario('returns all friends', async (scenario) => {
    const result = await friends()

    expect(result.length).toEqual(Object.keys(scenario.friend).length)
  })

  scenario('returns a single friend', async (scenario) => {
    const result = await friend({ id: scenario.friend.one.id })

    expect(result).toEqual(scenario.friend.one)
  })

  scenario('deletes a friend', async (scenario) => {
    const original = await deleteFriend({
      id: scenario.friend.one.id,
    })
    const result = await friend({ id: original.id })

    expect(result).toEqual(null)
  })
})
