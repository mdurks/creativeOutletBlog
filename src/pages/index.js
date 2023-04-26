import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

import {
  PageHeaderWrapper,
  PageHeader,
  PageBody,
  StaticImageWrapper,
} from "../components/page.styles"

const IndexPage = () => {
  return (
    <Layout>
      <PageHeaderWrapper>
        <PageHeader>
          TV FAVs using Redux, React Router & Localstorage
        </PageHeader>
      </PageHeaderWrapper>
      <PageBody>
        <div className="quote">
          <p>
            I've always wanted a personal space where I can save projects, carry
            out experiments and share information with others so building my own
            blog was a great project to allow me to do that.
          </p>
        </div>
        <h2>Leveraging the "JAMstack"</h2>
        <p>
          <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas placerat accumsan consequat. Mauris vitae mi
          ullamcorper, sodales tortor eget, porta tortor. Sed vel augue quis
          risus varius pretium. Praesent fermentum massa sit amet{" "}
          <Link to="page-2">laoreet malesuada</Link>. Phasellus vel ornare ante,
          eget porttitor justo. Nam convallis, libero in maximus finibus, urna
          eros volutpat purus, quis placerat massa magna sit amet dui. Aenean in
          iaculis ante. Maecenas et vehicula metus. Sed fringilla odio non ipsum
          auctor congue. Cras mi urna, blandit in lacinia ut, hendrerit tempus
          sapien. Nunc pretium porta quam in commodo. Nam pharetra euismod
          scelerisque.
        </p>

        <ul>
          <li>lkjlkj lkj lkj lk</li>
          <li>lkjlkj lkj lkj lk</li>
          <li>lkjlkj lkj lkj lk</li>
        </ul>

        {/* <StaticImageWrapper>
          <StaticImage
            src="../images/sampleCode.png"
            loading="eager"
            width={629}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="sample code"
          />
        </StaticImageWrapper> */}
      </PageBody>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
