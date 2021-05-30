import React from "react";

const PortfolioMenu = ({title}) => {

    return (
        <nav className="portfolio-menu">
            <ul>
                {title.map((titleItem) => {
                    return (
                        <li><a href="#" title={titleItem}>{titleItem}</a></li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default PortfolioMenu;
