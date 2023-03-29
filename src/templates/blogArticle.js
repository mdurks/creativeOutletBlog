import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import highlightCode from "../utilities/highlightCode"
import { formatDate } from "../utilities/general"

import {
  PageHeaderWrapper,
  PageHeader,
  PageBody,
} from "../components/page.styles"

const IndexPage = ({
  data: {
    gcms: { blog },
  },
}) => {
  const dateBlogPublished = formatDate(blog.createdAt)
  const dateBlogUpdated = blog?.updatedAt ? formatDate(blog.updatedAt) : false

  useEffect(() => {
    highlightCode()
  })

  return (
    <Layout>
      <PageHeaderWrapper>
        <PageHeader>{blog.articleTitle}</PageHeader>
        <div>
          <strong>Published:</strong> {dateBlogPublished}
        </div>
        {dateBlogUpdated && (
          <div>
            <strong>Updated:</strong> {dateBlogUpdated}
          </div>
        )}
      </PageHeaderWrapper>
      <PageBody>
        <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
      </PageBody>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query BlogPageQuery($id: ID!) {
    gcms {
      blog(where: { id: $id }) {
        id
        slug
        createdAt
        updatedAt
        articleTitle
        blogCategory
        content {
          html
        }
      }
    }
  }
`

export default IndexPage
