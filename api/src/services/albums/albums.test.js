import { albums, album, deleteAlbum } from './albums'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('albums', () => {
  scenario('returns all albums', async (scenario) => {
    const result = await albums()

    expect(result.length).toEqual(Object.keys(scenario.album).length)
  })

  scenario('returns a single album', async (scenario) => {
    const result = await album({ id: scenario.album.one.id })

    expect(result).toEqual(scenario.album.one)
  })

  scenario('deletes a album', async (scenario) => {
    const original = await deleteAlbum({ id: scenario.album.one.id })
    const result = await album({ id: original.id })

    expect(result).toEqual(null)
  })
})
