import React from 'react'
import { Heading, Stack, Text } from 'minerva-ui'
import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title="About — Matt Wood">
      <Heading
        letterSpacing="tight"
        my="16px"
        as="h1"
        fontSize="48px"
        fontWeight={700}
        display="block"
      >
        My name's Matt Wood.
      </Heading>
      <Stack gap="20px" py="20px" flexDirection="column">
        <Text>
          I'm a self-taught, full-stack developer from Texas. I've spent most of
          my life tinkering with things and trying to make things that are
          useful for myself and others.
        </Text>
        <Text>
          I'm passionate about explaining complex topics in simple and
          approachable ways and sharing the things I learn each day.
        </Text>
        <Text>
          I spend my free time starting more projects than I'll ever be able to
          finish and learning as much as I can along the way.
        </Text>
      </Stack>
    </Layout>
  )
}
