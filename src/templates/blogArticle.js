import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import highlightCode from "../utilities/highlightCode"
import { formatDate } from "../utilities/general"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"
import { techIconMapping } from "./techIconMapping"

import {
  PageHeader,
  PageBody,
  PublishedWrapper,
} from "../components/page.styles"

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

  const blogRichTextComponentsMinusTheFirst = [...blog.myRichTextComponent]
  blogRichTextComponentsMinusTheFirst.shift()

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
        {richTextClassNames.length > 0 && (
          <div className={richTextClassNames[0]}>
            {blog.techIcons && (
              <div className="skillBooks">
                {blog.techIcons.map((icon, index) => {
                  const targetIconMap =
                    techIconMapping[icon.toLowerCase().slice(4)]
                  return (
                    <a
                      key={icon}
                      href={targetIconMap.website}
                      className="bookImg"
                    >
                      <StaticImage
                        src="../images/smallBlankBook.png"
                        className={targetIconMap.cssClass}
                        loading="eager"
                        quality={100}
                        width={164}
                        objectFit="contain"
                        // formats={["auto", "webp", "avif"]}
                        alt=""
                      />
                      <div className="svgWrapper">
                        <img
                          src={blog.techIconSvGs[index].url}
                          width="100"
                          alt=""
                        />
                      </div>
                      <div className="techLabel">{targetIconMap.label}</div>
                    </a>
                  )
                })}
              </div>
            )}

            {blog.myRichTextComponent[0] && (
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.myRichTextComponent[0].richText.html,
                }}
              />
            )}
          </div>
        )}

        {blogRichTextComponentsMinusTheFirst.map((text, index) => (
          <div
            key={text.id}
            className={richTextClassNames[index + 1]}
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
        techIconSvGs {
          url
        }
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
