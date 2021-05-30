import { extend } from "../../utils";

const initialState = {
    lastComments: [],
};

const ActionType = {
    LOAD_LAST_COMMENTS: `LOAD_LAST_COMMENTS`,
};

const ActionCreator = {
    loadLastComments: (data) => ({
        type: ActionType.LOAD_LAST_COMMENTS,
        payload: data
    }),
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
    ActionType,
    ActionCreator,
    Operation,
    reducer,
};
