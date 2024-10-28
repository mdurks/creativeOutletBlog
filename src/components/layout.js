/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useState, useEffect } from "react"
import DOMPurify from "dompurify"
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

  const handleSubmit = event => {
    event.target.name.value = DOMPurify.sanitize(event.target.name.value)
    event.target.email.value = DOMPurify.sanitize(event.target.email.value)
    event.target.message.value = DOMPurify.sanitize(event.target.message.value)
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
      <div className="parallaxContext">
        {children}

        <footer>
          {showFooterForm && (
            <div className="footerContactBar">
              <form
                data-botpoison-public-key="pk_dddac682-0683-48e6-a41f-11f98093d505"
                // action="https://submit-form.com/echo"
                action="https://submit-form.com/YpLIEIJWw"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://creativeoutletblog.netlify.app/thanks/"
                />

                <input
                  type="checkbox"
                  name="feedback"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
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
                <a href="https://michael-durkin.com/">
                  <img src="/footerTreehouse.png" alt="" />
                  <span>Visit my treehouse if you haven't already...</span>
                </a>
              </div>
            </div>
          )}

          <div className="footerContent">
            <div>© Creative Outlet. All Rights Reserved.</div>
            <div>
              <a
                href="https://www.linkedin.com/in/michael-durkin-a5a39776/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                Linkedin
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
