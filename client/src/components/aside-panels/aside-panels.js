import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { categories, tagType } from "../../settings";

const AsidePanels = ({ user }) => {

  return (
    <React.Fragment>
      <aside className="author">
        <img src={user[0].image} alt="" />
        <h2>Bill Gates</h2>
        <span className="author-info">Front-End Developer</span>
        <span className="author-info">Microsoft Company</span>
        <div className="social">
          <a href title="Twitter"><i className="icon-social_twitter_circle" /></a>
          <a href title="Github"><i className="icon-social_github_circle" /></a>
          <a href title="LinkedIn"><i className="icon-social_linkedin_circle" /></a>
        </div>
        <ul className="author-nav">
          <li><a href title><i className="pe-7s-bookmarks" /> Download my CV</a></li>
          <li><a href title><i className="pe-7s-paper-plane" /> Write message</a></li>
        </ul>
      </aside>
      <aside className="categories">
        <h2 className="aside-title">Categories</h2>
        <ul>
          {categories.map((category) => {
            return (
              <li className={`nav-elipse-${category.color}`}>
                <Link to={AppRoute.ARTICLES} href="#" title={`Blog ${category.name} articles`}>{category.name}</Link>
              </li>
            );
          })}
          <li><a href="#" title="Blog other articles">Other</a></li>
        </ul>
      </aside>
      <aside className="advertisement">
        <a href><img src="img/advertisement.jpg" alt="Advertisement" /></a>
      </aside>
      <aside className="last-project">
        <h2 className="aside-title">Last Project</h2>
        <div className="last-project-one">
          <h3 className="h4"><a href>Microsoft TypeScript</a></h3>
          <time dateTime="2016-12-31T23:59:59Z">January 18, 2016</time>
          <p className="font-primary">TypeScript starts from the same syntax and semantics that millions of
              JavaScript developers know... </p>
          <a href="#" title="Watch it" className="btn btn-small">Watch it</a>
        </div>
      </aside>
      <aside className="tags">
        <h2 className="aside-title">Tags</h2>
        <div className="tags-content">
          {tagType.map((type) => {
            return (
              <span className="tag tag-pill tag-default"><a href="">{type}</a></span>
            );
          })}
        </div>
      </aside>
    </React.Fragment>
  );
};

export default AsidePanels;
