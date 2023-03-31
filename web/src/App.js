import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'
import './index.css'
import './scaffold.css'
import theme from './theme/theme'

const App = () => {
  const extendedTheme = extendTheme({
    ...theme,
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('brand.lighttheme.bg.glb', 'brand.darktheme.bg.glb')(props),
          color: mode('brand.lighttheme.fnt', 'brand.darktheme.fnt')(props),
        },
      }),
    },
  })
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <ColorModeScript />
        <ChakraProvider theme={extendedTheme}>
          <AuthProvider>
            <RedwoodApolloProvider useAuth={useAuth}>
              <Routes />
            </RedwoodApolloProvider>
          </AuthProvider>
        </ChakraProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
