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
      text: "Creative Outlet Treehouse1",
      url: "/",
      activeClassName: "linkItemActive",
    },
    {
      text: "Creative Outlet Treehouse2",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
    {
      text: "Creative Outlet Treehouse3",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
  ]

  const blogThreeJSLinks = [
    {
      text: "Creative Outlet Treehouse4",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
    {
      text: "Creative Outlet Treehouse5",
      url: "/page-2",
      activeClassName: "linkItemActive",
    },
    {
      text: "Creative Outlet Treehouse6",
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
