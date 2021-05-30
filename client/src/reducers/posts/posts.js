import { extend } from "../../utils";

const initialState = {
    posts: [],
    user: [],
    comments: [],
    loadStatus: false,
};

const ActionType = {
    LOAD_POSTS: `LOAD_POSTS`,
    LOAD_USER: `LOAD_USER`,
    LOAD_COMMENTS: `LOAD_COMMENTS`,
    CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
};

const ActionCreator = {
    loadPosts: (data) => ({
        type: ActionType.LOAD_POSTS,
        payload: data
    }),
    loadUser: (data) => ({
        type: ActionType.LOAD_USER,
        payload: data
    }),
    loadComments: (data) => ({
        type: ActionType.LOAD_COMMENTS,
        payload: data
    }),
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
};

const Operation = {
    loadComments: () => (dispatch, getState, api) => {
        return api.get(`/comments`)
            .then((data) => {
                dispatch(ActionCreator.loadComments(data.data));
            });
    },
    loadUser: () => (dispatch, getState, api) => {
        return api.get(`/user`)
            .then((data) => {
                dispatch(ActionCreator.loadUser(data.data));
                dispatch(ActionCreator.changeLoadStatus(true));
            });
    },
    loadPosts: () => (dispatch, getState, api) => {
        return api.get(`/posts`)
            .then((data) => {
                dispatch(ActionCreator.loadPosts(data.data));
            });
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_POSTS:
            return extend(state, { posts: action.payload });
        case ActionType.LOAD_USER:
            return extend(state, { user: action.payload });
        case ActionType.LOAD_COMMENTS:
            return extend(state, { comments: action.payload });
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
