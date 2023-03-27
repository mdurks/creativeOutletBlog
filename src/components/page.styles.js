import styled from "styled-components"
import { colours } from "../utilities/colours"
import mediaQuery from "../utilities/mediaQuery"

export const PageHeaderWrapper = styled.div`
  margin: -20px -20px 20px;
  padding: 20px;
  background-color: ${colours.siteBackgroundHighlight};

  ${mediaQuery.min_desktop} {
    margin: 0 0 20px;
    padding: 40px;
  }

  ${mediaQuery.desktop_medium} {
    padding: 50px 100px;
  }
`

export const PageHeader = styled.h1`
  margin: 0 0 20px;
  font-size: 40px;

  ${mediaQuery.min_desktop} {
    font-size: 70px;
  }
`

export const PageBody = styled.main`
  padding: 0px;

  ${mediaQuery.min_desktop} {
    padding: 40px;
  }

  ${mediaQuery.desktop_medium} {
    padding: 50px 100px;
  }

  code {
    width: 100%;
    margin: 0 auto 30px;
    padding: 15px !important;
    font-size: 13px;
    line-height: 19px;
    background: ${colours.siteBackgroundHighlight} !important;
    overflow-x: auto;

    ${mediaQuery.min_desktop} {
      padding: 2em !important;
      font-size: 15px;
      line-height: 21px;
    }

    ${mediaQuery.desktop_medium} {
      width: 80%;
    }
  }

  a {
    color: ${colours.link} !important;

    &:hover {
      color: ${colours.linkActive} !important;
    }
  }

  ul {
    margin: 30px 30px 40px 0px;

    ${mediaQuery.min_tablet} {
      margin: 40px 30px 50px 20px;
    }

    li {
      margin-bottom: 25px;
    }
  }

  strong {
    color: ${colours.highLight} !important;
  }

  .quote p {
    font-size: 20px;
    line-height: 35px;
    font-style: italic;

    ${mediaQuery.min_desktop} {
      font-size: 30px;
      line-height: 45px;
    }
  }
`

export const StaticImageWrapper = styled.div`
  margin: 30px 0;
  text-align: center;

  ${mediaQuery.min_desktop} {
    margin: 60px 0;
  }
`
