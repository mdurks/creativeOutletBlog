import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

import highlightCode from "../utilities/highlightCode"

import {
  PageHeaderWrapper,
  PageHeader,
  PageBody,
  StaticImageWrapper,
} from "../components/page.styles"

const IndexPage = () => {
  const articleBody =
    "&lt;StaticImageWrapper&gt;\n  &lt;StaticImage\n    src=&quot;../images/sampleCode.png&quot;\n    loading=&quot;eager&quot;\n    width={629}\n    quality={95}\n    formats={[&quot;auto&quot;, &quot;webp&quot;, &quot;avif&quot;]}\n    alt=&quot;sample code&quot;\n  /&gt;\n&lt;/StaticImageWrapper&gt;"
  const articleBody2 =
    'const blogThreeJSLinks = [\n  {\n    text: "Creative Outlet Treehouse4",\n    url: "/page-2",\n    activeClassName: "linkItemActive",\n  },\n  {\n    text: "Creative Outlet Treehouse5",\n    url: "/page-2",\n    activeClassName: "linkItemActive",\n  },\n  {\n    text: "Creative Outlet Treehouse6",\n    url: "/page-2",\n    activeClassName: "linkItemActive",\n  },\n]'

  useEffect(() => {
    highlightCode()
  })

  return (
    <Layout>
      <PageHeaderWrapper>
        <div>
          <strong>Category:</strong> Three JS
        </div>
        <div>
          <strong>Published:</strong> 12/12/2023
        </div>
        <PageHeader>Adding textures to a scene in ThreeJS</PageHeader>
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

        <pre>
          <code dangerouslySetInnerHTML={{ __html: articleBody }} />
        </pre>

        <pre>
          <code dangerouslySetInnerHTML={{ __html: articleBody2 }} />
        </pre>

        <h2>
          Using an array modifier to build a stair case around the tree trunk
        </h2>
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
