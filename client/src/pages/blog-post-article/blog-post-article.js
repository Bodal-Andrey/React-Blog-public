import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import ArticleNav from "../../components/article-nav";
import BlogPostShare from "../../components/blog-post-share";
import BlogPostComments from "../../components/blog-post-comments";
import ArticleHeader from "../../components/article-header";
import ArticleContent from "../../components/article-content";
import { getPosts, getPostId, getLoadStatus } from "../../reducers/posts/selectors";
import withLoad from "../../components/hocs/withLoad";

const BlogPostArticle = ({ posts, postId }) => {

    const post = posts.find(post => post.id === postId);

    return (
      <Layout render={<ArticleNav />}>
        <section className="articles articles-blog-post">
          <article className="articles-blog-post">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xs-12">
                  <ArticleHeader post={post} />
                  <ArticleContent post={post} />
                </div>
                <BlogPostShare />
              </div>
            </div>
          </article>
        </section>
        <div className="articles-info">
          <BlogPostComments post={post} />
        </div>
      </Layout>
    );

}

const mapStateToProps = (state) => ({
  posts: getPosts(state),
  postId: getPostId(state),
  loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(BlogPostArticle));
