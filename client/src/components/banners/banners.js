import React from "react";
import Banner from "../banner";

const Banners = ({ posts }) => {

  return (
    <section className="banners">
      <div className="container">
        <div className="row">
          {posts.map((post) => post.inBanner ? <Banner post={post} /> : ``)}
        </div>
      </div>
    </section>
  );
};

export default Banners;
