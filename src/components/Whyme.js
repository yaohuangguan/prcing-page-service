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
        <h4>
          为什么选择我?{" "}
          <a href="https://www.yaobaiyang.com/resume/ch-cn">更多介绍</a>
        </h4>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.whyme}</p>
        </div>
      </div>
    )}
  />
);

export default Whyme;
