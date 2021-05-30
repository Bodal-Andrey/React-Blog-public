import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import Banners from "../../components/banners";
import HomePageArticles from "../../components/home-page-articles";
import AsidePanels from "../../components/aside-panels";
import { getLoadStatus, getPosts, getUser } from "../../reducers/posts/selectors";
import withLoad from "../../components/hocs/withLoad";

const HomePage = ({posts, user}) => {
    return (
        <Layout render={<Banners posts={posts} />}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xs-12">
                    <HomePageArticles posts={posts} />
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
    posts: getPosts(state),
    user: getUser(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(HomePage));
