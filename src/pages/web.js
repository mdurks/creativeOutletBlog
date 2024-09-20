import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  CardList,
  CardListItem,
  CardListItemLink,
} from "../components/page.styles"
import { truncateHtml } from "../utilities/truncateHtml"
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

  const blogDataAccessibility = blogData.filter(
    blog => blog.blogCategory === "Accessibility"
  )

  return (
    <Layout>
      <div className="heroBlock">
        <div className="emptySpacing"></div>
        <ThreeJSCanvas cubesCount={150} techIcons={[]} />
      </div>

      <div className="contentBlock">
        <section className="centralColumn">
          <h1>Accessibility:</h1>
          <CardList>
            {blogDataAccessibility.map(article => (
              <CardListItem key={article.id}>
                <CardListItemLink to={`/${article.slug}/`}>
                  <h2>{article.articleTitle.slice(16)}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncateHtml(article.content.html),
                    }}
                  />
                  <strong>Read more...</strong>
                </CardListItemLink>
              </CardListItem>
            ))}
          </CardList>
        </section>
      </div>

      <div className="contentBlockDark">
        <section className="centralColumn">
          <h1>Topics Coming Soon:</h1>

          <p>React</p>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
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
