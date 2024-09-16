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
// import {
//   PageWrapper,
//   PageContent,
//   MobileHeader,
//   MobileSiteTitle,
//   MobileMenuButton,
// } from "./layout.styles"

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
      {/* <PageWrapper>
        <MobileHeader>
          <MobileSiteTitle to="/">Creative Outlet</MobileSiteTitle>
          <MobileMenuButton onClick={handleMenuClick} type="button">
            Menu
          </MobileMenuButton>
        </MobileHeader>
        <Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <PageContent>{children}</PageContent>
      </PageWrapper> */}

      {/* <MobileHeader>
        <MobileSiteTitle to="/">Creative Outlet</MobileSiteTitle>
        <MobileMenuButton onClick={handleMenuClick} type="button">
          Menu
        </MobileMenuButton>
      </MobileHeader> */}

      <Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {children}
      <footer>
        <div className="footerContent">
          <div>
            <a href="http://creativeoutlet.co.uk/">
              Visit my treehouse if you haven't already...
            </a>
          </div>
          <div>© Creative Outlet. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default Layout
