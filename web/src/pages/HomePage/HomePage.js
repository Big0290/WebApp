import { Box } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import ArticleCard from 'src/components/ArticleCard/ArticleCard'

const HomePage = () => {
  const articles = [
    {
      title: 'RedwoodJS',
      image:
        'https://res.cloudinary.com/dkedckjae/image/upload/v1665855254/JoMorand/Logo_cwudvc.png',
      author: 'Jo Morand',
      publishedAt: '2021-06-01',
      description: 'RedwoodJS is a full-stack framework for the Jamstack.',
      content: `RedwoodJS is a full-stack framework for the Jamstack. It combines the best of React, GraphQL, and Prisma to make building full-stack web apps a breeze. RedwoodJS is a full-stack framework for the Jamstack. It  to make building full-stack web apps a breeze. RedwoodJS is a full.`,
      url: 'https://redwoodjs.com/',
      source: 'redwoodjs.com',
      country: 'us',
      category: 'technology',
      language: 'en',
      id: 'redwoodjs-com',
    },
  ]
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box
        alignContent={'center'}
        w={' 90%'}
        h={'auto'}
        p={6}
        overflow={'hidden'}
      >
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </Box>
    </>
  )
}

export default HomePage
