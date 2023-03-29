import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import NavigationLinkList from "./navigationLinkList"

import {
  NavWrapper,
  MobileMenuButton,
  NavLogo,
  PrimaryCategoryTitle,
  SubCategoryTitle,
} from "./navigation.styles"

const pageQuery = graphql`
  {
    gcms {
      blogs(stage: PUBLISHED) {
        id
        articleTitle
        slug
        blogCategory
      }
    }
  }
`

const Navigation = ({ setIsMenuOpen, isMenuOpen }) => {
  const {
    gcms: { blogs },
  } = useStaticQuery(pageQuery)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const blogDataProjects = blogs.filter(
    blog => blog.blogCategory === "Projects"
  )
  const blogDataMisc = blogs.filter(blog => blog.blogCategory === "Misc")
  const blogDataReact = blogs.filter(blog => blog.blogCategory === "React")
  const blogDataThree_JS = blogs.filter(
    blog => blog.blogCategory === "Three_JS"
  )
  const blogDataBlender = blogs.filter(blog => blog.blogCategory === "Blender")

  return (
    <NavWrapper className={isMenuOpen && "menuOpen"}>
      <MobileMenuButton onClick={handleMenuClick} type="button">
        Close
      </MobileMenuButton>
      <NavLogo to="/">Creative Outlet</NavLogo>

      <PrimaryCategoryTitle>Projects:</PrimaryCategoryTitle>
      <NavigationLinkList linkData={blogDataProjects} />

      <PrimaryCategoryTitle>Blog:</PrimaryCategoryTitle>

      <SubCategoryTitle>Misc:</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataMisc} />

      <SubCategoryTitle>Javascript:</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataReact} />

      <SubCategoryTitle>Three JS:</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataThree_JS} />

      <SubCategoryTitle>Blender:</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataBlender} />
    </NavWrapper>
  )
}

export default Navigation
