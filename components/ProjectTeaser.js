import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, Box, Heading, Image, Text } from 'theme-ui'

const Inner = ({ image, title, meta }) => (
  <>
    <div sx={{
      position: 'relative',
      width: '100%',
      height: [175, 200],
    }}>
      <Image src={image} alt={`screenshot of the ${title} project`} sx={{
        objectFit: 'cover',
        objectPosition: 'top',
        width: '100%',
        height: '100%',
      }}/>
    </div>
    <figcaption sx={{ py: [1, 2], px: [2, 3] }}>
      <Heading as="h3" sx={{ fontSize: 5, color: 'black', }}>{title}</Heading>
      <Text as="p" sx={{ fontSize: 2, color: 'black', }}>{meta}</Text>
    </figcaption>
  </>
)

export default (
  {
    image,
    title,
    meta,
    slug,
  },
) => {
  const backgroundColor = ['primary', 'secondary', 'tertiary', 'quaternary'][Math.floor(Math.random() * Math.floor(4))]

  return (
    <Box sx={{ backgroundColor }} as="figure">
      {slug && (
        <Link href={`/project/${slug}`} passHref>
          <a sx={{
            cursor: 'pointer',
            color: 'black',
            textDecoration: 'none',
            display: 'block',
            width: '100%',
            height: '100%',
          }}>
            <Inner image={image} title={title} meta={meta}/>
          </a>
        </Link>
      )}
      {!slug && (
        <Inner image={image} title={title} meta={meta}/>
      )}
    </Box>

  )
}

