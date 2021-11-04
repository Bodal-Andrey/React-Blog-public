import { extend } from "../../utils";
import ActionCreator from "./actions";
import ActionType from "./types";

const initialState = {
    posts: [],
    sortingPosts: [],
    postCategory: ``,
    user: [],
    loadStatus: false,
    postId: 1,
};

const Operation = {
    loadUser: () => (dispatch, getState, api) => {
        return api.get(`/user`)
            .then((data) => {
                dispatch(ActionCreator.loadUser(data.data));
                dispatch(ActionCreator.changeLoadStatus(true));
            });
    },
    loadPosts: () => (dispatch, getState, api) => {
        return api.get(`/posts?_embed=comments`)
            .then((data) => {
                dispatch(ActionCreator.loadPosts(data.data));
            });
    },
    loadSortingPosts: (category) => (dispatch, getState, api) => {
        return api.get(`/posts?_embed=comments&category=${category}`)
            .then((data) => {
                dispatch(ActionCreator.loadSortingPosts(data.data));
            });
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_POSTS:
            return extend(state, { posts: action.payload });
        case ActionType.LOAD_SORTING_POSTS:
            return extend(state, { sortingPosts: action.payload });
        case ActionType.LOAD_USER:
            return extend(state, { user: action.payload });
        case ActionType.CHANGE_LOAD_STATUS:
            return extend(state, { loadStatus: action.payload });
        case ActionType.CHANGE_POST_ID:
            return extend(state, { postId: action.payload });
        case ActionType.CHANGE_POST_CATEGORY:
            return extend(state, { postCategory: action.payload });
        default:
            return state;
    }
};

export {
    Operation,
    reducer,
};
