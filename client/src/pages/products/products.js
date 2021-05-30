import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import CategoryTitle from "../../components/category-title";
import Portfolio from '../../components/portfolio';
import PortfolioMenu from "../../components/portfolio-menu";
import { menuTitle } from "../../settings";
import { getProducts, getLoadStatus } from "../../reducers/products/selectors";
import withLoad from "../../components/hocs/withLoad";

const Products = ({ products }) => {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <CategoryTitle
                            title={`Shop`}
                            quantity={products.length}
                            name={`Products`}
                        />
                    </div>
                    <div className="col-xs-12">
                        <PortfolioMenu title={menuTitle.product} />
                    </div>
                    <div className="col-xs-12">
                        <Portfolio
                            title={menuTitle.product}
                            products={products}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    products: getProducts(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(Products));
