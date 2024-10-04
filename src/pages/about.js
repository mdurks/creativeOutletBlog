import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

const WebPage = () => {
  const {
    gcms: { abouts },
  } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <div className="heroBlock">
        <div className="grid"></div>
        <div className="emptySpacing"></div>
        <ThreeJSCanvas cubesCount={150} techIcons={[]} />
      </div>

      <div className="contentBlock">
        <div className="centralColumn aboutIntroText">
          <h2 className="noTextTransform">Hi there, I'm Michael,</h2>
          <p>
            <img
              className="edinburghPhotographer"
              src="/edinburgh-photographer.jpg"
              alt="Taking a photograph in Edinburgh"
            />
            I live in Manchester, UK, I'm a web developer with a passion for
            creating engaging user interfaces and I love building intuitive,
            efficient systems that are enjoyable to use. My practical nature
            drives me to see things working - I simply can't rest until they do.
            I primarily work with HTML, CSS, and JavaScript, although I draw
            upon my graphic design, photography and typography skills from my
            early days.
          </p>
          <p>
            Currently my focus is on React, Three.js and 3D web experiences. I'm
            learning TypeScript, unit, integration and E2E testing to add these
            to my skillset.
          </p>
          <p>
            What started as a hobby has evolved into an exciting career, taking
            me on a fantastic life journey. I've had the opportunity to travel
            and work in different countries, lecture at a university, and
            collaborate with some amazing people along the way.
          </p>
        </div>
        <div className="footerTear"></div>
      </div>

      <div className="contentBlock hobbySection">
        <div className="videoBackground">
          <video autoPlay muted loop>
            {/*
              <source src="/snowboarding-meribel-480p-av1.mp4" type="video/mp4" />
              <source src="/snowboarding-meribel-480p-hevc.mp4" type="video/mp4" />
              <source src="/snowboarding-meribel-480p-h264.mp4" type="video/mp4" />
            */}
            {abouts[0].hobbyVideo.map(video => (
              <source key={video.id} src={video.url} type="video/mp4" />
            ))}
          </video>
        </div>
        <div className="hobbySectionParallax">
          <div className="parallaxItem">
            <img
              className="propose"
              src="/meribelPropose.jpg"
              alt="Engaged in Meribel"
            />
            <img
              className="meribel"
              src="/logo_meribel3v.svg"
              alt="Meribel logo"
              width="60"
            />
          </div>
        </div>
      </div>

      <div className="contentBlock">
        <div className="centralColumn">
          <div className="standOutHeadings">
            <h2>I feel blessed</h2> to be married to my beautiful wife and to
            have two wonderful children who bring me endless joy and motivation
            to be the best I can for them.
          </div>
          <div className="standOutHeadings">
            <h2>I love to teach, and learn!</h2> I've been tinkering with
            computers since the late 1980s and in the fast-paced world of web
            development, I've gained invaluable knowledge over 25 years,
            constantly inspired by the incredible resources shared within the
            open-source web community.
          </div>
          <div className="standOutHeadings">
            <h2>I've equally enjoyed giving back</h2>, whether through lecturing
            or advocating for key causes like <strong>accessibility</strong> and
            <strong> page speed performance</strong>. I've shared my expertise
            with various development teams, businesses, and organizations,
            helping to drive positive change in the industry.
          </div>
        </div>
      </div>

      <div className="contentBlockDark">
        <div className="centralColumn careerContainer">
          <h2>Career info:</h2>

          <div className="">
            <section>
              <h3 className="experience-title">
                Senior 3D Developer at Victorian Plumbing Ltd, Manchester
              </h3>
              <p className="experience-date">Sept 2024 - Present</p>
              <p>
                Victorian Plumbing is the UK's number 1 bathroom retailer with
                revenues just under one million pounds per day. I joined a team
                of 4 to completely rebuild the customer-facing website.
              </p>
              <div className="experience">
                <div className="col1"></div>
                <div className="col2">
                  <ul>
                    <li>
                      Promoted to develop the interactive 3D bathroom planner
                      using WebGL, Three JS, React Three Fiber
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="experience-title">
                React Front End Developer at Victorian Plumbing Ltd, Manchester
              </h3>
              <p className="experience-date">Sept 2021 - Sept 2024</p>
              <p>
                Victorian Plumbing is the UK's number 1 bathroom retailer with
                revenues just under one million pounds per day. I joined a team
                of 4 to completely rebuild the customer-facing website.
              </p>
              <div className="experience">
                <div className="col1"></div>
                <div className="col2">
                  <ul>
                    <li>
                      Worked with a bespoke React single-page app built using
                      Express and Umbraco CMS
                    </li>
                    <li>
                      Utilised backend APIs for products, stock, delivery,
                      basket, and checkout information
                    </li>
                    <li>
                      Extensively used Redux for state management alongside
                      local and session storage
                    </li>
                    <li>
                      Championed accessibility, delivering training and
                      workshops for the IT team
                    </li>
                    <li>
                      Followed atomic design principles to structure codebase
                      and components
                    </li>
                    <li>
                      Managed styling using CSS-in-JS styled components with
                      Figma and an internal component library
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="experience-title">
                Front End Developer at Beeta Tech Ltd, Manchester
              </h3>
              <p className="experience-date">July 2020 - Aug 2021</p>
              <div className="experience">
                <div className="col1"></div>
                <div className="col2">
                  <ul>
                    <li>
                      Built the front end of a food delivery service website
                      receiving products via an API
                    </li>
                    <li>
                      Styled the back-end CMS managing orders, products, stock &
                      customers using Bootstrap and custom CSS
                    </li>
                    <li>
                      Developed a front end for a product enabling AI-driven
                      chatbot creation
                    </li>
                    <li>
                      Built a website facilitating the application of "green
                      home grants" from the government
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="experience-title">
                Front End Developer at Ripe Insurance Services Ltd, Manchester
              </h3>
              <p className="experience-date">Sept 2017 - March 2020</p>
              <p>
                Worked on multiple brands offering niche insurance for Golf,
                Shooting, Boats, Sport, Cycling, and Photography
              </p>
              <div className="experience">
                <div className="col1"></div>
                <div className="col2">
                  <ul>
                    <li>
                      Researched and introduced Google AMP technology,
                      quadrupling conversion rates and doubling revenue
                    </li>
                    <li>
                      Optimised PageSpeed scores, greatly improving ranking
                      positions and reducing loading times
                    </li>
                    <li>
                      Delivered projects using React and Gatsby, expanding
                      JavaScript knowledge
                    </li>
                    <li>
                      Delivered training on website performance, setting
                      standards and best practices
                    </li>
                    <li>Used new technologies: GIT, GIT Flow, TDD</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="experience-title">
                Senior Front End Developer at ThinkMoney Group, Manchester
              </h3>
              <p className="experience-date">Sept 2013 - Aug 2017</p>
              <div className="experience">
                <div className="col1"></div>
                <div className="col2">
                  <ul>
                    <li>
                      Built websites from the ground up, developing fast,
                      attractive, accessible websites
                    </li>
                    <li>
                      Optimised load times, improving PageSpeed scores and
                      significantly reducing load times
                    </li>
                    <li>
                      Led a team of up to 5 junior-mid level developers,
                      applying best practices and raising team abilities
                    </li>
                    <li>
                      Introduced Gulp to streamline workflows and optimise
                      front-end strategies
                    </li>
                    <li>
                      Improved PPC campaigns with A/B testing, raising
                      conversions from 10% to over 30%
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="experience-title">
                Self Employed, Web Design Business: 'Creative Outlet'
              </h3>
              <p className="experience-date">Jan 2004 - Sept 2013</p>
              <p>
                Managed multiple client contracts, delivering web design,
                branding, and development for various businesses
              </p>
              <div className="experience">
                <div className="col1"></div>
                <div className="col2">
                  <ul>
                    <li>
                      <h4>JD Williams:</h4> Managed large retail brand accounts,
                      increasing turnover from £80,000-120,000k to
                      £300,000-400,000 per week
                    </li>
                    <li>
                      <h4>Wentworths:</h4> Created a strong brand identity and
                      achieved high SEO rankings for targeted keywords
                    </li>
                    <li>
                      <h4>SONY.com & Dabs.com:</h4> Maintained brand identity
                      while working on high-traffic e-commerce websites
                    </li>
                    <li>
                      <h4>Salford University, IT Lecturer:</h4> Planned and
                      delivered courses for 40 graduate students, achieving
                      excellent grading results
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="experience-title">
                Web Designer at Influence Design Agency, Manchester
              </h3>
              <p className="experience-date">Sept 2002 - Dec 2003</p>
            </section>

            <section>
              <h3 className="experience-title">
                Web Designer at ASP Global, Salford
              </h3>
              <p className="experience-date">Feb 1999 - Aug 2002</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

const pageQuery = graphql`
  {
    gcms {
      abouts {
        hobbyVideo {
          id
          url
        }
      }
    }
  }
`

export default WebPage
