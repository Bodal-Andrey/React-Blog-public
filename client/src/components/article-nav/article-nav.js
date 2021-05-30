import React from "react";

const ArticleNav = () => {
    return (
        <div className="article-nav">
        <ul>
          <li>
            <a href="#" title="Next Article">
              <i className="pe-7s-angle-right" />
              <div>
                <p>Next article</p>
                <h3>ECMAScript 2016</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="#" title="Previous Article">
              <i className="pe-7s-angle-left" />
              <div>
                <p>Previous article</p>
                <h3>Orange is the new Black</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
};

export default ArticleNav;
