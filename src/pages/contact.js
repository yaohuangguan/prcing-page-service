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
    // const response = await fetch('https://next-bananaboom.herokuapp.com/api/homepage',{
    //   mode:'no-cors'
    // })
    // const data = await response.json()
    // console.log(data)
    alert('请直接联系sam的微信号')
  }
  return (
    <Layout>
      <Helmet>
        <title>了解详情 — {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">了解详情</h1>
          <p>让我帮助你打造自己的品牌 &rarr;</p>
        </div>
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">名称</label>
              <input type="text" name="name" id="name" placeholder='请直接联系微信号by719919153'/>
            </div>
            <div>
              <label htmlFor="sender">邮箱</label>
              <input type="email" name="sender" id="sender" placeholder='请直接联系微信号by719919153' />
            </div>
          
            <div>
              <label htmlFor="message">信息</label>
              <textarea placeholder='请直接联系微信号by719919153' name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input placeholder='请直接联系微信号by719919153' type="submit" className="button -primary" style={{marginRight: 0}} />
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