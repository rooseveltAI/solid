import React from 'react'
import NextLink from 'next/link'
import {
  Avatar,
  chakra,
  Image,
  Icon,
  Stack,
  Container,
  Button,
  Link,
  IconButton
} from '@chakra-ui/react'
import { AuthContext } from 'hooks/auth'

import Account from 'components/account'

type AppLayoutProps = {
  children: React.ReactElement
  backButton?: { href: string; title: string }
  user: { id: string; fullName: string | null; email: string }
}
const Layout = ({ children, ...props }: AppLayoutProps) => {
  return (
    <AuthContext.Provider value={props.user}>
      <Container maxW="8xl" pos="relative">
        <chakra.nav pos="absolute" right="0" left="0" zIndex="2" w="100%">
          <Stack
            direction="row"
            align="center"
            spacing={{ base: '', md: '2rem' }}
            justify="space-between"
            pos="fixed"
            w="80%"
          >
            <Stack
              direction="row"
              align="center"
              spacing={{ base: '', md: '2rem' }}
            >
              <IconButton
                variant="unstyled"
                // colorScheme="blue"
                pt={{ base: '', md: '0.5rem' }}
                color="white"
                aria-label="Menu"
                size="lg"
                fontWeight="400"
                icon={<i className="ri-menu-2-line ri-lg" />}
                // _hover={{ background: 'transparent' }}
              />
              <Image
                src="/solid-logo.svg"
                alt="logo"
                boxSize={124}
                pointerEvents="none"
                userSelect="none"
              />
            </Stack>

            <Account
              user={props.user}
              variant="ghost"
              colorScheme="whiteAlpha"
              aria-label="open account settings"
              rounded="full"
              leftIcon={<Avatar name={''} size="sm" />}
              rightIcon={<i className="ri-more-fill" />}
            />
          </Stack>
        </chakra.nav>
      </Container>

      <Container maxW="100%" p="0">
        {children}
      </Container>
    </AuthContext.Provider>
  )
}

export default Layout
