import React from "react";

const ArticleHeader = ({post}) => {
    return (
        <div className="articles-header">
            <time dateTime="2016-10-11">12 hours ago</time>
            <span className="articles-header-tag-green">New</span>
            <span className="articles-header-category"><a href="#" className="green" title>{post.category}</a></span>
        </div>
    );
};

export default ArticleHeader;
