import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Article/ArticlesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ARTICLE_MUTATION = gql`
  mutation DeleteArticleMutation($id: String!) {
    deleteArticle(id: $id) {
      id
    }
  }
`

const ArticlesList = ({ articles }) => {
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Article deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete article ' + id + '?')) {
      deleteArticle({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Creation</th>
            <th>Update on</th>
            <th>Body</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{truncate(article.id)}</td>
              <td>{truncate(article.title)}</td>
              <td>{timeTag(article.creation)}</td>
              <td>{timeTag(article.updateOn)}</td>
              <td>{truncate(article.body)}</td>
              <td>{truncate(article.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.article({ id: article.id })}
                    title={'Show article ' + article.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editArticle({ id: article.id })}
                    title={'Edit article ' + article.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete article ' + article.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(article.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArticlesList
