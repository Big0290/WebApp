import {
  articles,
  article,
  createArticle,
  updateArticle,
  deleteArticle,
} from './articles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('articles', () => {
  scenario('returns all articles', async (scenario) => {
    const result = await articles()

    expect(result.length).toEqual(Object.keys(scenario.article).length)
  })

  scenario('returns a single article', async (scenario) => {
    const result = await article({ id: scenario.article.one.id })

    expect(result).toEqual(scenario.article.one)
  })

  scenario('creates a article', async (scenario) => {
    const result = await createArticle({
      input: {
        title: 'String',
        creation: '2023-03-27T07:52:51.932Z',
        userId: scenario.article.two.userId,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.creation).toEqual(new Date('2023-03-27T07:52:51.932Z'))
    expect(result.userId).toEqual(scenario.article.two.userId)
  })

  scenario('updates a article', async (scenario) => {
    const original = await article({ id: scenario.article.one.id })
    const result = await updateArticle({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a article', async (scenario) => {
    const original = await deleteArticle({
      id: scenario.article.one.id,
    })
    const result = await article({ id: original.id })

    expect(result).toEqual(null)
  })
})
