import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  CardList,
  CardListItem,
  CardListItemLink,
} from "../components/page.styles"
// import { truncateHtml } from "../utilities/truncateHtml"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

const pageQuery = graphql`
  {
    gcms {
      blogs(first: 100, orderBy: createdAt_ASC, stage: PUBLISHED) {
        id
        articleTitle
        slug
        summary
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
  // console.log("blogData", blogData)

  blogData.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  const blogDataAccessibility = blogData.filter(
    blog => blog.blogCategory === "Accessibility"
  )

  const blogDataReact = blogData.filter(blog => blog.blogCategory === "React")

  const techIcons = [
    "IconNetscape",
    "IconIE",
    "IconFirefox",
    "IconSafari",
    "IconChrome",
    "IconEdge",
    "IconHTML",
    "IconCSS",
    "IconJS",
    "IconTypescript",
    "IconTag",
    "IconArray",
    "IconParens",
    "IconBracket",
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
          <h1>React:</h1>
          <CardList>
            {blogDataReact.map(article => (
              <CardListItem key={article.id}>
                <CardListItemLink to={`/${article.slug}/`}>
                  <h2>{article.articleTitle.slice(8)}</h2>
                  <p>{article.summary}</p>
                  <strong>Read more...</strong>
                </CardListItemLink>
              </CardListItem>
            ))}
          </CardList>

          <h1>Accessibility:</h1>
          <CardList>
            {blogDataAccessibility.map(article => (
              <CardListItem key={article.id}>
                <CardListItemLink to={`/${article.slug}/`}>
                  <h2>{article.articleTitle.slice(16)}</h2>
                  <p>{article.summary}</p>
                  <strong>Read more...</strong>
                </CardListItemLink>
              </CardListItem>
            ))}
          </CardList>
        </section>
      </div>

      {/* <div className="contentBlock">
        <section className="centralColumn"></section>
      </div> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Web" />

export default WebPage
