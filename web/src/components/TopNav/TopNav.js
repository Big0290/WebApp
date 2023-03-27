/* eslint-disable no-unused-vars */
import React from 'react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
// import { Logo } from '@choc-ui/logo'

import { useAuth } from '../../auth'
import AuthPortal from '../AuthPortal/AuthPortal'
import MyDrawer from '../Drawer/Drawer'

const logo =
  'https://res.cloudinary.com/dkedckjae/image/upload/v1665855254/JoMorand/Logo_cwudvc.png'

const Logo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MyDrawer>
        <Image
          boxSize="50px"
          borderRadius="full"
          src={logo}
          alt="logo"
          onClick={onOpen}
        />
      </MyDrawer>
    </>
  )
}

const Nav = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const { isAuthenticated, logOut } = useAuth()

  const NavLink = ({ children, customRef }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  )

  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure
  const currentUser = useAuth().currentUser

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NavLink href={'/'}>
            <Logo />
          </NavLink>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <NavLink>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={2}
                  >
                    <Avatar
                      size={'sm'}
                      src="https://res.cloudinary.com/dkedckjae/image/upload/v1665854747/JoMorand/Logo1389_zlswkk.jpg"
                      alt="Avatar"
                    />
                  </MenuButton>
                </NavLink>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src="https://res.cloudinary.com/dkedckjae/image/upload/v1665854747/JoMorand/Logo1389_zlswkk.jpg"
                      alt="Avatar"
                    />
                  </Center>
                  <br />
                  <Center>
                    <Box>
                      <Text>Hello,</Text>
                      <Box h={2}>
                        <Text fontWeight="bold">{currentUser?.email}</Text>
                      </Box>
                    </Box>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link href="/profile">Your Profile</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/dashboard">dashboard</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/settings">Settings</Link>
                  </MenuItem>
                  {isAuthenticated ? (
                    <MenuItem
                      onClick={logOut}
                      color={'red.900'}
                      bg={'purple.500'}
                      fontWeight={'bold'}
                    >
                      Log Out
                    </MenuItem>
                  ) : (
                    <AuthPortal pointer="cursor" />
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  )
}

export default Nav
