import { photos, photo, createPhoto, updatePhoto, deletePhoto } from './photos'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('photos', () => {
  scenario('returns all photos', async (scenario) => {
    const result = await photos()

    expect(result.length).toEqual(Object.keys(scenario.photo).length)
  })

  scenario('returns a single photo', async (scenario) => {
    const result = await photo({ id: scenario.photo.one.id })

    expect(result).toEqual(scenario.photo.one)
  })

  scenario('creates a photo', async () => {
    const result = await createPhoto({
      input: { fileName: 'String', uploadOn: '2023-03-27T17:13:55.544Z' },
    })

    expect(result.fileName).toEqual('String')
    expect(result.uploadOn).toEqual(new Date('2023-03-27T17:13:55.544Z'))
  })

  scenario('updates a photo', async (scenario) => {
    const original = await photo({ id: scenario.photo.one.id })
    const result = await updatePhoto({
      id: original.id,
      input: { fileName: 'String2' },
    })

    expect(result.fileName).toEqual('String2')
  })

  scenario('deletes a photo', async (scenario) => {
    const original = await deletePhoto({ id: scenario.photo.one.id })
    const result = await photo({ id: original.id })

    expect(result).toEqual(null)
  })
})
