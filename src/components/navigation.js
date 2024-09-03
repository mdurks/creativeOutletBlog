import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import NavigationLinkList from "./navigationLinkList"
import { useEffect } from "react"

// import {
//   NavWrapper,
//   MobileMenuButton,
//   NavLogo,
//   PrimaryCategoryTitle,
//   SubCategoryTitle,
// } from "./navigation.styles"

const pageQuery = graphql`
  {
    gcms {
      blogs(stage: PUBLISHED, orderBy: createdAt_ASC) {
        id
        articleTitle
        slug
        blogCategory
        createdAt
      }
    }
  }
`

const Navigation = ({ setIsMenuOpen, isMenuOpen }) => {
  const {
    gcms: { blogs },
  } = useStaticQuery(pageQuery)

  const blogData = [...blogs]
  blogData.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  const blogDataProjects = blogData.filter(
    blog => blog.blogCategory === "Projects"
  )
  const blogDataMisc = blogData.filter(blog => blog.blogCategory === "Misc")
  const blogDataReact = blogData.filter(blog => blog.blogCategory === "React")
  const blogDataThree_JS = blogData.filter(
    blog => blog.blogCategory === "Three_JS"
  )
  const blogDataBlender = blogData.filter(
    blog => blog.blogCategory === "Blender"
  )

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    // Toggle navigation menu on mobile
    const navbarToggleEl = document.querySelector(".navbar-toggleBtn")
    const navMenu = document.getElementById("nav-menu")

    const toggleMobileMenu = () => {
      if (window.innerWidth >= 768) return
      const expanded =
        navbarToggleEl.getAttribute("aria-expanded") === "true" || false
      navbarToggleEl.setAttribute("aria-expanded", !expanded)
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
    }
    const hideMobileMenu = () => {
      if (window.innerWidth >= 768) return
      navbarToggleEl.setAttribute("aria-expanded", false)
      navMenu.style.display = "none"
    }
    navbarToggleEl.addEventListener("click", toggleMobileMenu)

    // Handle submenu toggle via button click
    document.querySelectorAll(".has-submenu > button").forEach(button => {
      button.addEventListener("click", function (event) {
        const submenu = this.nextElementSibling
        console.log("click", submenu, submenu.style.display)
        const expanded = this.getAttribute("aria-expanded") === "true" || false
        this.setAttribute("aria-expanded", !expanded)
        submenu.style.display =
          submenu.style.display == "none" ? "block" : "none"
      })
    })

    // Handle keyboard navigation for primary level and submenu
    document
      .querySelectorAll(".nav-menu > li > a, .has-submenu > button")
      .forEach(control => {
        control.addEventListener("keydown", function (event) {
          const submenu = this.nextElementSibling
          let parentMenu = this.parentElement.parentElement

          switch (event.key) {
            case "ArrowRight":
              event.preventDefault()
              focusNextMenuItem(this)
              break
            case "ArrowLeft":
              event.preventDefault()
              focusPreviousMenuItem(this)
              break
            case "ArrowDown":
              event.preventDefault()
              if (submenu && submenu.classList.contains("submenu")) {
                this.setAttribute("aria-expanded", "true")
                submenu.style.display = "block"
                submenu.querySelector("a").focus()
              } else {
                focusNextMenuItem(this)
              }
              break
            case "ArrowUp":
              event.preventDefault()
              if (
                submenu &&
                submenu.classList.contains("submenu") &&
                submenu.style.display === "block"
              ) {
                submenu.querySelector("a:last-child").focus()
              } else if (parentMenu.classList.contains("submenu")) {
                const parentLink =
                  parentMenu.parentElement.querySelector("button, a")
                parentLink.focus()
                parentLink.setAttribute("aria-expanded", "false")
                parentMenu.style.display = "none"
              } else {
                focusPreviousMenuItem(this)
              }
              break
            case "Escape":
              event.preventDefault()
              if (submenu && submenu.style.display === "block") {
                this.setAttribute("aria-expanded", "false")
                submenu.style.display = "none"
              }
              this.focus()
              break
          }
        })
      })

    // Handle keyboard navigation within submenu
    document.querySelectorAll(".submenu a").forEach(subLink => {
      subLink.addEventListener("blur", function (event) {
        setTimeout(() => {
          if (!this.closest(".submenu").contains(document.activeElement)) {
            const parentButton =
              this.closest(".has-submenu").querySelector("button")
            parentButton.setAttribute("aria-expanded", "false")
            this.closest(".submenu").style.display = "none"
          }
        }, 10)
      })
      subLink.addEventListener("keydown", function (event) {
        const parentMenu = this.parentElement.parentElement

        switch (event.key) {
          case "ArrowDown":
            event.preventDefault()
            focusNextMenuItem(this)
            break
          case "ArrowUp":
            event.preventDefault()
            focusPreviousMenuItem(this)
            break
          case "ArrowRight":
          case "ArrowLeft":
            event.preventDefault()
            const parentLink =
              parentMenu.parentElement.querySelector("button, a")
            parentLink.focus()
            parentLink.setAttribute("aria-expanded", "false")
            parentMenu.style.display = "none"
            break
          case "Escape":
            event.preventDefault()
            const parent = parentMenu.parentElement.querySelector("button, a")
            parent.setAttribute("aria-expanded", "false")
            parentMenu.style.display = "none"
            parent.focus()
            break
        }
      })
    })

    // Close all open submenus when a link is clicked
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", function () {
        closeAllSubmenus()
        hideMobileMenu()
      })
    })

    // Function to focus the next menu item
    function focusNextMenuItem(current) {
      const next = current.parentElement.nextElementSibling
      if (next) {
        next.querySelector("button, a").focus()
      } else {
        current.parentElement.parentElement.children[0]
          .querySelector("button, a")
          .focus()
      }
    }

    // Function to focus the previous menu item
    function focusPreviousMenuItem(current) {
      const prev = current.parentElement.previousElementSibling
      if (prev) {
        prev.querySelector("button, a").focus()
      } else {
        const items = current.parentElement.parentElement.children
        items[items.length - 1].querySelector("button, a").focus()
      }
    }

    // Function to close all submenus
    function closeAllSubmenus() {
      document.querySelectorAll(".has-submenu > button").forEach(button => {
        button.setAttribute("aria-expanded", "false")
        button.nextElementSibling.style.display = "none"
      })
    }

    document.addEventListener("click", function (event) {
      const nav = document.querySelector(".navbar")
      if (!nav.contains(event.target)) {
        closeAllSubmenus()
        hideMobileMenu()
      }
    })

    // Keep submenu open when hovering over the button or submenu
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.querySelectorAll(".has-submenu").forEach(item => {
        item.addEventListener("mouseenter", function () {
          const button = this.querySelector("button")
          button.setAttribute("aria-expanded", "true")
          this.querySelector(".submenu").style.display = "block"
        })

        item.addEventListener("mouseleave", function () {
          const button = this.querySelector("button")
          button.setAttribute("aria-expanded", "false")
          this.querySelector(".submenu").style.display = "none"
        })
      })
    }
  }, [])

  return (
    // <NavWrapper className={isMenuOpen && "menuOpen"}>
    //   <MobileMenuButton onClick={handleMenuClick} type="button">
    //     Close
    //   </MobileMenuButton>
    //   <NavLogo to="/">Creative Outlet</NavLogo>

    //   <PrimaryCategoryTitle>Projects</PrimaryCategoryTitle>
    //   <NavigationLinkList linkData={blogDataProjects} listtype="projects" />

    //   <PrimaryCategoryTitle>Blog</PrimaryCategoryTitle>

    //   <SubCategoryTitle>Javascript</SubCategoryTitle>
    //   <NavigationLinkList linkData={blogDataReact} />

    //   <SubCategoryTitle>Three JS</SubCategoryTitle>
    //   <NavigationLinkList linkData={blogDataThree_JS} />

    //   <SubCategoryTitle>Blender</SubCategoryTitle>
    //   <NavigationLinkList linkData={blogDataBlender} />
    // </NavWrapper>
    <nav className="navbar" aria-label="Main Navigation">
      <div className="innerColumn">
        <Link to="/" className="siteLogo">
          Creative Outlet
        </Link>
        <button
          type="button"
          className="navbar-toggleBtn"
          aria-controls="nav-menu"
          aria-expanded="false"
          tabIndex="0"
        >
          <span className="toggle-icon"></span>
        </button>
        <ul className="nav-menu" id="nav-menu">
          <li className="has-submenu">
            <button
              className="submenuBtn"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Projects
            </button>
            <ul className="submenu" style={{ display: "none" }}>
              <li>
                <Link to="/weather-charts-with-d3js/">Weather API</Link>
              </li>
              <li>
                <Link to="/tv-favs-using-redux-react-router-and-local-storage/">
                  TV FAVS
                </Link>
              </li>
              <li>
                <Link to="/making-this-blog-with-gatsby-graphql-and-netlify/">
                  Making this blog
                </Link>
              </li>
              <li>
                <Link to="/wentworth-jewels/">Wentworth Jewels</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/web/">Web</Link>
          </li>
          <li>
            <Link to="/3d/">3D</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

{
  /* <SubCategoryTitle>Misc</SubCategoryTitle>
<NavigationLinkList linkData={blogDataMisc} /> */
}
