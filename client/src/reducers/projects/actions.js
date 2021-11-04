import ActionType from "./types";

const ActionCreator = {
    loadProjects: (data) => ({
        type: ActionType.LOAD_PROJECTS,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
    loadSortingProjects: (data) => ({
        type: ActionType.LOAD_SORTING_PROJECTS,
        payload: data
    }),
};

export default ActionCreator;
