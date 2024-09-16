import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import {
//   PageBody,
//   HeaderHeroImg,
//   ProjectListWrapper,
//   ProjectListTitle,
//   ProjectListItem,
//   ProjectListPrimaryImg,
//   ProjectListContentCol,
//   ProjectListTechList,
//   CardList,
//   CardListItem,
//   CardListItemLink,
// } from "../components/page.styles"

const pageQuery = graphql`
  {
    gcms {
      blogs(stage: PUBLISHED, orderBy: createdAt_ASC) {
        id
        articleTitle
        slug
        blogCategory
        createdAt
        content {
          html
        }
      }
    }
  }
`

const WebPage = () => {
  const {
    gcms: { blogs },
  } = useStaticQuery(pageQuery)

  const blogData = [...blogs]
  blogData.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  // const blogDataAccessibility = blogData.filter(
  //   blog => blog.blogCategory === "Accessibility"
  // )

  return (
    <Layout>
      {/* <HeaderHeroImg>
        <StaticImage
          src="../images/co-treehouse-ultrawide.jpg"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Creative Outlet Treehouse"
        />
      </HeaderHeroImg> */}
      <div className="heroBlock">
        <div className="centralColumn">
          <p>
            Hi, my name's Michael and welcome to my Creative Outlet blog, where
            I share my passion for web development, 3D, and other digital
            pursuits. With over two decades of experience, I'm passionate about
            crafting outstanding digital experiences powered by innovative
            technology and smart problem-solving.
          </p>
        </div>
      </div>

      <div className="contentBlock">
        <section className="centralColumn">
          <h1>Topics Coming Soon:</h1>
          <p>Blender</p>
          <p>Web AR</p>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Web" />

export default WebPage
