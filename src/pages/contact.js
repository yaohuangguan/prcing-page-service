import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://next-bananaboom.herokuapp.com/api/homepage')
    const data = response.json()
    console.log(data)
  }
  return (
    <Layout>
      <Helmet>
        <title>联系我 — {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Learn More</h1>
          <p>让我帮助你打造自己的品牌 &rarr;</p>
        </div>
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div>
              <label htmlFor="sender">Email</label>
              <input type="email" name="sender" id="sender"/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject"/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`