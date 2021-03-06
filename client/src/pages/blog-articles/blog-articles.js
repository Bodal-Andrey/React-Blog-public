import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import AsidePanels from "../../components/aside-panels";
import CategoryTitle from "../../components/category-title";
import BlogListArticles from "../../components/blog-list-articles";
import { getPostCategory, getLoadStatus, getSortingPosts, getUser } from "../../reducers/posts/selectors";
import withLoad from "../../components/hocs/withLoad";

const BlogArticles = ({ posts, user, postCategory }) => {

    return (
        <Layout>
            <div className="col-xs-12">
                <CategoryTitle
                    title={postCategory}
                    quantity={posts.length}
                    name={`Articles`}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xs-12">
                        <BlogListArticles posts={posts} />
                    </div>
                    <div className="aside-blocks col-lg-4 col-xs-12">
                        <AsidePanels user={user} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    posts: getSortingPosts(state),
    user: getUser(state),
    loadStatus: getLoadStatus(state),
    postCategory: getPostCategory(state),
});

export default connect(mapStateToProps)(withLoad(BlogArticles));
