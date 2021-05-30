import React from "react";
import ProjectItem from "../project-item";
import ProductItem from "../product-item";
import { menuTitle } from "../../settings";

const Portfolio = ({ title, projects, products }) => {

    return (
        <div className="portfolio">
            <p className="portfolio-empty"><i className="pe-7s-attention" /> No items at this category. Sorry!</p>
            {title === menuTitle.project ?
                projects.slice(0, 6).map((project) => <ProjectItem project={project} />) :
                products.slice(0, 5).map((product) => <ProductItem product={product} />)
            }
        </div>
    );
};

export default Portfolio;
