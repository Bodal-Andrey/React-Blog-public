import NameSpace from "../name-space";

const getPosts = (state) => {
    return state[NameSpace.POSTS].posts;
};

const getSortingPosts = (state) => {
    return state[NameSpace.POSTS].sortingPosts;
};

const getUser = (state) => {
    return state[NameSpace.POSTS].user;
};

const getLoadStatus = (state) => {
    return state[NameSpace.POSTS].loadStatus;
};

const getPostId = (state) => {
    return state[NameSpace.POSTS].postId;
};

const getPostCategory = (state) => {
    return state[NameSpace.POSTS].postCategory;
};

export {
    getPosts,
    getSortingPosts,
    getUser,
    getLoadStatus,
    getPostId,
    getPostCategory,
};
