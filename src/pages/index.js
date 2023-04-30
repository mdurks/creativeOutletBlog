import * as React from "react"
import { Link } from "gatsby"
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

const IndexPage = () => {
  return (
    <Layout>
      <HeaderHeroImg>
        <StaticImage
          src="../images/co-treehouse-ultrawide.jpg"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Creative Outlet Treehouse"
        />
      </HeaderHeroImg>
      <PageBody>
        <div className="headerTitle">
          <p>
            Welcome to creative outlet, my online space for web development, 3D,
            digital and various other interests.
          </p>
        </div>

        <ProjectListWrapper>
          <ProjectListTitle>Projects:</ProjectListTitle>
          {/* Weather API */}
          <ProjectListItem to="/weather-charts-with-d3js/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-weatherapi.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>Weather API</h2>
              <ProjectListTechList>
                <p>React - Redux - Axios - Styled Components</p>
              </ProjectListTechList>
              <p>
                Sed eu tristique erat. Cras pulvinar a magna ac commodo. Morbi
                justo odio, placerat nec augue id, laoreet cursus enim. Sed
                interdum nisl nisl, id euismod lacus malesuada non. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. In hac
                habitasse platea dictumst. Praesent viverra ornare condimentum.
                Morbi urna elit, fringilla ac blandit eget, scelerisque in
                augue. Vivamus auctor nulla vitae vulputate ultrices.
              </p>
            </ProjectListContentCol>
          </ProjectListItem>
          {/* TVFAVS */}
          <ProjectListItem to="/tv-favs-using-redux-react-router-and-local-storage/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-weatherapi.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>TV FAVS</h2>
              <ProjectListTechList>
                <p>React - Redux - Axios - Styled Components</p>
              </ProjectListTechList>
              <p>
                Sed eu tristique erat. Cras pulvinar a magna ac commodo. Morbi
                justo odio, placerat nec augue id, laoreet cursus enim. Sed
                interdum nisl nisl, id euismod lacus malesuada non. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. In hac
                habitasse platea dictumst. Praesent viverra ornare condimentum.
                Morbi urna elit, fringilla ac blandit eget, scelerisque in
                augue. Vivamus auctor nulla vitae vulputate ultrices.
              </p>
            </ProjectListContentCol>
          </ProjectListItem>
          {/* Wentworths */}
          <ProjectListItem to="/wentworth-jewels/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-weatherapi.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Wentworths"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>Wentworths</h2>
              <ProjectListTechList>
                <p>React - Redux - Axios - Styled Components</p>
              </ProjectListTechList>
              <p>
                Sed eu tristique erat. Cras pulvinar a magna ac commodo. Morbi
                justo odio, placerat nec augue id, laoreet cursus enim. Sed
                interdum nisl nisl, id euismod lacus malesuada non. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. In hac
                habitasse platea dictumst. Praesent viverra ornare condimentum.
                Morbi urna elit, fringilla ac blandit eget, scelerisque in
                augue. Vivamus auctor nulla vitae vulputate ultrices.
              </p>
            </ProjectListContentCol>
          </ProjectListItem>
          {/* Treehouse */}
          <ProjectListItem to="/weather-charts-with-d3js/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-weatherapi.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>Treehouse</h2>
              <ProjectListTechList>
                <p>React - Redux - Axios - Styled Components</p>
              </ProjectListTechList>
              <p>
                Sed eu tristique erat. Cras pulvinar a magna ac commodo. Morbi
                justo odio, placerat nec augue id, laoreet cursus enim. Sed
                interdum nisl nisl, id euismod lacus malesuada non. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. In hac
                habitasse platea dictumst. Praesent viverra ornare condimentum.
                Morbi urna elit, fringilla ac blandit eget, scelerisque in
                augue. Vivamus auctor nulla vitae vulputate ultrices.
              </p>
            </ProjectListContentCol>
          </ProjectListItem>
        </ProjectListWrapper>
      </PageBody>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
