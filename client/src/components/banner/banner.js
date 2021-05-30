import React from "react";

const Banner = ({ post }) => {
  return (
    <div className={`${post.isBig ? `` : `col-lg-4`} col-md-6 col-xs-12`}>
      <div className="banner-wrapper">
        <a href="blog_post.html" title="">
          <div className="banner-wrapper-content">
            <h1 className="h2">{post.title}</h1>
            <span className="category-tag category-tag-white">{post.category}</span>
            <time dateTime="2016-01-18" className>January 18, 2016</time>
          </div>
        </a>
        <img className="img-fluid" src={post.image} alt="Post Photo" />
      </div>
    </div>
  );
};

export default Banner;
