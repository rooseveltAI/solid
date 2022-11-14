import React from 'react'
import NextLink from 'next/link'
import {
  Avatar,
  chakra,
  Image,
  Icon,
  Text,
  Stack,
  Container,
  Button,
  Link,
  IconButton,
  Grid,
  Divider
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

          audio {
            background: none;
            outline: none;
            color: #fff;
            width: 100%;
          }
          audio::-webkit-media-controls-enclosure {
            background: none;
            outline: none;
            color: #fff;
            width: 100%;
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
          {/* Background */}
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
            <Stack h="100%">
              <Stack
                px={{ base: '', md: '24px' }}
                py={{ base: '', md: '24px' }}
              >
                <Image
                  src="/logo-green.svg"
                  alt="logo"
                  w={{ base: '', md: '124px' }}
                  pointerEvents="none"
                  userSelect="none"
                />
              </Stack>
              <Stack
                px={{ base: '', md: '16px' }}
                pt={{ base: '', md: '4px' }}
                pb={{ base: '', md: '12px' }}
              >
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="#BDC1C6"
                  fontWeight="500"
                  leftIcon={
                    <i
                      className="ri-home-3-line ri-xl"
                      style={{ marginRight: 4 }}
                    />
                  }
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="#BDC1C6"
                  fontWeight="500"
                  leftIcon={
                    <i
                      className="ri-heart-3-line ri-xl"
                      style={{ marginRight: 4 }}
                    />
                  }
                >
                  Favourites
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="#BDC1C6"
                  fontWeight="500"
                  leftIcon={
                    <i
                      className="ri-rss-line ri-xl"
                      style={{ marginRight: 4 }}
                    />
                  }
                >
                  Subscriptions
                </Button>
              </Stack>
              <Divider
                border="0.5px solid"
                borderColor="rgba(255, 255, 255, 12%)"
              />
              <Stack
                px={{ base: '', md: '24px' }}
                py={{ base: '', md: '24px' }}
              >
                <Button variant="unstyled">
                  <Image
                    src="/join-sfm.svg"
                    alt="logo"
                    w={{ base: '', md: '180px' }}
                    pointerEvents="none"
                    userSelect="none"
                  />
                </Button>
              </Stack>
            </Stack>
          </chakra.aside>

          {/* Topbar */}
          <chakra.nav pos="relative" maxW="100%" gridArea="topbar" zIndex="2">
            <Stack
              direction="row"
              py={{ base: '12px', md: '16px' }}
              pl={{ base: '8px', md: '12px' }}
              pr={{ base: '8px', lg: '15rem' }}
              pos="fixed"
              justify="flex-end"
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

              {/* <Account
                user={props.user}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="open account settings"
                rounded="full"
                leftIcon={<Avatar name={''} size="sm" />}
                rightIcon={<i className="ri-more-fill" />}
              /> */}
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
              h="auto"
              px={{ base: '', md: '24px' }}
              py={{ base: '', md: '16px' }}
              direction="row"
              spacing={{ base: '', md: '24px' }}
            >
              <Image
                src="/images/profile.png"
                bgColor="#282829"
                rounded="10px"
                boxShadow="5px 10px 24px rgba(0, 0, 0, 0.15)"
                // rounded="16px"
                boxSize="80px"
                objectFit="contain"
                alt="Image"
              />
              <Stack w="100%">
                <Text>
                  <chakra.span fontWeight="800" mr="2">
                    01
                  </chakra.span>
                  Bitcoin, Crypto, and escape from the Boxed economy{' '}
                </Text>
                <audio controls src="" />
              </Stack>

              {/* media player */}
            </Stack>
          </chakra.footer>
        </Grid>
      </AuthContext.Provider>
    </>
  )
}

export default Layout
