import {
  Box,
  Grid,
  Stack,
  Image,
  Flex,
  Text,
  Heading,
  HStack,
  Spacer,
  Tag
} from '@chakra-ui/react'
import React from 'react'

export const CardCast = () => {
  return (
    <Stack
      w="100%"
      // gridRowEnd="span 26"
      p="24px"
      bgColor="rgba(255, 255, 255, 4%)"
      rounded="20px"
      backdropFilter="blur(27px)"
      h="auto"
      // mr="4rem"
    >
      <Stack direction="row" justify="space-between">
        <Box
          bgColor="#282829"
          rounded="10px"
          boxShadow="5px 10px 24px rgba(0, 0, 0, 0.15)"
          boxSize="100px"
          objectFit="contain"
        />
        {/* <Image
          src="/images/profile.png"
          bgColor="#282829"
          rounded="10px"
          boxShadow="5px 10px 24px rgba(0, 0, 0, 0.15)"
          // rounded="16px"
          boxSize="100px"
          objectFit="contain"
          alt="Image"
        /> */}
        <i className="ri-more-fill" />
      </Stack>

      <Stack spacing="4">
        <Heading as="h2" w="full" fontSize="24px">
          The Exit
        </Heading>

        <HStack align="flex-start">
          <i className="ri-pause-line" />
          <Text>Bitcoin, Crypto, and escape from the Boxed economy</Text>
        </HStack>
      </Stack>
    </Stack>
  )
}
