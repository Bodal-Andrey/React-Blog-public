import NameSpace from "../name-space";

const getLastComments = (state) => {
    return state[NameSpace.LAST_COMMENTS].lastComments;
};

export {
    getLastComments,
};
