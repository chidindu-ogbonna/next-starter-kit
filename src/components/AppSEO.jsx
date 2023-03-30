import { useRouter } from 'next/router'
import Head from 'next/head'
import { siteMetadata } from '@/data/siteMetadata'

const CommonSEO = ({ title, description }) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={siteMetadata.twitterImageCard}
        key={siteMetadata.twitterImageCard}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteMetadata.twitterImageCard} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} />
}
