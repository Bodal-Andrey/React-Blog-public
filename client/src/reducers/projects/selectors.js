import NameSpace from "../name-space";

const getProjects = (state) => {
    return state[NameSpace.PROJECTS].projects;
};

const getLoadStatus = (state) => {
    return state[NameSpace.PROJECTS].loadStatus;
};

export {
    getProjects,
    getLoadStatus
};
