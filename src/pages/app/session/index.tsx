import React from 'react'
import Layout from 'components/app.layout'

import {
  Center,
  chakra,
  Image,
  Heading,
  Stack,
  Text,
  Avatar,
  Button
} from '@chakra-ui/react'
import Session from './session'

const Page = ({ groups, user }: PageData) => {
  return (
    <Stack
      direction="row"
      minH="80vh"
      spacing={{ base: 0, md: 10 }}
      bgImage=" linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)),url('/images/solid-studio.webp')"
      bgRepeat="no-repeat"
      bgSize="100%"
      h="100vh"
      align="center"
      justify="center"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
    >
      {/* <Center h="70%" flexDirection="column"> */}
      <Stack spacing="4" align="center" justify="center">
        <Avatar
          size="2xl"
          bgColor="#434345"
          icon={
            <Image
              src="/icons/avatar.svg"
              alt="avatar"
              boxSize={100}
              pos="absolute"
              bottom="0"
              pointerEvents="none"
              userSelect="none"
            />
          }
        />
        <Heading mb={2} fontSize={{ base: '', md: '48px' }}>
          The Exit
        </Heading>
        <Session />
        {/* <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="secondary">
            <i
              className="ri-voiceprint-fill ri-lg"
              style={{ marginRight: '8px' }}
            />
            Record
          </Button>
          <Button variant="secondary">
            <i
              className="ri-upload-cloud-fill ri-lg"
              style={{ marginRight: '8px' }}
            />
            Upload
          </Button>
        </Stack> */}
      </Stack>
      {/* </Center> */}
    </Stack>
  )
}

export interface PageData {
  user: {
    id: string
    fullName: string | null
    email: string
  }
  groups: {
    id: string
    name: string
    members: {
      isAdmin: boolean
      user: {
        id: string
      }
    }[]
  }[]
}

Page.Layout = Layout
export default Page
