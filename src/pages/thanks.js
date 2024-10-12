import * as React from "react"
import { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WebPage = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const nameFromUrl = params.get("name")
      ? decodeURIComponent(params.get("name"))
      : ""
    setName(nameFromUrl)
  }, [])

  return (
    <Layout showFooterForm={false}>
      <div className="contentBlock">
        <div className="centralColumn">
          <br />
          <h2 className="noTextTransform colorSecondary">Hi {name},</h2>
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
