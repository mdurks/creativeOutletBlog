import styled from "styled-components"
import { Link } from "gatsby"
import { mediaQuery } from "../utilities/mediaQuery"
import { colours } from "../utilities/colours"
import { fonts } from "../utilities/fonts"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.min_desktop} {
    flex-direction: row;
  }
`

export const PageContent = styled.div`
  flex: 1 1 auto;
  padding: 20px;

  ${mediaQuery.min_desktop} {
    padding: 40px;
  }
`

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background: #001012;

  ${mediaQuery.min_desktop} {
    display: none;
  }
`

export const MobileSiteTitle = styled(Link)`
  font-size: 28px;
  font-weight: var(--fontWeight-heavy);
  color: ${colours.link};
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${fonts.primary};
`

export const MobileMenuButton = styled.button`
  padding: 10px 16px;
  border: 2px solid ${colours.link};
  border-radius: 5px;
  background: transparent;
  color: ${colours.link};
  font-family: ${fonts.primary};
  font-size: 20px;
  font-weight: var(--fontWeight-bold);
  text-transform: uppercase;
  cursor: pointer;
`
