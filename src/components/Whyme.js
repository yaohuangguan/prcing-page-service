import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Whyme = () => (
  <StaticQuery
    query={graphql`
      query WhymeQuery {
        site {
          siteMetadata {
            home {
              whyme
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <h3 className="post-title">
          让所有人都能拥有自己的网站{" "}
          <a className='post-meta' href="https://www.yaobaiyang.com/resume/ch-cn">更多介绍</a>
        </h3>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.whyme}</p>
        </div>
      </div>
    )}
  />
);

export default Whyme;
