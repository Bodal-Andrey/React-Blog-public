import React from "react";

const ProductItem = ({product}) => {
    return (
        <div className="portfolio-item shop-item white-box" data-portfolio={product.subject}>
            <div className={`portfolio-item-wrapper ${product.default === true ? `portfolio-item-default` : ``}`}>
                <div className="portfolio-item-wrapper-left">
                    <h2>{product.title}</h2>
                    <span className="portfolio-category">{product.subject}</span>
                    <p className="shop-item-desc font-primary">{product.text}</p>
                    <p className="portfolio-item-price">${product.price}<sup>00</sup></p>
                    <span className="portfolio-item-sales">{product.salesCount} Sales</span>
                    <div className="portfolio-item-wrapper-left-footer">
                        <button className="btn btn-buy"><i className="pe-7s-cart" /> Buy now</button>
                        <button className="btn">Screenshots</button>
                    </div>
                </div>
                {product.default === false ?
                    <div className="portfolio-item-wrapper-right">
                    <img className="img-fluid" src={product.image} alt="" data-rjs={2} />
                </div> : ``
                }
            </div>
        </div>
    );
};

export default ProductItem;
