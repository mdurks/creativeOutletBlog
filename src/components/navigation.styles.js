import styled from "styled-components"
import { Link } from "gatsby"
import { fonts } from "../utilities/fonts"
import { colours } from "../utilities/colours"

export const NavWrapper = styled.nav`
  flex: 0 0 400px;
  /* height: 100%; */
  padding: 70px 0 40px 40px;
  background-color: ${colours.siteBackgroundHighlight};
`

export const NavLogo = styled.p`
  margin: 0 0 60px;
  width: 230px;
  font-family: ${fonts.primary};
  font-size: 70px;
  line-height: 70px;
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
  padding: 0 0 0 30px;
  font-size: 24px;
`

export const LinkListGroup = styled.ul`
  margin: 0 0 30px 30px;
`

export const LinkListItem = styled.li``

export const LinkItem = styled(Link)`
  display: block;
  padding: 5px 0;
  color: ${colours.link};
  text-decoration: none;

  &.linkItemActive,
  &:hover {
    color: ${colours.linkActive};
  }
`
