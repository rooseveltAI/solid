import {
  Button,
  chakra,
  Container,
  Heading,
  Image,
  Stack,
  IconButton,
  Text
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import SignupModal from 'components/auth'

export default function Home() {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #000000;
          }

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

      <Container
        maxW="100%"
        p="0"
        bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/david-werbrouck-5GwLlb-_UYk-unsplash.jpg)"
        bgRepeat="no-repeat"
        bgSize="100%"
        h="100vh"
        bgPos="center"
      >
        <Container maxW="8xl">
          <chakra.nav>
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
          </chakra.nav>
        </Container>

        <Container maxW="8xl">
          <chakra.aside>
            <Stack
              w="48%"
              pt={{ base: '', md: '12rem' }}
              spacing={{ base: '', md: '2rem' }}
            >
              <Heading
                fontSize={{ base: '', md: '64px' }}
                // lineHeight={{ base: '', md: '84px,' }}
                textTransform="capitalize"
              >
                The platform for{' '}
                <chakra.strong
                  position="relative"
                  color="white"
                  display="inline-block"
                  borderBottom="3px solid white"
                  lineHeight="60px"
                >
                  uncensored
                </chakra.strong>{' '}
                media distribution
              </Heading>
              <Text>
                We change the world with uncensored alternative media <br /> —
                Share the world as it is through your eyes and get fan support
                via crypto
              </Text>
            </Stack>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              py={{ base: '', md: '2rem' }}
              spacing={{ base: '', md: '1rem' }}
            >
              <SignupModal>
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </SignupModal>
              <Button
                variant="unstyled"
                rounded="980px"
                _hover={{ background: 'rgba(255, 255, 255, 8%)' }}
                size="lg"
                transition="all .2s ease-out"
                px={{ base: '', md: '1.5rem' }}
              >
                Explore
              </Button>
            </Stack>
          </chakra.aside>
        </Container>
      </Container>
    </>
  )
}
