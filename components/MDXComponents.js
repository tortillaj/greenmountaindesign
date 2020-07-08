import React from 'react'
import { Heading, Text } from 'theme-ui'

export default {
  h1: ({ children, ...delegated }) => (
    <Heading as={'h1'} mb={2} {...delegated}>{children}</Heading>
  ),
  h2: ({ children, ...delegated }) => (
    <Heading as={'h2'} mb={2} {...delegated}>{children}</Heading>
  ),
  h3: ({ children, ...delegated }) => (
    <Heading as={'h3'} mb={2} {...delegated}>{children}</Heading>
  ),
  h4: ({ children, ...delegated }) => (
    <Heading as={'h4'} mb={2} {...delegated}>{children}</Heading>
  ),
  h5: ({ children, ...delegated }) => (
    <Heading as={'h5'} mb={2} {...delegated}>{children}</Heading>
  ),
  p: ({ children, ...delegated }) => (
    <Text as={'p'} mb={2} {...delegated}>{children}</Text>
  ),
  small: ({ children, ...delegated }) => (
    <Text variant="tag" {...delegated}>{children}</Text>
  ),
}
