import { extend } from "../../utils";
import ActionCreator from "./actions";
import ActionType from "./types";

const initialState = {
    projects: [],
    loadStatus: false,
    sortingProjects: [],
};

const Operation = {
    loadProjects: () => (dispatch, getState, api) => {
        return api.get(`/projects`)
            .then((data) => {
                dispatch(ActionCreator.loadProjects(data.data));
            });
    },
    loadSortingProjects: (subject) => (dispatch, getState, api) => {
        return api.get(`/projects?subject=${subject}`)
            .then((data) => {
                dispatch(ActionCreator.loadSortingProjects(data.data));
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
        case ActionType.LOAD_SORTING_PROJECTS:
            return extend(state, { sortingProjects: action.payload });
        default:
            return state;
    }
};

export {
    Operation,
    reducer,
};
