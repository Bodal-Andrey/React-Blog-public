import { extend } from "../../utils";
import ActionCreator from "./actions";
import ActionType from "./types";

const initialState = {
    lastComments: [],
};

const Operation = {
    loadLastComments: () => (dispatch, getState, api) => {
        return api.get(`/lastComments`)
            .then((data) => {
                dispatch(ActionCreator.loadLastComments(data.data));
            });
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_LAST_COMMENTS:
            return extend(state, { lastComments: action.payload });
        default:
            return state;
    }
};

export {
    Operation,
    reducer,
};
