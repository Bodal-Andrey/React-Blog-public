import React from "react";
import Pagination from "../pagination";
import Article from "../article";

const HomePageArticles = ({ posts }) => {
  return (
    <section className="articles">
      {posts.slice(0, 4).map((post) => <Article post={post} />)}
      <Pagination />
    </section>
  );
};

export default HomePageArticles;
