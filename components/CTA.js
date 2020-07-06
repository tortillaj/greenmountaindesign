import React from 'react'

import { Box, Image, Text, Heading, Link } from 'theme-ui'

export default () => (
  <Box as="section" sx={{
    position: 'relative',
    overflow: 'hidden',
    height: 250,
    my: 4,
  }}>

    <Image sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    }} src="/static/images/leaf.jpg"/>

    <Box as="span" sx={{
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#3A705F',
      opacity: 0.4
    }} />

      <Box sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 5,
        display: 'flex',
      }}>
        <Box sx={{ margin: 'auto', color: 'white', textAlign: 'center' }}>
          <Heading as="h2" mb={2}>Looking to start something new?</Heading>
          <Text as="p" mb={2}>If you think we would make a great match, let us know
            by submitting your idea.</Text>

          <Link href="mailto:info@greenmountain.design">
            info@greenmountain.design
          </Link>
        </Box>
      </Box>
    </Box>
    )
