import React from 'react'
// import Api from "libs/api";
import {
  Button,
  ButtonProps,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useBreakpointValue,
  useDisclosure,
  Flex,
  Image,
  Grid,
  Text,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Avatar,
  Textarea,
  FormHelperText
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import RecordingsList from './recordings-list'
import useRecorder from 'hooks/use-recorder'
import { UseRecorder } from 'types/recorder'

type AccountProps = ButtonProps & {
  children?: React.ReactNode
  user: { id: string; fullName: string | null; email: string }
}

const hasMedia = true

const Account = ({ children, user, ...props }: AccountProps) => {
  // const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [formValue, setFormValue] = React.useState({
    fullName: user?.fullName || '',
    email: user?.email || ''
  })

  const { recorderState, ...handlers }: UseRecorder = useRecorder()
  const { audio } = recorderState

  return (
    <Stack>
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

      <Button onClick={() => onOpen()} {...props}>
        {children}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        // motionPreset={useBreakpointValue({
        //   base: 'slideInBottom',
        //   md: 'scale'
        // })}
      >
        <DrawerOverlay
          bg="rgba(0, 0, 0, 12%)"
          backdropFilter="blur(2px)"
          opacity="0.98"
        />
        <DrawerContent
          px={6}
          rounded="0px"
          overflow="hidden"
          background="rgba(0, 0, 0, 80%)"
          backdropFilter="blur(22px)"
        >
          <DrawerHeader px={0} pt={4}>
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
          </DrawerHeader>
          {/* Tabs */}
          <Tabs p="0" m="0" overflowY="scroll">
            <TabList color="#fff" border="none">
              <Tab fontSize={{ base: '17px', md: '20px' }} fontWeight="600">
                Episodes
              </Tab>
              <Tab fontSize={{ base: '17px', md: '20px' }} fontWeight="600">
                About
              </Tab>
            </TabList>

            {/* Episodes */}
            <TabPanels>
              <TabPanel>
                {hasMedia ? (
                  <chakra.article>
                    <RecordingsList audio={audio} />
                  </chakra.article>
                ) : (
                  <Stack
                    direction="row"
                    spacing={{ base: '', md: '8px' }}
                    align="center"
                    justify="center"
                    py={{ base: '', md: '8rem' }}
                  >
                    <Text color="secondary.100">
                      You have no record or uploaded media yet
                    </Text>
                  </Stack>
                )}
              </TabPanel>

              {/* About */}
              <TabPanel h="100%">
                <DrawerBody px={0} pt={4} pb={4} h="100%">
                  <Stack as="form" w="full" spacing={5}>
                    <Avatar
                      size="xl"
                      bgColor="#434345"
                      icon={
                        <Image
                          src="/icons/avatar.svg"
                          alt="avatar"
                          boxSize="80%"
                          pos="absolute"
                          bottom="0"
                          pointerEvents="none"
                          userSelect="none"
                        />
                      }
                    />

                    <Stack
                      pb={{ base: '', md: '1rem' }}
                      spacing={{ base: '', md: '1rem' }}
                    >
                      <FormControl isRequired>
                        <Input
                          variant="flushed"
                          type="text"
                          name="title"
                          value="The Exit"
                          placeholder="Publishing name"
                        />
                      </FormControl>

                      <FormControl>
                        <Textarea
                          variant="flushed"
                          value="This is the exit, a podcast about Tech | Startups | Crypto | and the rise of new cultures"
                          placeholder="Describe your media"
                        />
                      </FormControl>

                      <FormControl>
                        <Input
                          variant="flushed"
                          type="email"
                          name="email"
                          placeholder="Email (optional)"
                        />
                      </FormControl>

                      <FormControl>
                        <Input
                          variant="flushed"
                          type="text"
                          name="adress"
                          value="0xFD083DdbB20d92450143f5b89fbafddB7C557992"
                          placeholder="Email (optional)"
                          isDisabled
                        />
                        <FormHelperText color="secondary.200" fontSize="xs">
                          Support from fans will go this address
                        </FormHelperText>
                      </FormControl>

                      <FormControl>
                        <Input
                          variant="flushed"
                          type="text"
                          name="adress"
                          value="solidfm.app/the-exit"
                          placeholder="Email (optional)"
                          isReadOnly
                        />
                        <FormHelperText color="secondary.200" fontSize="xs">
                          Share your podcast
                        </FormHelperText>
                      </FormControl>
                    </Stack>

                    <FormControl>
                      <Stack
                        bg="linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)),url('/images/solid-studio.webp')"
                        bgRepeat="no-repeat"
                        bgSize="100%"
                        h="200px"
                        rounded="10px"
                      />
                      <FormHelperText color="secondary.200" fontSize="xs">
                        Podcast Cover
                      </FormHelperText>
                    </FormControl>

                    <Button
                      variant="unstyled"
                      alignSelf="flex-start"
                      textDecoration="underline"
                      textTransform="capitalize"
                    >
                      Link my socials
                    </Button>

                    <chakra.div pt={6} textAlign="left">
                      <Button type="submit" variant="primary">
                        Save changes
                      </Button>
                    </chakra.div>
                  </Stack>
                </DrawerBody>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
}

export default Account
