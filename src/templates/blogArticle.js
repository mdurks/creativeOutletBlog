import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import highlightCode from "../utilities/highlightCode"
import { formatDate } from "../utilities/general"

import {
  // PageHeaderWrapper,
  PageHeader,
  PageBody,
  PublishedWrapper,
  // UpdatedWrapper,
} from "../components/page.styles"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

const IndexPage = ({
  data: {
    gcms: { blog },
  },
}) => {
  const dateBlogPublished = formatDate(blog.createdAt)
  // const dateBlogUpdated = blog?.updatedAt ? formatDate(blog.updatedAt) : false

  let hyphenIndex = blog.articleTitle.indexOf("-")
  if (hyphenIndex !== -1) {
    hyphenIndex = {
      highlight: blog.articleTitle.substring(0, hyphenIndex),
      remainder: blog.articleTitle.substring(hyphenIndex),
    }
  }

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
        {/* <div className="centralColumn" style={{ opacity: 0 }}> */}
        <div className="centralColumn">
          <PageHeader>
            {hyphenIndex.highlight ? (
              <>
                <span>{hyphenIndex.highlight}</span>
                {hyphenIndex.remainder}
              </>
            ) : (
              blog.articleTitle
            )}
          </PageHeader>
          <PublishedWrapper>
            <strong>Published:</strong> {dateBlogPublished}
          </PublishedWrapper>
          {/* {dateBlogUpdated && (
            <UpdatedWrapper>
              <strong>Updated:</strong> {dateBlogUpdated}
            </UpdatedWrapper>
          )} */}
        </div>
        <ThreeJSCanvas techIcons={blog.techIcons} />
      </div>
      <PageBody>
        {blog.myRichTextComponent.map((text, index) => (
          <div
            key={text.id}
            className={richTextClassNames[index]}
            dangerouslySetInnerHTML={{ __html: text.richText.html }}
          />
        ))}

        {blog.content.html !== "<p></p>" && (
          <div className="contentBlock">
            <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
          </div>
        )}
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
        techIcons
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
