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

  const richTextClassTypes = blog.myRichTextClassTypes?.split("").map(Number)
  const richTextClassMapping = {
    0: "contentBlock",
    1: "contentBlockDark code01",
    2: "contentBlockGray",
  }
  const richTextClassNames = richTextClassTypes?.map(number =>
    richTextClassMapping[number]
      ? richTextClassMapping[number]
      : richTextClassMapping[0]
  )

  useEffect(() => {
    highlightCode()
  })

  return (
    <Layout>
      <div className="heroBlock">
        <div className="centralColumn">
          <PageHeader>{blog.articleTitle}</PageHeader>
          <PublishedWrapper>
            <strong>Published:</strong> {dateBlogPublished}
          </PublishedWrapper>
          {dateBlogUpdated && (
            <UpdatedWrapper>
              <strong>Updated:</strong> {dateBlogUpdated}
            </UpdatedWrapper>
          )}
        </div>
      </div>
      <PageBody>
        {blog.myRichTextComponent.map((text, index) => (
          <div
            key={text.id}
            className={richTextClassNames[index]}
            dangerouslySetInnerHTML={{ __html: text.richText.html }}
          />
        ))}

        <div className="contentBlock">
          <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
        </div>
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
        myRichTextComponent {
          ... on GCMS_BlogRichTextComponent {
            id
            richText {
              html
            }
          }
        }
        myRichTextClassTypes
      }
    }
  }
`

export default IndexPage
