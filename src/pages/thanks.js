import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WebPage = () => {
  return (
    <Layout showFooterForm={false}>
      <div className="contentBlock">
        <div className="centralColumn">
          <br />
          <h2 className="noTextTransform colorSecondary">
            Thank you for your message,
          </h2>
          <p>
            <strong>
              Thank you for taking the time to reach out to me, I will respond
              as soon as possible and I look forward to working together.
            </strong>
          </p>
          <p>
            Kind regards,
            <strong>
              <br />
              Michael
            </strong>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Thank you for your message" />

export default WebPage
