import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => {
  const {
    frontmatter: { path, thumbnail, title, tool, price, price_info },
  } = post;
  return (
    <article className="card ">
      <Link to={path}>
        {!!thumbnail && <img src={thumbnail} alt={title + "- Featured Shot"} />}
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={path} className="post-link">
            {title}
          </Link>
        </h2>
        <div className="post-meta">{tool}</div>
        <div className="primary-content">{price}</div>
        <div className="post-meta">{price_info}</div>
        <div className="post-meta">以上价格不包含域名费用</div>
      </header>
    </article>
  );
};
export default PostLink;
