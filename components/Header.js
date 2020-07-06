import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, Box, Text, Flex, NavLink } from 'theme-ui'

import Logo from './Logo'
import Beam from './Beam'

export default () => {
  return (
    <Box as="header">
      <div sx={{
        position: ['static', 'sticky'],
        top: 32,
      }}>
        <Logo/>

        <Beam/>

        <Box bg="secondary" px={[1, 2]} py={[0, 1]}>
          <Text as="p" sx={{
            color: 'text',
            fontSize: 1,
            fontWeight: 'bold',
          }}>
            We are open for business as usual during the COVID-19 pandemic.
          </Text>
        </Box>

        <Text as="p" mt={2} sx={{
          fontSize: 3,
        }}>
          ⚡ Building the Web.​⚡
        </Text>

        <Beam/>

        <Text as="p" mt={2} sx={{
          fontSize: 2,
        }}>
          <Link href="/" passHref>
            <NavLink>Projects</NavLink>
          </Link>
          {'  /  '}
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </Text>

        <Beam/>

        <Text as="p" mt={2} sx={{
          fontSize: 2,
        }}>
          <strong>Calais, Vermont</strong> <br />
          <a sx={{ variant: 'styles.a' }} href="mailto:info@greenmountain.design">info@greenmountain.design</a><br />
          <a sx={{ variant: 'styles.a' }} href="tel:802-456-0013">802-456-0013</a>
        </Text>

      </div>
    </Box>
  )
}
