import styled from "styled-components"
import { colours } from "../utilities/colours"
import { mediaQuery } from "../utilities/mediaQuery"
import { Link } from "gatsby"

export const PageHeaderWrapper = styled.div`
  margin: -20px -20px 20px;
  padding: 20px;
  background-color: ${colours.siteBackgroundHighlight};

  ${mediaQuery.min_desktop} {
    max-width: 1100px;
    margin: -40px auto 20px;
    padding: 60px 40px 40px;
  }

  ${mediaQuery.desktop_medium} {
    padding: 60px 100px 40px;
  }
`

export const PageHeader = styled.h1`
  margin: 0 0 20px;
  font-size: 40px;
  font-weight: var(--fontWeight-heavy);

  ${mediaQuery.min_desktop} {
    font-size: 70px;
    line-height: 75px;
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
    padding: 0 0 0 30px;

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

  .headerTitle {
    margin: 20px 0;

    ${mediaQuery.min_desktop} {
      margin: 0 0 40px;
    }

    p {
      font-size: 30px;
      line-height: 40px;

      ${mediaQuery.min_desktop} {
        font-size: 40px;
        line-height: 60px;
      }
    }
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

export const HeaderHeroImg = styled.div`
  margin: -20px -20px 0;
  text-align: center;

  div {
    height: 300px;
  }

  ${mediaQuery.min_desktop} {
    margin: -40px -40px 0;

    div {
      height: 400px;
    }
  }
`

export const ProjectListWrapper = styled.div`
  margin: 50px 0;

  ${mediaQuery.min_desktop} {
    margin: 100px 0;
  }
`

export const ProjectListTitle = styled.h2`
  margin: 0 0 50px;
  font-size: 50px;
  font-weight: var(--fontWeight-heavy);
`

export const ProjectListItem = styled(Link)`
  display: block;
  max-width: 500px;
  margin: 35px auto;
  padding: 20px 20px 30px;
  border-radius: 10px;
  background: ${colours.siteBackgroundHighlight};
  text-decoration: none;
  font-weight: var(--fontWeight-light);

  ${mediaQuery.min_desktop} {
    display: flex;
    max-width: none;
    margin: 20px auto;
    padding: 30px;
  }

  @media (hover: hover) {
    &:hover {
      background: ${colours.siteBackgroundHighlighter};

      h2 {
        color: ${colours.linkActive};
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 0 0 10px;
    font-size: 18px;
    line-height: 25px;
    color: ${colours.bodyText};

    &:last-of-type {
      margin: 0;
    }
  }

  h2 {
    margin: 20px 0;
    font-size: 35px;
    color: ${colours.link};
    transition: color ease 0.3s;

    ${mediaQuery.min_desktop} {
      font-size: 45px;
    }
  }
`

export const ProjectListTechList = styled.div`
  p {
    margin: 0 0 10px !important;
    font-weight: var(--fontWeight-bold);
    color: ${colours.highLight};

    span {
      color: ${colours.link};
    }
  }
`

export const ProjectListPrimaryImg = styled.div`
  margin: -20px -20px 0;
  width: calc(100% + 40px);

  > div {
    width: 100%;
    max-height: 200px;
    border-radius: 5px 5px 0 0;
  }

  ${mediaQuery.min_desktop} {
    flex: 1 0 200px;
    width: 100%;
    max-height: none;
    margin: 0;

    > div {
      border-radius: 5px;
    }
  }
`

export const ProjectListContentCol = styled.div`
  ${mediaQuery.min_desktop} {
    flex: 1 1 auto;
    padding: 0 20px 0 40px;
  }
`
