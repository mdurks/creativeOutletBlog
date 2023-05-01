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

  return (
    <NavWrapper className={isMenuOpen && "menuOpen"}>
      <MobileMenuButton onClick={handleMenuClick} type="button">
        Close
      </MobileMenuButton>
      <NavLogo to="/">Creative Outlet</NavLogo>

      <PrimaryCategoryTitle>Projects</PrimaryCategoryTitle>
      <NavigationLinkList linkData={blogDataProjects} />

      <PrimaryCategoryTitle>Blog</PrimaryCategoryTitle>

      <SubCategoryTitle>Misc</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataMisc} />

      <SubCategoryTitle>Javascript</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataReact} />

      <SubCategoryTitle>Three JS</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataThree_JS} />

      <SubCategoryTitle>Blender</SubCategoryTitle>
      <NavigationLinkList linkData={blogDataBlender} />
    </NavWrapper>
  )
}

export default Navigation
