import { useEffect } from 'react'

import {
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { Auth } from '@supabase/ui'

import { navigate } from '@redwoodjs/router'

import { useAuth } from '../../auth'

const AuthPortal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { client, isAuthenticated } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      onClose()
      navigate('/')
    }
  }, [isOpen])

  client.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') {
      onClose()
    } else if (event === 'SIGNED_OUT') {
      onClose()
      navigate('/')
    }
  })

  return (
    <>
      <MenuItem onClick={onOpen}>Log In</MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Auth supabaseClient={client} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthPortal
