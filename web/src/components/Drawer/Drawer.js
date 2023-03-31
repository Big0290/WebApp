/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  DownloadIcon,
  DragHandleIcon,
  EmailIcon,
  HamburgerIcon,
  SettingsIcon,
  WarningIcon
} from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'

import { Link } from '@redwoodjs/router'
const MyDrawer = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const NavItem = (props) => {
    const { icon, children, link, ...rest } = props
    return (
      <Link to={link}>
        <Flex
          align="center"
          px="4"
          mx="2"
          rounded="md"
          py="3"
          cursor="pointer"
          color="whiteAlpha.700"
          _hover={{
            bg: 'blackAlpha.300',
            color: 'whiteAlpha.900',
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Flex
              w="6"
              h="6"
              mr="3"
              align="center"
              justify="center"
              rounded="md"
              transition=".15s ease"
              _groupHover={{
                bg: 'blackAlpha.400',
              }}
            >
              {icon}
            </Flex>
          )}
          {children}
        </Flex>
      </Link>
    )
  }

  return (
    <div>
      <div ref={btnRef} onClick={onOpen}>
        {children}
      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={
            useColorMode().colorMode === 'light'
              ? 'brand.bckgrnd.light'
              : 'brand.bckgrnd.dark'
          }
        >
          <DrawerCloseButton />
          <DrawerHeader>Jo Morand App</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <NavItem icon={<HamburgerIcon />} link="/">
              Home
            </NavItem>
            <NavItem icon={<ChatIcon />} link="/chat-room">
              Chat Room
            </NavItem>

            <NavItem icon={<CalendarIcon />}>Articles</NavItem>
            <NavItem icon={<DragHandleIcon />} link="/dashboard">
              Dashboard
            </NavItem>

            <NavItem icon={<EmailIcon />}>My Files</NavItem>
            <NavItem icon={<CheckIcon />}>My Tasks</NavItem>
            <NavItem icon={<DownloadIcon />}>Downloads</NavItem>
            <NavItem icon={<WarningIcon />}>Support</NavItem>
            <NavItem icon={<SettingsIcon />} link="/setting">
              Settings
            </NavItem>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default MyDrawer
