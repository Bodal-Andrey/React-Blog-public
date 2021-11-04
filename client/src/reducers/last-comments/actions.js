import ActionType from "./types";

const ActionCreator = {
    loadLastComments: (data) => ({
        type: ActionType.LOAD_LAST_COMMENTS,
        payload: data
    }),
};

export default ActionCreator;
