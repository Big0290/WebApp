/// make an article card component with chakra ui and redwood

import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const ArticleCard = ({ article }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  return (
    <Box
      bg={bg}
      alignContent={'center'}
      w={' 90%'}
      h={'auto'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
    >
      <Image h={'210px'} w={'full'} src={article.image} objectFit={'cover'} />
      <Stack pt={10} align={'center'}>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {article.title}
        </Heading>
        <Text color={'gray.500'}>{article.author}</Text>
        <Text color={'gray.500'}>{article.publishedAt}</Text>
      </Stack>
      <Stack pt={10} align={'center'}>
        <Text color={'gray.500'}>{article.description}</Text>
      </Stack>
      <Stack pt={10} align={'center'}>
        <Text align={'center'} color={'gray.500'}>
          {article.content}{' '}
        </Text>
      </Stack>
      <Stack pt={10} align={'center'}>
        <Box border={'color:black'}>
          <Text align={'center'} color={'gray.500'}>
            {article.url} - {article.source}
            <br /> {article.category} - {article.language} -{article.country}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default ArticleCard
