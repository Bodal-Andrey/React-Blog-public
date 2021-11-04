import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import ActionCreator from '../../reducers/posts/actions';
import { Operation } from '../../reducers/posts/posts';

const Article = ({ post, onReadMoreClick, onCategoryClick }) => {

  return (
    <article className={post.className}>
      <div className="articles-header">
        <time dateTime="2016-10-11">12 hours ago</time>
        <span className="articles-header-tag">New</span>
        <span className="articles-header-category">
          <Link
            onClick={() => onCategoryClick(post.category)}
            to={AppRoute.ARTICLES}
            title="" href="#">{post.category}
          </Link>
        </span>
      </div>
      <div className="articles-content">
        <h1>
          <Link
            onClick={() => onReadMoreClick(post.id)}
            to={AppRoute.POST}
            title href="blog_post.html">{post.title}
          </Link>
        </h1>
        <p>{post.text}</p>
      </div>
      <div className="articles-footer">
        <ul className="articles-footer-info">
          <li><a title href="#" className="light-link"><i className="pe-7s-comment" /> {post.comments.length}</a>
          </li>
          <li><a title href="#" className="light-link"><i className="pe-7s-like" /> {post.likes}</a></li>
        </ul>
        <Link onClick={() => onReadMoreClick(post.id)} to={AppRoute.POST} title className="btn" href="blog_post.html">Read more</Link>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onReadMoreClick(id) {
    dispatch(ActionCreator.changePostId(id));
  },
  onCategoryClick(category) {
    dispatch(Operation.loadSortingPosts(category));
    dispatch(ActionCreator.changePostCategory(category));
  }
});

export default connect(null, mapDispatchToProps)(Article);
