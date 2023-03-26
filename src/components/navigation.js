import * as React from "react"

import {
  NavWrapper,
  NavLogo,
  PrimaryCategoryTitle,
  SubCategoryTitle,
  LinkListGroup,
  LinkListItem,
  LinkItem,
} from "./navigation.styles"

const Navigation = () => {
  const projectLinks = [
    {
      text: "Test article title",
      url: "/",
      activeClassName: "linkItemActive",
    },
    {
      text: "Test article title",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
    {
      text: "Test article title",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
  ]

  const blogThreeJSLinks = [
    {
      text: "Test article title",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
    {
      text: "Test article title",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
    {
      text: "Test article title",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
  ]

  return (
    <NavWrapper>
      <NavLogo>Creative Outlet</NavLogo>

      <PrimaryCategoryTitle>Projects:</PrimaryCategoryTitle>

      <LinkListGroup>
        {projectLinks.map(link => (
          <LinkListItem>
            <LinkItem
              key={link.url}
              to={link.url}
              activeClassName={link.activeClassName}
            >
              {link.text}
            </LinkItem>
          </LinkListItem>
        ))}
      </LinkListGroup>

      <PrimaryCategoryTitle>Blog:</PrimaryCategoryTitle>

      <SubCategoryTitle>Three JS:</SubCategoryTitle>
      <LinkListGroup>
        {blogThreeJSLinks.map(link => (
          <LinkListItem>
            <LinkItem
              key={link.url}
              to={link.url}
              activeClassName={link.activeClassName}
            >
              {link.text}
            </LinkItem>
          </LinkListItem>
        ))}
      </LinkListGroup>

      <SubCategoryTitle>Blender</SubCategoryTitle>
      <SubCategoryTitle>React</SubCategoryTitle>
    </NavWrapper>
  )
}

export default Navigation
