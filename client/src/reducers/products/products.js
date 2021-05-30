import { extend } from "../../utils";

const initialState = {
    products: [],
    loadStatus: false,
};

const ActionType = {
    LOAD_PRODUCTS: `LOAD_PRODUCTS`,
    CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
};

const ActionCreator = {
    loadProducts: (data) => ({
        type: ActionType.LOAD_PRODUCTS,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
};

const Operation = {
    loadProducts: () => (dispatch, getState, api) => {
        return api.get(`/products`)
            .then((data) => {
                dispatch(ActionCreator.loadProducts(data.data));
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
        default:
            return state;
    }
};

export {
    ActionType,
    ActionCreator,
    Operation,
    reducer,
};
