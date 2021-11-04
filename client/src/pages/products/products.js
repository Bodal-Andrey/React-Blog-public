import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import CategoryTitle from "../../components/category-title";
import Portfolio from '../../components/portfolio';
import ProductsPortfolioMenu from "../../components/products-portfolio-menu";
import { menuTitle } from "../../settings";
import { getProducts, getSortingProducts, getLoadStatus } from "../../reducers/products/selectors";
import withLoad from "../../components/hocs/withLoad";

const Products = ({ sortingProducts, products }) => {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <CategoryTitle
                            title={`Shop`}
                            quantity={sortingProducts.length}
                            name={`Products`}
                        />
                    </div>
                    <div className="col-xs-12">
                        <ProductsPortfolioMenu title={menuTitle.product} products={products} />
                    </div>
                    <div className="col-xs-12">
                        <Portfolio
                            title={menuTitle.product}
                            products={sortingProducts}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    products: getProducts(state),
    sortingProducts: getSortingProducts(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(Products));
