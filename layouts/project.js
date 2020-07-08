import React from 'react'
import { NextSeo } from 'next-seo'

import defaultSEO from '../default-seo'
import DefaultLayout from '../components/DefaultLayout'
import Beam from '../components/Beam'
/** @jsx jsx */
import { jsx, Flex, Heading, Text } from 'theme-ui'

export default (frontMatter) => {
  return ({ children }) => {
    return (
      <DefaultLayout>
        <NextSeo title={`${frontMatter.title} | ${defaultSEO.title}`}/>

        <Beam />

        <Flex sx={{ flexDirection: ['column-reverse', 'row'] }} as="article">
          <div sx={{ mt: [4, 0], mr: [0, 4], width: ['100%', '70%'] }}>
            {children}
          </div>

          <header sx={{ width: ['100%', '30%'] }}>
            <Heading as="h1" mb={2} sx={{
              fontSize: 5,
            }}>{frontMatter.title}</Heading>

            <Text as="p" sx={{
              fontSize: 3,
            }}>{frontMatter.summary}</Text>

            <Text as="strong" variant="meta">Type of project</Text>
            <Text as="span" variant="tag">{frontMatter.platform}</Text>

            <Text as="strong" variant="meta">Industry</Text>
            {frontMatter.industry.map(i => <Text key={i} as="span" variant="tag">{i}</Text>)}

            <Text as="strong" variant="meta">Technology</Text>
            {frontMatter.technology.map(i => <Text key={i} as="span" variant="tag">{i}</Text>)}

            <Text as="strong" variant="meta">Work completed for the client</Text>
            {frontMatter.deliverables.map(i => <Text key={i} as="span" variant="tag">{i}</Text>)}
          </header>
        </Flex>

      </DefaultLayout>
    )
  }
}
