import { combineReducers } from "redux";
import NameSpace from "./name-space";
import { reducer as posts } from "./posts/posts";
import { reducer as lastComments } from "./last-comments/last-comments";
import { reducer as projects } from "./projects/projects";
import { reducer as products } from "./products/products";

export default combineReducers({
    [NameSpace.POSTS]: posts,
    [NameSpace.LAST_COMMENTS]: lastComments,
    [NameSpace.PROJECTS]: projects,
    [NameSpace.PRODUCTS]: products,
});
