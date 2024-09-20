import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

const WebPage = () => {
  return (
    <Layout>
      <div className="heroBlock">
        <div className="emptySpacing"></div>
        <ThreeJSCanvas cubesCount={150} techIcons={[]} />
      </div>

      <div className="contentBlock">
        <section className="centralColumn">
          <h1>Once upon a time...</h1>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Web" />

export default WebPage
