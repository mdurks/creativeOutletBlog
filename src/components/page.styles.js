import styled from "styled-components"
import { colours } from "../utilities/colours"
import { mediaQuery } from "../utilities/mediaQuery"

export const PageHeaderWrapper = styled.div`
  margin: -20px -20px 20px;
  padding: 20px;
  background-color: ${colours.siteBackgroundHighlight};

  ${mediaQuery.min_desktop} {
    max-width: 1100px;
    margin: 0 auto 20px;
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

export const PublishedWrapper = styled.div`
  margin: 10px 0;
`

export const UpdatedWrapper = styled.div``

export const PageBody = styled.main`
  padding: 0px;

  ${mediaQuery.min_desktop} {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px;
    font-size: 22px;
  }

  ${mediaQuery.desktop_medium} {
    padding: 50px 100px;
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
      margin-bottom: 20px;
    }
  }

  strong {
    color: ${colours.highLight} !important;
  }

  .quote {
    margin: 35px 0;

    ${mediaQuery.min_desktop} {
      margin: 0 0 40px;
    }

    p {
      font-size: 18px;
      font-style: italic;

      ${mediaQuery.min_desktop} {
        font-size: 30px;
        line-height: 45px;
      }
    }
  }

  .blog-build-process {
    img {
      display: block;
      width: 100%;
      margin: 40px auto;

      ${mediaQuery.min_desktop} {
        margin: 75px auto;
        height: 950px;
        margin: 60px 0;
      }
    }
  }

  .largeEmoji {
    font-size: 60px;
  }
`

export const StaticImageWrapper = styled.div`
  margin: 30px 0;
  text-align: center;

  ${mediaQuery.min_desktop} {
    margin: 60px 0;
  }
`
