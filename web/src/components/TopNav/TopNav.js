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
        bg:
          useColorMode().colorMode === 'light'
            ? 'brand.lighttheme.hver'
            : 'brand.darktheme.hver',
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
      <Box
        bg={
          useColorMode().colorMode === 'light'
            ? 'brand.lighttheme.bg.nav'
            : 'brand.darktheme.bg.nav'
        }
        px={4}
        borderBottom={'8px'}
        marginBottom={6}
        borderColor={
          useColorMode().colorMode === 'light'
            ? 'brand.lighttheme.border'
            : 'brand.darktheme.border'
        }
        boxShadow="lg"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NavLink href={'/'}>
            <Logo />
          </NavLink>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button
                onClick={toggleColorMode}
                bg={
                  useColorMode().colorMode === 'light'
                    ? 'brand.lighttheme.bg.btn'
                    : 'brand.darktheme.bg.btn'
                }
                _hover={
                  useColorMode().colorMode === 'light'
                    ? { bg: 'brand.lighttheme.hver' }
                    : { bg: 'brand.darktheme.hver' }
                }
              >
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
                      src={
                        currentUser?.avatarUrl || 'https://bit.ly/sage-adebayo'
                      }
                      alt="Avatar"
                    />
                  </MenuButton>
                </NavLink>
                <MenuList
                  alignItems={'center'}
                  bg={
                    useColorMode().colorMode === 'light'
                      ? 'brand.lighttheme.bg.nav'
                      : 'brand.darktheme.bg.nav'
                  }
                >
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        currentUser?.avatarUrl || 'https://bit.ly/sage-adebayo'
                      }
                      alt="Avatar"
                    />
                  </Center>
                  <br />
                  <Center>
                    <Box>
                      <Text>Hello,</Text>
                      <Box h={2}>
                        <Text fontWeight="bold">
                          {currentUser?.email || 'GUEST'}
                        </Text>
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
                      color={'darkjonquil'}
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
