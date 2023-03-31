import { Grid, GridItem, Text } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/Article/ArticlesCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/*  make a grid with 2 columns */}
      <Grid templateColumns="repeat(6, 1fr)" gridRowGap={'15rem'}>
        <GridItem
          colSpan={4}
          padding={'xl'}
          margin={6}
          gap={6}
          marginBottom={'xl'}
        >
          <ArticlesCell />
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            fontSize={'xl'}
            fontWeight={600}
            align={'center'}
            textAlign={'center'}
            borderBottom={'4px'}
            borderColor={
              mode === 'light'
                ? 'brand.lighttheme.border'
                : 'brand.darktheme.border'
            }
          >
            Side bar
          </Text>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
