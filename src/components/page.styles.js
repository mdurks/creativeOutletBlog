import styled from "styled-components"
import { colours } from "../utilities/colours"
import { mediaQuery } from "../utilities/mediaQuery"
import { Link } from "gatsby"

export const PageHeaderWrapper = styled.div`
  margin: auto;
  padding: 20px;
  background-color: ${colours.siteBackgroundHighlight};

  ${mediaQuery.min_desktop} {
    max-width: 1100px;
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
  text-shadow: 0px 4px 4px #000;

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
  a {
    color: ${colours.link} !important;

    &:hover {
      color: ${colours.linkActive} !important;
    }
  }

  .techIconGroup a {
    color: #00b0cf !important;

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

  .quote {
    margin: 0 0 35px;

    ${mediaQuery.min_desktop} {
      margin: 0 0 40px;
    }

    p {
      font-style: italic;

      ${mediaQuery.min_desktop} {
        font-size: 1.5rem;
        /* line-height: 45px; */
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
  text-align: center;

  div {
    height: 300px;
  }

  ${mediaQuery.min_desktop} {
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
  font-weight: var(--fontWeight-heavy);
`

export const ProjectListItem = styled(Link)`
  display: block;
  max-width: 500px;
  margin: 25px auto;
  padding: 0 20px 30px;
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

      h2,
      h2:first-child {
        color: ${colours.linkActive};
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

  h2,
  h2:first-child {
    margin: 20px 0;
    font-size: 35px;
    color: ${colours.link};
    transition: color ease 0.3s;

    ${mediaQuery.min_desktop} {
      font-size: 45px;
      margin: 10px 0;
    }
  }
`

export const ProjectListTechList = styled.div`
  p {
    margin: 0 0 10px !important;
    font-weight: var(--fontWeight-bold);

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
    border-radius: 10px 10px 0 0;
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
    flex: 1 1 100%;
    padding: 0 20px 0 40px;
  }
`

export const CardList = styled.ul`
  display: flex;
  flex-flow: wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  align-items: stretch;
  margin: 2rem 0;
  padding: 0;
  list-style-type: none;

  ${mediaQuery.min_desktop} {
  }
`
export const CardListItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;

  ${mediaQuery.min_desktop} {
    flex: 0 0 50%;
  }
`
export const CardListItemLink = styled(Link)`
  display: block;
  margin: 8px -10px;
  padding: 20px;
  text-decoration: none;
  background: #b5b5b5;
  color: black;
  border-radius: 5px;

  font-size: 1rem;
  line-height: normal;

  ${mediaQuery.min_desktop} {
    display: flex;
    flex-direction: column;
    height: calc(100% - 90px);
    margin: 5px;
    padding: 40px;

    /* font-size: 1.1rem; */
    /* line-height: 1.6rem; */
  }

  &:focus-within,
  &:hover {
    background: #a3a3a3;

    strong {
      color: #cb235a;
    }
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    text-transform: none;
    font-weight: bold;
  }

  p:last-of-type,
  p {
    margin: 0 0 1rem;
  }
  strong {
    font-size: 1.25rem;
    margin-top: auto;
    color: #0096ab;
  }
`
