import React from 'react'
import { Box } from 'theme-ui'

export default ({ ...delegated }) => (
  <Box aria-hidden="true" sx={{
    width: '100%',
    height: 12,
    my: [2, 3],
    background: `linear-gradient(to left, #D9AF8B, #BF9393, #8A9EA6, #6dab9a)`,
    '&:first-of-type': {
      mt: 0,
    }
  }} {...delegated} />
)
