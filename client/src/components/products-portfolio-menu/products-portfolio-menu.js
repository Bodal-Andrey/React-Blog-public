import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Operation } from '../../reducers/products/products'; 
import ActionCreator from '../../reducers/products/actions';

const ProductsPortfolioMenu = ({ title, products, onAllClick, onCategoryClick }) => {

    return (
        <nav className="portfolio-menu">
            <ul>
                {title.map((titleItem) => {
                    return titleItem === `All` ?
                        <li><Link onClick={() =>onAllClick(products)} href="#" title="All">All</Link></li> :
                        <li><Link onClick={() => onCategoryClick(titleItem)} href="#" title={titleItem}>{titleItem}</Link></li>
                })}
            </ul>
        </nav>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onAllClick(products) {
        dispatch(ActionCreator.loadSortingProducts(products));
    },
    onCategoryClick(category) {
        dispatch(Operation.loadSortingProducts(category));
    } 
});

export default connect(null, mapDispatchToProps)(ProductsPortfolioMenu);
