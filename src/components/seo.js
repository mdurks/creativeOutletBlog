import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

function Seo({ description, title, children, preloadImageUrls = [] }) {
  const { site, smallBlankBookImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        smallBlankBookImage: file(relativePath: { eq: "smallBlankBook.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    `
  )

  const smallBlankBookImageSrc = getSrc(
    smallBlankBookImage.childImageSharp.gatsbyImageData
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="theme-color" content="#041d20" />
      <link rel="preload" as="image" href={smallBlankBookImageSrc}></link>
      {preloadImageUrls.map(img => (
        <link key={img.url} rel="preload" as="image" href={img.url}></link>
      ))}
      {children}
    </>
  )
}

export default Seo
