import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { AppRoute } from "../../const";
import ActionCreator from "../../reducers/posts/actions";

const Banner = ({ post, onBannerClick }) => {

  return (
    <div className={`${post.isBig ? `` : `col-lg-4`} col-md-6 col-xs-12`}>
      <div className="banner-wrapper">
        <Link onClick={() => onBannerClick(post.id)} to={AppRoute.POST} href="blog_post.html" title="">
          <div className="banner-wrapper-content">
            <h1 className="h2">{post.title}</h1>
            <span className="category-tag category-tag-white">{post.category}</span>
            <time dateTime="2016-01-18" className>January 18, 2016</time>
          </div>
        </Link>
        <img className="img-fluid" src={post.image} alt="Post Photo" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onBannerClick(id) {
    dispatch(ActionCreator.changePostId(id));
  }
});

export default connect(null, mapDispatchToProps)(Banner);
