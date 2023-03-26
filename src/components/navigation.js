import * as React from "react"

import {
  NavWrapper,
  MobileMenuButton,
  NavLogo,
  PrimaryCategoryTitle,
  SubCategoryTitle,
  LinkListGroup,
  LinkListItem,
  LinkItem,
} from "./navigation.styles"

const Navigation = ({ setIsMenuOpen, isMenuOpen }) => {
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const projectLinks = [
    {
      text: "Test article title",
      url: "/",
    },
    {
      text: "Test article title",
      url: "/page-2",
    },
    {
      text: "Test article title",
      url: "/page-3",
    },
  ]

  const blogThreeJSLinks = [
    {
      text: "Test article title",
      url: "/page-4",
    },
    {
      text: "Test article title",
      url: "/page-5",
    },
    {
      text: "Test article title",
      url: "/page-6",
    },
  ]

  return (
    <NavWrapper className={isMenuOpen && "menuOpen"}>
      <MobileMenuButton onClick={handleMenuClick} type="button">
        Close
      </MobileMenuButton>
      <NavLogo>Creative Outlet</NavLogo>

      <PrimaryCategoryTitle>Projects:</PrimaryCategoryTitle>

      <LinkListGroup>
        {projectLinks.map(link => (
          <LinkListItem>
            <LinkItem
              key={link.url}
              to={link.url}
              activeClassName="linkItemActive"
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
              activeClassName="linkItemActive"
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
