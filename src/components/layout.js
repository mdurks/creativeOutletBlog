/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useState, useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Navigation from "./navigation"
import "./layout.css"
import {
  PageWrapper,
  PageContent,
  MobileHeader,
  MobileSiteTitle,
  MobileMenuButton,
} from "./layout.styles"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) document.querySelector("body").classList.add("menuOpen")
    else document.querySelector("body").classList.remove("menuOpen")
  }, [isMenuOpen])

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <PageWrapper>
        <MobileHeader>
          <MobileSiteTitle>Creative Outlet</MobileSiteTitle>
          <MobileMenuButton onClick={handleMenuClick} type="button">
            Menu
          </MobileMenuButton>
        </MobileHeader>
        <Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <PageContent>{children}</PageContent>
      </PageWrapper>
      {/* <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
    </>
  )
}

export default Layout
