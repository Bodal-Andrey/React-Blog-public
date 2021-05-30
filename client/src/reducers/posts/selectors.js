import NameSpace from "../name-space";

const getPosts = (state) => {
    return state[NameSpace.POSTS].posts;
};

const getUser = (state) => {
    return state[NameSpace.POSTS].user;
};

const getComments = (state) => {
    return state[NameSpace.POSTS].comments;
};

const getLoadStatus = (state) => {
    return state[NameSpace.POSTS].loadStatus;
};

export {
    getPosts,
    getUser,
    getComments,
    getLoadStatus,
};
