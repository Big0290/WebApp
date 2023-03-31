import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { format } from 'date-fns'

import { Link, routes } from '@redwoodjs/router'
// import Articles from 'src/components/Article/Articles'
export const QUERY = gql`
  query FindArticles {
    articles {
      id
      title
      creation
      updateOn
      body
      userId
      author {
        id
        email
      }
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

const Articles = ({ articles }) => {
  return (
    <box minW={'full'} my={'md'}>
      <Stack align={'center'} flex={'center'} my={'md'} mx={'lg'} minW={'full'}>
        <Image
          src={
            'https://res.cloudinary.com/dkedckjae/image/upload/f_auto,o_85,q_60/v1680218891/JoMorand/IMG_1389_v4502p.jpg'
          }
          alt={'logo'}
          w={'full'}
          h={'15rem'}
          borderRadius={'full'}
        />
        <Heading margin={'-2'}>
          <Text
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            fontWeight={900}
            fontStyle={'bold'}
            color={
              useColorMode().colorMode === 'light' ? 'my.gold' : 'my.darkgold'
            }
          >
            Whats News on{' '}
            <Text
              as={'span'}
              color={
                useColorMode().colorMode === 'light' ? 'my.darkgold' : 'my.gold'
              }
            >
              Jo Morand App
            </Text>
          </Text>
        </Heading>

        {articles.map((article) => (
          <Stack
            key={article.id}
            bg={
              useColorMode.colorMode === 'light'
                ? 'brand.lighttheme.bg.ctn'
                : 'brand.darktheme.bg.ctn'
            }
            boxShadow={'lg'}
            rounded={'lg'}
            align={'center'}
            textAlign={'center'}
            minW={'full'}
            my={'md'}
            py={12}
            px={6}
          >
            <Heading
              fontSize={'4xl'}
              fontFamily={'body'}
              color={
                useColorMode.colorMode === 'light'
                  ? 'brand.lighttheme.ftn'
                  : 'brand.darkthme.ftn'
              }
              p={2}
            >
              {article.title}
            </Heading>
            <Text fontWeight={600} mb={4}>
              {format(new Date(article.creation), 'MMMM dd yyyy h:mm a')}
            </Text>
            <Text fontWeight={600} mb={4}>
              {article.author.email}
            </Text>
            <Text textAlign={'center'} px={3} fontSize={'sm'} lineHeight={6}>
              {article.body}
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Button
                as={Link}
                to={routes.article({ id: article.id })}
                rounded={'full'}
                px={6}
                bg={
                  mode === 'light'
                    ? 'brand.lighttheme.bg.btn'
                    : 'brand.darktheme.bg.btn'
                }
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                View
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </box>
  )
}

// import { Link, routes } from '@redwoodjs/router'
