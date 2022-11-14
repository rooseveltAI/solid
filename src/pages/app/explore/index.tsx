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
  Button,
  Container,
  Grid
} from '@chakra-ui/react'
import { CardCast } from 'components/card'
import Link from 'next/link'

const Page = () => {
  return (
    <Container
      maxW={{ base: '', lg: '100%' }}
      py={{ base: '', md: '1.5rem' }}
      px="0"
    >
      <Stack
        spacing="4"
        pl={{ base: '', md: '3rem' }}
        pr={{ base: '', md: '4rem' }}
        align="center"
        justify="space-between"
        direction="row"
      >
        <Heading mb={2} fontSize={{ base: '', md: '20px' }}>
          Recent Uploads
        </Heading>
        <Link href="#">See All</Link>
      </Stack>
      <Stack>
        <Grid
          m="auto"
          py={{ base: '0', md: '4' }}
          px={{ base: '', md: '2rem' }}
          w={{ base: '100%', md: '100%' }}
          templateColumns={{
            base: '',
            sm: '',
            lg: 'repeat(auto-fill, 285px)'
          }}
          gap="20px"
        >
          <CardCast />
          <CardCast />
          <CardCast />
          <CardCast />
          <CardCast />
        </Grid>
      </Stack>
    </Container>
  )
}

Page.Layout = Layout
export default Page
