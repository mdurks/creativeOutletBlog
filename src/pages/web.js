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
} from "../components/page.styles"

const pageQuery = graphql`
  {
    gcms {
      blogs(stage: PUBLISHED, orderBy: createdAt_ASC) {
        id
        articleTitle
        slug
        blogCategory
        createdAt
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

  const blogDataMisc = blogData.filter(blog => blog.blogCategory === "Misc")
  console.log("blogDataMisc", blogDataMisc)

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
          <p>Web:</p>
        </div>
      </div>

      <div className="contentBlock">
        <div className="centralColumn">
          {blogDataMisc.map(article => (
            <div key={article.id}>
              <ProjectListItem to={`/${article.slug}/`}>
                <ProjectListPrimaryImg>
                  <StaticImage
                    src="../images/projectList/projectList-wentworths.jpg"
                    loading="eager"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Creative Outlet Treehouse"
                  />
                </ProjectListPrimaryImg>
                <ProjectListContentCol>
                  <h2>{article.articleTitle}</h2>
                  <p>A work in progress project for a boutique jewellers.</p>
                </ProjectListContentCol>
              </ProjectListItem>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Web" />

export default WebPage
