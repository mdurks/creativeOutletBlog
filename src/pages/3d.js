import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

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

  const techIcons = [
    "IconSuzanne",
    "IconGear",
    "IconTorus",
    "IconCone",
    "IconSphere",
    "IconCube",
    "IconTeapot",
  ]

  return (
    <Layout>
      <div className="heroBlock">
        <div className="grid"></div>
        <div className="emptySpacing"></div>
        <ThreeJSCanvas cubesCount={125} techIcons={techIcons} />
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
