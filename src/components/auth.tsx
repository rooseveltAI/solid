import React from 'react'
import {
  Button,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionFormControl = motion(FormControl)

type AuthContainerProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const AuthContainer = ({
  isOpen,
  onClose,
  children
}: AuthContainerProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset={useBreakpointValue({ base: 'slideInBottom', md: 'scale' })}
      size="xl"
      isCentered
    >
      <ModalOverlay
        bg="rgba(0, 0, 0, 84%)"
        backdropFilter="blur(2px)"
        opacity="0.98"
      />

      <ModalContent
        px={{ base: '', md: '4rem' }}
        rounded="0px"
        overflow="hidden"
        mb={{ base: '0', md: 0 }}
        pos={{ base: 'fixed', md: 'fixed' }}
        bottom={{ base: '0px', md: '0' }}
        background="rgba(0, 0, 0, 50%)"
        backdropFilter="blur(22px)"
      >
        <ModalHeader px={0} pt={4}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton
              size="sm"
              variant="unstyled"
              rounded="full"
              onClick={() => onClose()}
              aria-label="close-modal"
              _hover={{ bgColor: 'transparent' }}
              fontWeight="400"
              icon={<i className="ri-close-line ri-2x" />}
            />
          </Stack>
        </ModalHeader>

        <ModalBody px={2} pt={{ base: '', md: '24' }} pb={4}>
          <Stack textAlign="center">
            <Heading fontSize="24px" color="primary.50" fontWeight="589">
              Start Publishing Today
            </Heading>
            <Text
              py={{ base: '', md: '8' }}
              color="secondary.200"
              fontSize="15px"
              fontWeight="500"
              pointerEvents="none"
              userSelect="none"
            >
              No censorship • No creative control • Just freedom of speech
            </Text>
          </Stack>

          <Stack my={8} spacing={2}>
            {children}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

type AuthProps = {
  auth: (data: { title: string; desc: string; email: string }) => Promise<void>
}
export const AccountAuth = () => {
  const [isSignup, setIsSignup] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')

  return (
    <Stack
      as="form"
      pb={{ base: '', md: '12rem' }}
      spacing={{ base: '', md: '1rem' }}
    >
      <Stack pb={{ base: '', md: '1rem' }} spacing={{ base: '', md: '2rem' }}>
        <FormControl isRequired>
          <Input
            variant="flushed"
            type="text"
            name="title"
            placeholder="Publishing name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Input
            variant="flushed"
            type="text"
            name="desc"
            placeholder="Describe your media"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Input
            variant="flushed"
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
      </Stack>

      <Button variant="primary" size="lg" type="submit" fontWeight="500">
        <i className="ri-wallet-3-fill" style={{ marginRight: 12 }} />
        Conect Wallet
      </Button>
      <Button variant="unstyled" color="primary.50">
        What is a wallet?
      </Button>
    </Stack>
  )
}

type SignupProps = {
  children: React.ReactElement
}
const Auth = ({ children }: SignupProps) => {
  // const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => onOpen()
      })}

      <AuthContainer isOpen={isOpen} onClose={onClose}>
        <AccountAuth />
      </AuthContainer>
    </>
  )
}

export default Auth
