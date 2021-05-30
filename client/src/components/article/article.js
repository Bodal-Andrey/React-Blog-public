import React from "react";

const Article = ({ post }) => {
  return (
    <article className={post.className}>
      <div className="articles-header">
        <time dateTime="2016-10-11">12 hours ago</time>
        <span className="articles-header-tag">New</span>
        <span className="articles-header-category"><a title="" href="#">{post.category}</a></span>
      </div>
      <div className="articles-content">
        <h1><a title href="blog_post.html">{post.title}</a></h1>
        <p>{post.text}</p>
      </div>
      <div className="articles-footer">
        <ul className="articles-footer-info">
          <li><a title href="#" className="light-link"><i className="pe-7s-comment" /> 7 Response</a>
          </li>
          <li><a title href="#" className="light-link"><i className="pe-7s-like" /> {post.likes}</a></li>
        </ul>
        <a title className="btn" href="blog_post.html">Read more</a>
      </div>
    </article>
  );
};

export default Article;
