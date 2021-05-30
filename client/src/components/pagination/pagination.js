import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="...">
      <a title href className="btn-small-white pagination-back">Back</a>
      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item page-item-more"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">25</a></li>
      </ul>
      <a title href="blog_post.html" className="btn-small-white pagination-next">Next</a>
    </nav>
  );
};

export default Pagination;
