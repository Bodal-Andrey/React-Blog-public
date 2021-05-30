import React from "react"

const ArticleContent = ({ post }) => {
    
    return (
        <div className="articles-content">
            <h1 className="articles-content-blog-post-title"><a href="#" title="">{post.title}</a></h1>
            <div className="articles-content-block">{post.text}</div>
        </div>
    );
};

export default ArticleContent;
