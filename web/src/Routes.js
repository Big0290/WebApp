import { Route, Router, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={MainLayout}>
        <Set wrap={ScaffoldLayout} title="Articles" titleTo="articles" buttonLabel="New Article" buttonTo="newArticle">
          <Route path="/articles/new" page={ArticleNewArticlePage} name="newArticle" />
          <Route path="/articles/{id}/edit" page={ArticleEditArticlePage} name="editArticle" />
          <Route path="/articles/{id}" page={ArticleArticlePage} name="article" />
          <Route path="/articles" page={ArticleArticlesPage} name="articles" />
        </Set>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
