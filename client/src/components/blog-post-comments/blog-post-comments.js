import React from "react";
import Comment from "../comment";

const BlogPostComments = ({ post }) => {
  
  const comments = post.comments;

  return (
    <section className="articles-info-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xs-12">
            <h1 className="articles-info-section-title">Responses <span className="italic">({comments.length})</span></h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xs-12">
            <div className="comments">
              <a title href="#" className="light-link comment button-comment">
                <span className="button-comment-span"><i className="pe-7s-comment" /> Write a
                      response</span>
              </a>
              <ol>
                {comments.map((comment) => <Comment comment={comment} />)}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostComments;
