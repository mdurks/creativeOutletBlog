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

const Layout = ({ children, showFooterForm = true }) => {
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

  // const [currentUrl, setCurrentUrl] = useState("")

  // useEffect(() => {
  //   if (typeof window !== "undefined") setCurrentUrl(window.location.href)
  // }, [])

  // const handleMenuClick = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

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
      <div className="parallaxContext">
        {children}

        <footer>
          {showFooterForm && (
            <div className="footerContactBar">
              <form action="https://submit-form.com/YpLIEIJWw">
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://creativeoutletblog.netlify.app/thanks/"
                />

                <p>Email me and say hello!</p>
                <div className="col">
                  <label htmlFor="name">
                    <span>Prefered name:</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Prefered name"
                      required={true}
                    />
                  </label>
                  <label htmlFor="email">
                    <span>Email:</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      required={true}
                    />
                  </label>
                </div>
                <label htmlFor="message">
                  <span>Message:</span>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message..."
                    rows={5}
                    required={true}
                  ></textarea>
                </label>
                <button type="submit">Submit</button>
              </form>
              <div className="footerTreehouseLink">
                <a href="http://creativeoutlet.co.uk/">
                  <img src="/footerTreehouse.png" alt="" />
                  <span>Visit my treehouse if you haven't already...</span>
                </a>
              </div>
            </div>
          )}

          <div className="footerContent">
            <div>© Creative Outlet. All Rights Reserved.</div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
