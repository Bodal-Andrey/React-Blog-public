import { extend } from "../../utils";
import ActionCreator from "./actions";
import ActionType from "./types";

const initialState = {
    products: [],
    loadStatus: false,
    sortingProducts: [],
};

const Operation = {
    loadProducts: () => (dispatch, getState, api) => {
        return api.get(`/products`)
            .then((data) => {
                dispatch(ActionCreator.loadProducts(data.data));
            });
    },
    loadSortingProducts: (subject) => (dispatch, getState, api) => {
        return api.get(`/products?subject=${subject}`)
            .then((data) => {
                dispatch(ActionCreator.loadSortingProducts(data.data));
                dispatch(ActionCreator.changeLoadStatus(true));
            });
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_PRODUCTS:
            return extend(state, { products: action.payload });
        case ActionType.CHANGE_LOAD_STATUS:
            return extend(state, { loadStatus: action.payload });
        case ActionType.LOAD_SORTING_PRODUCTS:
            return extend(state, { sortingProducts: action.payload });
        default:
            return state;
    }
};

export {
    Operation,
    reducer,
};
