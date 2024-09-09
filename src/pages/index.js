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
      {/* <HeaderHeroImg>
        <StaticImage
          src="../images/co-treehouse-ultrawide.jpg"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Creative Outlet Treehouse"
        />
      </HeaderHeroImg> */}
      <div className="heroBlock overFlowHidden">
        <div className="centralColumn">
          <div className="introBanner">
            <p className="heroBannerText">
              Hi, my name's Michael and welcome to my blog where I share my
              passion for web development, 3D and other digital pursuits. With
              over two decades of expertise, I'm passionate about crafting
              outstanding digital experiences.
            </p>
            <div className="heroBannerTreehouseLogo">
              <StaticImage
                src="../images/avatarLarge.png"
                loading="eager"
                quality={100}
                // width={452}
                // layout="fixed"
                // layout="constrained"
                objectFit="contain"
                // formats={["auto", "webp", "avif"]}
                alt="Creative Outlet Treehouse"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contentBlock">
        <div className="centralColumn">
          <ProjectListTitle>My Projects:</ProjectListTitle>

          <ProjectListWrapper>
            {/* Weather API */}
            <ProjectListItem to="/ring-configurator-three-js-r3f-drei-web-xr-gsap-zustand-vite/">
              <ProjectListPrimaryImg>
                <StaticImage
                  src="../images/projectList/projectList-ringConfigurator.jpg"
                  loading="eager"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Creative Outlet Treehouse"
                />
              </ProjectListPrimaryImg>
              <ProjectListContentCol>
                <h2>Ring Configurator</h2>
                <ProjectListTechList>
                  <p>
                    Three.js <span>- </span>
                    R3F <span>- </span>
                    Drei <span>- </span>
                    Web XR <span>- </span>
                    GSAP <span>- </span>
                    Zustand <span>- </span>
                    Vite
                  </p>
                </ProjectListTechList>
                <p>
                  Create your dream ring in immersive 3D amongst a beautiful
                  garden and gazebo setting by choosing gem color, ring type and
                  metal. Finally "try on" the ring with Web AR and your phones
                  camera.
                </p>
                <strong>View Project</strong>
              </ProjectListContentCol>
            </ProjectListItem>

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
                <h2>Weather App</h2>
                <ProjectListTechList>
                  <p>
                    React <span>-</span> D3 <span>-</span> Axios <span>-</span>{" "}
                    Framer Motion <span>-</span> Styled Components
                  </p>
                </ProjectListTechList>
                <p>
                  An exercise with weather data and drawing charts using the
                  amazing charting library D3.js. Get weather data from around
                  the world with a 7 day forecast and interactive charts.
                </p>
                <strong>View Project</strong>
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
                    React <span>-</span> Redux Toolkit <span>-</span> React
                    Router <span>-</span> Axios <span>-</span> Framer Motion
                    <span>-</span> Styled Components <span>-</span> DOM Purify
                  </p>
                </ProjectListTechList>
                <p>
                  An exercise with Redux Toolkit and React Router to search TV
                  shows and save them as your favourites - in redux and
                  localStorage.
                </p>
                <strong>View Project</strong>
              </ProjectListContentCol>
            </ProjectListItem>

            {/* Blog */}
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
                  A look at the tech stack behind the creation of this blog
                  using Hygraph as a GraphQL headless CMS. Github, Netlify and
                  Hypgrah combine to deliver CI/CD empowering the front end.
                </p>
                <strong>View Project</strong>
              </ProjectListContentCol>
            </ProjectListItem>

            {/* Wenworths */}
            <ProjectListItem to="/wentworth-jewels/">
              <ProjectListPrimaryImg>
                <StaticImage
                  src="../images/projectList/projectList-wentworths.jpg"
                  loading="eager"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Creative Outlet Treehouse"
                />
              </ProjectListPrimaryImg>
              <ProjectListContentCol>
                <h2>Wentworth Jewels</h2>
                <p>A work in progress project for a boutique jewellers.</p>
                <strong>View Project</strong>
              </ProjectListContentCol>
            </ProjectListItem>
          </ProjectListWrapper>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
