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
  PublishedWrapper,
  UpdatedWrapper,
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
        <PublishedWrapper>
          <strong>Published:</strong> {dateBlogPublished}
        </PublishedWrapper>
        {dateBlogUpdated && (
          <UpdatedWrapper>
            <strong>Updated:</strong> {dateBlogUpdated}
          </UpdatedWrapper>
        )}
      </PageHeaderWrapper>
      <PageBody>
        <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
      </PageBody>
    </Layout>
  )
}

export const Head = ({
  data: {
    gcms: { blog },
  },
}) => <Seo title={blog.articleTitle} />

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
