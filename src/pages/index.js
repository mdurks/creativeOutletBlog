import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { ProjectListTitle } from "../components/page.styles"
import { ProjectList } from "../components/ProjectList/ProjectList"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

const IndexPage = () => {
  return (
    <Layout>
      <div className="heroBlock">
        <div className="grid"></div>
        <div className="centralColumn">
          <div className="introBanner">
            <div className="heroBannerText">
              <h1>Hi there, I'm Michael</h1>
              <p>
                I started building websites around 1998, driven by a passion for
                crafting great digital experiences. I've worked in numerous
                front end positions over the years and taught web development at
                University. These days I'm exploring the world of 3D.
              </p>
              <p>
                <strong>
                  Let's dive in and <span>build some dreams!</span>
                </strong>
              </p>
            </div>
            <div className="heroBannerTreehouseLogo">
              <StaticImage
                src="../images/avatarLarge.png"
                loading="eager"
                quality={100}
                objectFit="contain"
                alt="Creative Outlet Treehouse"
              />
            </div>
          </div>
        </div>
        <ThreeJSCanvas cubesCount={100} techIcons={[]} />
      </div>

      <div className="contentBlock">
        <div className="centralColumn">
          <ProjectListTitle>Recent Projects:</ProjectListTitle>
          <ProjectList />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
