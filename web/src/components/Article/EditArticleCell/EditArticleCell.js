import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ArticleForm from 'src/components/Article/ArticleForm'

export const QUERY = gql`
  query EditArticleById($id: String!) {
    article: article(id: $id) {
      id
      title
      creation
      updateOn
      body
      userId
    }
  }
`
const UPDATE_ARTICLE_MUTATION = gql`
  mutation UpdateArticleMutation($id: String!, $input: UpdateArticleInput!) {
    updateArticle(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ article }) => {
  const [updateArticle, { loading, error }] = useMutation(
    UPDATE_ARTICLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Article updated')
        navigate(routes.articles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateArticle({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Article {article?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArticleForm
          article={article}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
