import styled from "styled-components"
import { Link } from "gatsby"
import { fonts } from "../utilities/fonts"
import { colours } from "../utilities/colours"
import { mediaQuery } from "../utilities/mediaQuery"

export const NavWrapper = styled.nav`
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  padding: 0px 20px 40px 20px;
  background-color: ${colours.siteBackgroundHighlight};
  transition: all ease 0.6s;
  z-index: 10;

  ${mediaQuery.min_desktop} {
    position: relative;
    left: 0;
    flex: 0 0 350px;
    height: auto;
    padding: 70px 40px 40px 40px;
  }

  &.menuOpen {
    left: 0;
    overflow-y: auto;
  }
`

export const MobileMenuButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 10px 16px;
  border: 2px solid ${colours.link};
  border-radius: 5px;
  background: transparent;
  color: ${colours.link};
  font-size: 20px;
  font-family: ${fonts.primary};
  font-weight: var(--fontWeight-bold);
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
    font-size: 65px;
    font-weight: var(--fontWeight-heavy);
    line-height: 70px;
    color: ${colours.link};
    text-decoration: none;
    text-transform: uppercase;
    word-wrap: normal;
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
  font-weight: var(--fontWeight-heavy);
  color: ${colours.heading};
`

export const SubCategoryTitle = styled.p`
  margin: 0 0 20px;
  padding: 0;
  font-size: 24px;
  font-weight: var(--fontWeight-bold);
  color: ${colours.heading};
`

export const LinkListGroup = styled.ul`
  margin: 0 0 30px 0;
  padding: 0 10px 0 20px;
  list-style: none;

  &:has(> li > a) {
    list-style: disc;
  }
`

export const LinkListItem = styled.li`
  line-height: 30px;

  &:has(> a) {
    color: ${colours.link};
  }

  &:has(> a.linkItemActive) {
    color: ${colours.heading};
  }
`

export const LinkItem = styled(Link)`
  display: block;
  padding: 5px 10px 5px 0;
  color: ${colours.link};
  text-decoration: none;
  font-size: 17px;
  line-height: 22px;

  ${props => {
    if (props.listtype === "projects") return "padding: 10px 10px 10px 0;"
  }}

  ${mediaQuery.min_desktop} {
    font-size: 18px;

    ${props => {
      if (props.listtype === "projects") return "font-size: 19px;"
    }}
  }

  &:hover {
    text-decoration: underline;
    color: ${colours.linkActive};
  }

  &.linkItemActive,
  &.linkItemActive:hover {
    color: ${colours.heading};
    text-decoration: underline;
    pointer-events: none;
  }
`
