import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"

export const ProjectList = () => {
  const [isMobile, setIsMobile] = useState(true)

  const projects = [
    {
      title: "Ring Configurator",
      stylesDesktop: {},
      sketchImg: "sketchGazebo",
      mainImgClass: "ringConfigurator",
      mobileImgClass: "ringConfigurator",
      skills: "Three.js - R3F - Drei - Web XR - GSAP - Zustand - Vite",
      body: 'Create your dream ring in immersive 3D amongst a beautiful garden and gazebo setting by choosing gem color, ring type and metal. Finally "try on" the ring with Web AR and your phones camera.',
      url: "/ring-configurator-three-js-r3f-drei-web-xr-gsap-zustand-vite/",
    },
    {
      title: "Weather App",
      stylesDesktop: {
        left: "140px",
        transform: "rotate(4deg)",
      },
      sketchImg: "sketchWeather",
      mainImgClass: "weather",
      mobileImgClass: "weather",
      skills: "React - D3 - Axios - Framer Motion - Styled Components",
      body: "An exercise with weather data and drawing charts using the amazing charting library D3.js. Get weather data from around the world with a 7 day forecast and interactive charts.",
      url: "/weather-charts-with-d3js/",
    },
    {
      title: "TV Favs",
      stylesDesktop: {
        marginTop: "4.25rem",
      },
      sketchImg: "sketchTv",
      mainImgClass: "tvFavs",
      mobileImgClass: "tvFavs",
      skills:
        "React, React Router, Redux Toolkit, Axios, Framer Motion, Styled Components",
      body: "Find your favourite TV shows from around the world using an API that returns global broadcasting data.  Easily save your shows to your device and never miss them again!",
      url: "/tv-favs-using-redux-react-router-and-local-storage/",
    },
    {
      title: "Making this blog",
      stylesDesktop: {
        left: "140px",
        marginTop: "1.25rem",
        transform: "rotate(3deg)",
      },
      sketchImg: "sketchComputerDesk",
      mainImgClass: "blog",
      mobileImgClass: "blog",
      skills:
        "Gatsby - GraphQL - Hygraph - Netlify - Styled Components - Highlight.js",
      body: "A look at the tech stack behind the creation of this blog using Hygraph as a GraphQL headless CMS. Github, Netlify and Hypgrah combine to deliver CI/CD empowering the front end.",
      url: "/making-this-blog-with-gatsby-graphql-and-netlify/",
    },
    {
      title: "Wentworth Jewels",
      stylesDesktop: {
        marginTop: "3.75rem",
      },
      sketchImg: "sketchRings",
      mainImgClass: "wentworths",
      mobileImgClass: "wentworths",
      skills: false,
      body: "A work in progress project for a boutique jewellers.",
      url: "/wentworth-jewels/",
    },
  ]

  useEffect(() => {
    if (window.innerWidth > 850) setIsMobile(false)
  }, [])

  return (
    <>
      <div className="projectList">
        {projects.map(project => (
          <div
            key={project.title}
            className="projectWrapper"
            style={isMobile ? {} : project.stylesDesktop}
          >
            {project.sketchImg && <div className={project.sketchImg}></div>}
            <div className="bookImg"></div>
            <div className={`mainImg ${project.mainImgClass}`}></div>

            <div className="bodyContent">
              <h2 className="projectTitle">{project.title}</h2>
              {project.skills && <p className="skillsList">{project.skills}</p>}
              {project.body && <p className="bodyText">{project.body}</p>}
              <Link className="projectLink" to={project.url}>
                View Project
              </Link>
            </div>

            <div className="phoneWrapper">
              <div className={`phoneWebImg ${project.mobileImgClass}`}></div>
              <div className="phoneImg"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
