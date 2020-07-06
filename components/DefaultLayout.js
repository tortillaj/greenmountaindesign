/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import React from 'react'

import Header from '../components/Header'

export default ({ children }) => {
  return (
    <div sx={{ position: 'relative', px: [2, 4], py: [2, 4] }}>
      <Grid gap={[2, 4]} columns={[1, `1fr 3fr`, `1fr 4fr`]}>
        <Header/>

        <Box as="main" sx={{ mt: [3, 122] }}>
          {children}
        </Box>
      </Grid>
    </div>
  )
}
