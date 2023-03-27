import { Link, routes } from '@redwoodjs/router'

import Articles from 'src/components/Article/Articles'

export const QUERY = gql`
  query FindArticles {
    articles {
      id
      title
      creation
      updateOn
      body
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No articles yet. '}
      <Link to={routes.newArticle()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ articles }) => {
  return <Articles articles={articles} />
}
