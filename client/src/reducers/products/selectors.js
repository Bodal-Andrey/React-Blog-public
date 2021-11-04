import NameSpace from "../name-space";

const getProducts = (state) => {
    return state[NameSpace.PRODUCTS].products;
};

const getLoadStatus = (state) => {
    return state[NameSpace.PRODUCTS].loadStatus;
};

const getSortingProducts = (state) => {
    return state[NameSpace.PRODUCTS].sortingProducts;
};

export {
    getProducts,
    getLoadStatus,
    getSortingProducts,
};
