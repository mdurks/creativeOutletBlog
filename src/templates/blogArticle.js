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
  // console.log("blog", blog)

  const dateBlogPublished = formatDate(blog.createdAt)
  // const dateBlogUpdated = blog?.updatedAt ? formatDate(blog.updatedAt) : false

  /*


    Burndown List
    ----------------------------------------------------------------------

    Make 3D models for:
      - SASS, A11y
      - Blender
      - XYZ axis
      - Wireframe

    Write About page
    Get picture of me
    Ring Config - get picture of "Try it on"
    Ring Config - get animated GIFs of screenshots


  */

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
        {richTextClassNames && (
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
                      <div className="disableFadeEffect">
                        <StaticImage
                          src="../images/smallBlankBook.png"
                          className={targetIconMap.cssClass}
                          loading="eager"
                          quality={100}
                          width={164}
                          objectFit="contain"
                          placeholder="none"
                          // formats={["auto", "webp", "avif"]}
                          alt=""
                        />
                      </div>
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
              <>
                <div className="introTextAndPreviewWrapper">
                  <div
                    className="cmsContent"
                    dangerouslySetInnerHTML={{
                      __html: blog.myRichTextComponent[0].richText.html,
                    }}
                  />
                  <div className="previewWrapper">
                    <div className="previewWrapperInner">
                      <StaticImage
                        src="../images/project-desktop-preview.png"
                        loading="eager"
                        quality={100}
                        width={573}
                        objectFit="contain"
                        // placeholder="none"
                        // formats={["auto", "webp", "avif"]}
                        alt=""
                      />
                      {blog.introPreviewImage &&
                        blog.introPreviewImage.mimeType === "video/mp4" && (
                          <video className="previewMedia" autoPlay muted loop>
                            <source
                              // src="/ringconfigurator-desktop-preview.mp4"
                              src={blog.introPreviewImage.url}
                              type="video/mp4"
                            />
                          </video>
                        )}
                      {blog.introPreviewImage &&
                        blog.introPreviewImage.mimeType === "image/png" && (
                          <img
                            className="previewMedia"
                            src={blog.introPreviewImage.url}
                            alt=""
                          />
                        )}
                      {blog.projectWebsiteUrl && (
                        <a href={blog.projectWebsiteUrl}>Visit Website</a>
                      )}
                    </div>
                  </div>
                </div>
              </>
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
}) => <Seo title={blog.articleTitle} preloadImageUrls={blog.techIconSvGs} />

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
        introPreviewImage {
          url
          mimeType
        }
        projectWebsiteUrl
      }
    }
  }
`

export default IndexPage
