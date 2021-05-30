import { extend } from "../../utils";

const initialState = {
    projects: [],
    loadStatus: false,
};

const ActionType = {
    LOAD_PROJECTS: `LOAD_PROJECTS`,
    CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
};

const ActionCreator = {
    loadProjects: (data) => ({
        type: ActionType.LOAD_PROJECTS,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
};

const Operation = {
    loadProjects: () => (dispatch, getState, api) => {
        return api.get(`/projects`)
            .then((data) => {
                dispatch(ActionCreator.loadProjects(data.data));
                dispatch(ActionCreator.changeLoadStatus(true));
            });
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_PROJECTS:
            return extend(state, { projects: action.payload });
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
