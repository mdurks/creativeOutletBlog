import styled from "styled-components"
// import { colours } from "../../utilities/colours"
import { mediaQuery } from "../../utilities/mediaQuery"
import { Link } from "gatsby"

export const ProjectWrapper = styled.div`
  position: relative;

  ${mediaQuery.min_desktop} {
    width: 932px;
    height: 571px;
  }
`
export const BookImage = styled.div`
  pointer-events: none;

  img {
    object-fit: contain !important;
  }
`
export const MainImage = styled.div`
  pointer-events: none;

  ${mediaQuery.min_desktop} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    img {
      object-fit: contain !important;
    }
  }
`
export const RightPage = styled.div`
  ${mediaQuery.min_desktop} {
    position: absolute;
    top: 110px;
    left: 53.5%;
    z-index: 1;
    width: 30%;
    font-size: 1.1rem;
    line-height: normal;
    transform: rotate(-3.25deg);

    /* outline: 1px solid red; */
  }
`
export const ProjectTitle = styled.h2`
  ${mediaQuery.min_desktop} {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    color: var(--colors_primary);
  }
`
export const SkillsList = styled.p`
  ${mediaQuery.min_desktop} {
    margin: 0 0 1rem;
    font-size: 1.15rem;
    font-weight: bold;
  }
`
export const BodyText = styled.p`
  ${mediaQuery.min_desktop} {
    margin: 0 0 1rem;
    font-size: 1.15rem;
  }

  &:last-of-type {
    margin: 0 0 1rem;
  }
`
export const ProjectLink = styled(Link)`
  ${mediaQuery.min_desktop} {
    margin: 0 0 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--colors_secondary);
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const PhoneWrapper = styled.div`
  pointer-events: none;

  ${mediaQuery.min_desktop} {
    position: absolute;
    top: 160px;
    left: 85%;
    z-index: 2;
    width: 161px;
    /* outline: 1px solid red; */

    img {
      object-fit: contain !important;
    }
  }
`
export const PhoneImg = styled.div`
  ${mediaQuery.min_desktop} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 161px;
  }
`
export const PhoneWebImg = styled.div`
  ${mediaQuery.min_desktop} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 161px;
  }
`
