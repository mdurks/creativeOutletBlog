import * as React from "react"
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

        <p>
          What started out as a hobby has turned in to a career for over two
          decades now. My passion is creating amazing user experiences delivered
          by great technology and clever solutions to problems. This blog is a
          place where I can experiment with technology and share my learnings.
        </p>

        <p>
          If you didn't come to this blog via my personal website, you can view
          this interactive 3D treehouse at:&nbsp;&nbsp;{" "}
          <a href="https://creativeoutlet.netlify.app/">
            https://creativeoutlet.netlify.app/
          </a>
        </p>

        <p>
          Reach out to me if you would like to get in touch:&nbsp;&nbsp;{" "}
          <a href="mailto:mdurks@gmail.com">mdurks@gmail.com</a>
        </p>

        <ProjectListWrapper>
          <ProjectListTitle>Projects:</ProjectListTitle>

          {/* Weather API */}
          <ProjectListItem to="/weather-charts-with-d3js/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-weather.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>Weather API</h2>
              <ProjectListTechList>
                <p>
                  React <span>-</span> D3 <span>-</span> Axios <span>-</span>{" "}
                  Framer Motion <span>-</span> Styled Components
                </p>
              </ProjectListTechList>
              <p>
                An exercise with weather data and drawing charts using the
                amazing charting library D3.js. Get weather data from around the
                world with a 7 day forecast and interactive charts.
              </p>
            </ProjectListContentCol>
          </ProjectListItem>

          {/* TVFAVS */}
          <ProjectListItem to="/tv-favs-using-redux-react-router-and-local-storage/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-tvfavs.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>TV FAVS</h2>
              <ProjectListTechList>
                <p>
                  React <span>-</span> Redux Toolkit <span>-</span> React Router{" "}
                  <span>-</span> Axios <span>-</span> Framer Motion
                  <span>-</span> Styled Components <span>-</span> DOM Purify
                </p>
              </ProjectListTechList>
              <p>
                An exercise with Redux Toolkit and React Router to search TV
                shows and save them as your favourites - in redux and
                localStorage.
              </p>
            </ProjectListContentCol>
          </ProjectListItem>

          {/* Treehouse */}
          <ProjectListItem to="/making-this-blog-with-gatsby-graphql-and-netlify/">
            <ProjectListPrimaryImg>
              <StaticImage
                src="../images/projectList/projectList-blog.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </ProjectListPrimaryImg>
            <ProjectListContentCol>
              <h2>Making this blog</h2>
              <ProjectListTechList>
                <p>
                  Gatsby <span>-</span> GraphQL <span>-</span> Hygraph{" "}
                  <span>-</span> Netlify <span>-</span> Styled Components{" "}
                  <span>-</span> Highlight.js
                </p>
              </ProjectListTechList>
              <p>
                A look at the tech stack behind the creation of this blog using
                Hygraph as a GraphQL headless CMS. Github, Netlify and Hypgrah
                combine to deliver CI/CD empowering the front end.
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
