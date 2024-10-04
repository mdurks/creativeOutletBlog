import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

import {
  CardList,
  CardListItem,
  CardListItemLink,
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

  const techIcons = [
    "IconSuzanne",
    "IconGear",
    "IconTorus",
    "IconCone",
    "IconSphere",
    "IconCube",
    "IconTeapot",
  ]

  return (
    <Layout>
      <div className="heroBlock">
        <div className="grid"></div>
        <div className="emptySpacing"></div>
        <ThreeJSCanvas cubesCount={125} techIcons={techIcons} />
      </div>

      <div className="contentBlock">
        <section className="centralColumn">
          <h1>Articles Coming Soon:</h1>

          <p>
            The following are some topics I have planned for writing articles
            about, covering my experience producing 3D content in Blender, often
            for use in Three.js.
          </p>

          <CardList>
            <CardListItem>
              <CardListItemLink to="#">
                <h2>Introduction to Blender for Three.js</h2>
                <p>
                  Overview of how Blender can be used to create 3D models for
                  web applications using Three.js. This topic covers the basic
                  concepts of modeling, texturing, and how Blender integrates
                  with Three.js to create interactive 3D experiences on the web.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>Setting Up Blender for Three.js Export</h2>
                <p>
                  How to prepare Blender for exporting models to formats
                  compatible with Three.js. This includes the necessary export
                  settings, dealing with model scaling issues, and optimizing
                  exports for performance. The use of glTF, FBX, and OBJ formats
                  is discussed, along with their benefits and drawbacks.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>Creating Low-Poly Models for Three.js</h2>
                <p>
                  The importance of low-poly modeling for web-based applications
                  is explored, with a focus on performance. This topic covers
                  how to create a simple low-poly model in Blender and optimize
                  it for use in Three.js, including techniques like simplifying
                  geometry and reducing polygon counts.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>UV Mapping and Texturing in Blender for Web</h2>
                <p>
                  Details the process of UV mapping and its role in applying
                  textures to 3D models. This topic explains how to create and
                  apply textures in Blender, how to export them, and how to
                  optimize textures for Three.js, considering file size and
                  format.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>PBR Materials in Blender and Three.js</h2>
                <p>
                  An introduction to Physically Based Rendering (PBR) and how to
                  create realistic PBR materials in Blender for use in Three.js.
                  The topic covers the creation and export of materials with
                  properties like metalness, roughness, and normal maps.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>Interactive 3D Models</h2>
                <p>
                  Covers the process of making models interactive in Three.js,
                  such as adding clickable or hoverable elements. It includes
                  steps on how to export specific parts of a model from Blender
                  and interact with them in Three.js.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>Working with Animations</h2>
                <p>
                  Focuses on exporting animated models from Blender and how to
                  trigger and control these animations in Three.js.
                </p>
              </CardListItemLink>
            </CardListItem>

            <CardListItem>
              <CardListItemLink to="#">
                <h2>Common Issues and Fixes</h2>
                <p>
                  Solutions to common problems encountered when exporting models
                  from Blender to Three.js, such as incorrect scaling, missing
                  textures, or animation issues. This topic provides
                  troubleshooting tips and suggestions to overcome these
                  challenges.
                </p>
              </CardListItemLink>
            </CardListItem>
          </CardList>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="3D" />

export default WebPage
