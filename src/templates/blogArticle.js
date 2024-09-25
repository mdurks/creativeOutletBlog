import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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

  const blogRichTextComponentsMinusTheFirst = [...blog.myRichTextComponent]
  blogRichTextComponentsMinusTheFirst.shift()

  const techIconMapping = {
    axios: {
      label: "axios",
      cssClass: "yellow",
      website: "https://axios-http.com/",
    },
    d3: {
      label: "d3",
      cssClass: "blue",
      website: "https://d3js.org/",
    },
    framermotion: {
      label: "framer motion",
      cssClass: "pink",
      website: "https://www.framer.com/motion/",
    },
    gatsby: {
      label: "gatsby",
      cssClass: "yellow",
      website: "https://www.gatsbyjs.com/",
    },
    graphql: {
      label: "graphql",
      cssClass: "tealLight",
      website: "https://graphql.org/",
    },
    gsap: {
      label: "GreenSock animation platform",
      cssClass: "tanzaniteDark",
      website: "https://gsap.com/",
    },
    hygraph: {
      label: "hygraph",
      cssClass: "tanzaniteDark",
      website: "https://hygraph.com/",
    },
    netlify: {
      label: "netlify",
      cssClass: "pinkPaleLight",
      website: "https://www.netlify.com/",
    },
    r3f: {
      label: "React three fiber",
      cssClass: "tealDark",
      website: "https://r3f.docs.pmnd.rs/getting-started/introduction",
    },
    react: {
      label: "react",
      cssClass: "blueBlack",
      website: "https://react.dev/",
    },
    reactrouter: {
      label: "React router",
      cssClass: "greenDark",
      website: "https://reactrouter.com/",
    },
    reduxtoolkit: {
      label: "Redux Toolkit",
      cssClass: "tealLight",
      website: "https://redux-toolkit.js.org/",
    },
    styledcomponents: {
      label: "styled components",
      cssClass: "greyLight",
      website: "https://styled-components.com/",
    },
    threejs: {
      label: "three.js",
      cssClass: "greyLight",
      website: "https://threejs.org/",
    },
    vite: {
      label: "vite",
      cssClass: "pink",
      website: "https://vitejs.dev/",
    },
    webxr: {
      label: "Web XR",
      cssClass: "pinkPaleLight",
      website: "https://immersiveweb.dev/",
    },
    zustand: {
      label: "zustand",
      cssClass: "yellow",
      website: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    },
  }

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
