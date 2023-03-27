import styled from "styled-components"
import { Link } from "gatsby"
import mediaQuery from "../utilities/mediaQuery"
import { colours } from "../utilities/colours"

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
  font-size: 30px;
  color: ${colours.bodyText};
  text-decoration: none;
`

export const MobileMenuButton = styled.button`
  padding: 10px 16px;
  border: 2px solid ${colours.heading};
  border-radius: 5px;
  background: transparent;
  color: ${colours.heading};
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
`
