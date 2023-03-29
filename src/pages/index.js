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
        <PageHeader>Welcome</PageHeader>
      </PageHeaderWrapper>
      <PageBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          placerat accumsan consequat. Mauris vitae mi ullamcorper, sodales
          tortor eget, porta tortor. Sed vel augue quis risus varius pretium.
          Praesent fermentum massa sit amet{" "}
          <Link to="page-2">laoreet malesuada</Link>. Phasellus vel ornare ante,
          eget porttitor justo. Nam convallis, libero in maximus finibus, urna
          eros volutpat purus, quis placerat massa magna sit amet dui. Aenean in
          iaculis ante. Maecenas et vehicula metus. Sed fringilla odio non ipsum
          auctor congue. Cras mi urna, blandit in lacinia ut, hendrerit tempus
          sapien. Nunc pretium porta quam in commodo. Nam pharetra euismod
          scelerisque.
        </p>
        <StaticImageWrapper>
          <StaticImage
            src="../images/sampleCode.png"
            loading="eager"
            width={629}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="sample code"
          />
        </StaticImageWrapper>
        <p>
          Pellentesque lacinia egestas dolor, nec tristique velit condimentum
          ac. In sed pulvinar tortor. Mauris orci ex, vehicula in aliquam id,
          commodo et lacus. Morbi justo eros, rhoncus vel libero egestas,
          pulvinar congue mi. Nunc viverra commodo felis ut imperdiet. Fusce
          ultricies, velit sit amet interdum porta, neque mauris auctor mi, eu
          interdum mauris dui non nunc. Pellentesque ultricies felis tincidunt
          magna semper, in viverra purus fermentum. Nam a erat eu nunc
          condimentum ultricies non nec orci.
        </p>

        <ul>
          <li>lkjlkj lkj lkj lk</li>
          <li>lkjlkj lkj lkj lk</li>
          <li>lkjlkj lkj lkj lk</li>
        </ul>

        <h2>Nunc viverra commodo felis ut imperdiet</h2>
        <p>
          Pellentesque lacinia egestas dolor, nec tristique velit condimentum
          ac. In sed pulvinar tortor. Mauris orci ex, vehicula in aliquam id,
          commodo et lacus. Morbi justo eros, rhoncus vel libero egestas,
          pulvinar congue mi. Nunc viverra commodo felis ut imperdiet. Fusce
          ultricies, velit sit amet interdum porta, neque mauris auctor mi, eu
          interdum mauris dui non nunc. Pellentesque ultricies felis tincidunt
          magna semper, in viverra purus fermentum. Nam a erat eu nunc
          condimentum ultricies non nec orci.
        </p>
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
