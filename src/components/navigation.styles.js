import styled from "styled-components"
import { Link } from "gatsby"
import { fonts } from "../utilities/fonts"
import { colours } from "../utilities/colours"
import mediaQuery from "../utilities/mediaQuery"

export const NavWrapper = styled.nav`
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  padding: 0px 0 40px 20px;
  background-color: ${colours.siteBackgroundHighlight};
  transition: all ease 0.6s;
  z-index: 10;

  &.menuOpen {
    left: 0;
    overflow-y: auto;
  }

  ${mediaQuery.min_desktop} {
    position: relative;
    left: 0;
    flex: 0 0 350px;
    height: auto;
    padding: 70px 0 40px 40px;
  }
`

export const MobileMenuButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 10px 16px;
  border: 2px solid ${colours.heading};
  border-radius: 5px;
  background: transparent;
  color: ${colours.heading};
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  ${mediaQuery.min_desktop} {
    display: none;
  }
`

export const NavLogo = styled(Link)`
  display: none;

  ${mediaQuery.min_desktop} {
    display: block;
    margin: 0 0 60px;
    width: 230px;
    font-family: ${fonts.primary};
    font-size: 70px;
    line-height: 70px;
    color: ${colours.bodyText};
    text-decoration: none;
  }

  &:hover {
    color: ${colours.linkActive} !important;
  }
`

export const PrimaryCategoryTitle = styled.p`
  margin: 50px 0 30px;
  padding: 0 0 20px;
  border-bottom: 1px solid ${colours.primary};
  font-family: ${fonts.primary};
  font-size: 30px;
  color: ${colours.heading};
`

export const SubCategoryTitle = styled.p`
  margin: 0 0 20px;
  padding: 0;
  font-size: 24px;
`

export const LinkListGroup = styled.ul`
  margin: 0 0 30px 0;
`

export const LinkListItem = styled.li``

export const LinkItem = styled(Link)`
  display: block;
  padding: 5px 0;
  color: ${colours.link};
  text-decoration: none;

  /* &.linkItemActive, */
  &:hover {
    color: ${colours.linkActive};
  }
`
