import React from 'react'
import { NextSeo } from 'next-seo'

import defaultSEO from '../default-seo'
import DefaultLayout from '../components/DefaultLayout'
import Beam from '../components/Beam'

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('.mdx', '')

  return ({ children }) => {
    return (
      <DefaultLayout>
        <NextSeo title={`${frontMatter.title} | ${defaultSEO.title}`} />

        <Beam />
        {children}
      </DefaultLayout>
    )
  }
}
