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
  const nav = 5
  console.log("nav", nav)
  return (
    <NavWrapper>
      <NavLogo>Creative Outlet</NavLogo>
      <PrimaryCategoryTitle>Projects:</PrimaryCategoryTitle>
      <LinkListGroup>
        <LinkListItem>
          <LinkItem to="/" activeClassName="linkItemActive">
            Creative Outlet Treehouse
          </LinkItem>
        </LinkListItem>
        <LinkListItem>
          <LinkItem to="/page-2" activeClassName="linkItemActive">
            Creative Outlet Treehouse
          </LinkItem>
        </LinkListItem>
        <LinkListItem>
          <LinkItem to="/page-2" activeClassName="linkItemActive">
            Creative Outlet Treehouse
          </LinkItem>
        </LinkListItem>
      </LinkListGroup>
      <PrimaryCategoryTitle>Blog:</PrimaryCategoryTitle>
      <SubCategoryTitle>Three JS:</SubCategoryTitle>
      <LinkListGroup>
        <LinkListItem>
          <LinkItem to="/page-2" activeClassName="linkItemActive">
            Creative Outlet Treehouse
          </LinkItem>
        </LinkListItem>
        <LinkListItem>
          <LinkItem to="/page-2" activeClassName="linkItemActive">
            Creative Outlet Treehouse
          </LinkItem>
        </LinkListItem>
        <LinkListItem>
          <LinkItem to="/page-2" activeClassName="linkItemActive">
            Creative Outlet Treehouse
          </LinkItem>
        </LinkListItem>
      </LinkListGroup>
      <SubCategoryTitle>Blender</SubCategoryTitle>
      <SubCategoryTitle>React</SubCategoryTitle>
    </NavWrapper>
  )
}

export default Navigation
