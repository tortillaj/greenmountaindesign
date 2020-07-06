const title = 'Green Mountain Design & Development'
const description = 'Web Design and Development in Vermont, USA'

export default {
  title,
  description,
  canonical: 'https://greenmountain.design',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greenmountain.design',
    title,
    description,
    images: [
      {
        url: 'https://greenmountain.design/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}
