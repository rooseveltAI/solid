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
  IconButton,
  Grid
} from '@chakra-ui/react'
import { AuthContext } from 'hooks/auth'
import { Global, css } from '@emotion/react'

import Account from 'components/account'

type AppLayoutProps = {
  children: React.ReactElement
  backButton?: { href: string; title: string }
  user: { id: string; fullName: string | null; email: string }
}
const Layout = ({ children, ...props }: AppLayoutProps) => {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: var(--chakra-colors-gray-600);
            color: #fff;
          }

          ::-webkit-scrollbar {
            width: 0px;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            backgroundcolor: rgba(255, 255, 255, 12%);
          }
        `}
      />

      <AuthContext.Provider value={props.user}>
        <Grid
          templateColumns="210px 1fr"
          templateRows="68px 1fr 100px"
          templateAreas={{
            base: `"topbar topbar" "main main" "footer footer"`,
            sm: `"topbar topbar" "main main" "footer footer"`,
            lg: `"sidebar topbar" "sidebar main" "footer footer" `
          }}
          minH="100vh"
        >
          <Stack
            bgImage="url(/images/bg-gradient.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="bottom"
            pos="fixed"
            top="0"
            bottom="0"
            left="0"
            right="0"
            zIndex="-2"
          />
          {/* Sidebar */}
          <chakra.aside
            h="100vh"
            w="210px"
            pos="fixed"
            gridArea="sidebar"
            bg="rgba(0, 0, 0, 0.24)"
            backdropFilter="blur(27px)"
            display={{ base: 'none', sm: 'none', lg: 'block' }}
          >
            <Stack h="100%"></Stack>
          </chakra.aside>

          {/* Topbar */}
          <chakra.nav pos="relative" maxW="100%" gridArea="topbar">
            <Stack
              direction="row"
              py={{ base: '12px', md: '12px' }}
              pl={{ base: '8px', md: '12px' }}
              pr={{ base: '8px', lg: '14rem' }}
              pos="fixed"
              justify="space-between"
              w="full"
              align="center"
              bg="rgba(0, 0, 0, 0.8)"
              backdropFilter="blur(27px)"
            >
              <Button
                variant="primary"
                leftIcon={<i className="ri-wallet-3-fill" />}
                alignSelf="flex-end"
              >
                Connect
              </Button>

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

          {/* Main */}
          <Container maxW="100%" p="0" gridArea="main">
            {children}
          </Container>

          {/* Footer */}
          <chakra.footer
            pos="fixed"
            bottom="0"
            left="0"
            right="0"
            gridArea="footer"
            p="12px"
            bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 87.8%)"
          >
            <Stack
              bgColor="rgba(22, 26, 29, 90%)"
              backdropFilter="blur(27px)"
              rounded="12px"
              w="100%"
              h="100px"
            ></Stack>
          </chakra.footer>
        </Grid>
      </AuthContext.Provider>
    </>
  )
}

export default Layout
