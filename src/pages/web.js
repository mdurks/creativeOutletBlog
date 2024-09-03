import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  PageBody,
  HeaderHeroImg,
  ProjectListWrapper,
  ProjectListTitle,
  ProjectListItem,
  ProjectListPrimaryImg,
  ProjectListContentCol,
  ProjectListTechList,
  CardList,
  CardListItem,
  CardListItemLink,
} from "../components/page.styles"
// import { truncateHtml } from "../utilities/truncateHtml"

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
          <h1>Accessibility:</h1>
          <CardList>
            {blogDataAccessibility.map(article => (
              <CardListItem key={article.id}>
                <CardListItemLink to={`/${article.slug}/`}>
                  <h2>{article.articleTitle.slice(16)}</h2>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: truncateHtml(article.content.html),
                    }}
                  /> */}
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

      <div className="contentBlock">
        <section className="centralColumn"></section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Web" />

export default WebPage
