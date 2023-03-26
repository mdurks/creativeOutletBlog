import styled from "styled-components"
import { colours } from "../utilities/colours"
import mediaQuery from "../utilities/mediaQuery"

export const PageHeaderWrapper = styled.div`
  margin: 0 0 40px;
  padding: 30px;
  background-color: ${colours.siteBackgroundHighlight};

  ${mediaQuery.min_desktop} {
    padding: 50px 100px;
  }
`

export const PageHeader = styled.h1`
  margin: 20px 0 0;
  font-size: 70px;
`

export const PageBody = styled.main`
  padding: 0px;

  ${mediaQuery.min_desktop} {
    padding: 0 10% 0 100px;
    padding: 50px 100px;
  }

  pre {
    width: 100%;
    margin: 0 auto 30px;
    padding: 15px !important;
    font-size: 16px;
    background: #052529 !important;
    overflow-x: auto;

    ${mediaQuery.min_desktop} {
      width: 80%;
      padding: 2em !important;
    }
  }
`

export const StaticImageWrapper = styled.div`
  margin: 60px 0;
  text-align: center;
`
