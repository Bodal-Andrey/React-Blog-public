import ActionType from "./types";

const ActionCreator = {
    loadProducts: (data) => ({
        type: ActionType.LOAD_PRODUCTS,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
    loadSortingProducts: (data) => ({
        type: ActionType.LOAD_SORTING_PRODUCTS,
        payload: data
    }),
};

export default ActionCreator;
