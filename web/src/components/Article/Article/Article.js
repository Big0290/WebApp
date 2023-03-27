import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ARTICLE_MUTATION = gql`
  mutation DeleteArticleMutation($id: String!) {
    deleteArticle(id: $id) {
      id
    }
  }
`

const Article = ({ article }) => {
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Article deleted')
      navigate(routes.articles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete article ' + id + '?')) {
      deleteArticle({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Article {article.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{article.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{article.title}</td>
            </tr>
            <tr>
              <th>Creation</th>
              <td>{timeTag(article.creation)}</td>
            </tr>
            <tr>
              <th>Update on</th>
              <td>{timeTag(article.updateOn)}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{article.body}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{article.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editArticle({ id: article.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(article.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Article
