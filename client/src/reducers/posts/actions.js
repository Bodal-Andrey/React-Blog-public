import ActionType from "./types";

const ActionCreator = {
    loadPosts: (data) => ({
        type: ActionType.LOAD_POSTS,
        payload: data
    }),
    loadSortingPosts: (data) => ({
        type: ActionType.LOAD_SORTING_POSTS,
        payload: data
    }),
    loadUser: (data) => ({
        type: ActionType.LOAD_USER,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
    changePostId: (id) => ({
        type: ActionType.CHANGE_POST_ID,
        payload: id
    }),
    changePostCategory: (category) => ({
        type: ActionType.CHANGE_POST_CATEGORY,
        payload: category
    }),
};

export default ActionCreator;
