import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import "../components/layout/index.css";

function IndexPage() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Come, take the plunge into Fortnite.</h1>
          <p>Trying to use best tooling system.</p>
          <Link to="/page-2/">Dummy Button</Link> <br />
        </div>
      </div>
     </div>
  )
}

export default IndexPage
