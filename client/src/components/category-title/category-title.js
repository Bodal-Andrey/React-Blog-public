import React from "react";

const CategoryTitle = ({title, quantity, name}) => {
    return (
        <section className="category-title">
            <h1>{title}</h1>
            <span>{quantity} {name}</span>
        </section>
    );
};

export default CategoryTitle;
