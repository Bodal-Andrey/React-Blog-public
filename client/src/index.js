import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "../src/components/app";
import createApi from "./api";
import reducer from "./reducers/reducer";
import { Operation as PostsOperation } from "./reducers/posts/posts";
import { Operation as LastCommentsOperation } from "./reducers/last-comments/last-comments";
import { Operation as ProjectsOperation } from "./reducers/projects/projects";
import { Operation as ProductsOperation } from "./reducers/products/products";

const api = createApi();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(PostsOperation.loadPosts());
store.dispatch(PostsOperation.loadComments());
store.dispatch(LastCommentsOperation.loadLastComments());
store.dispatch(PostsOperation.loadUser());
store.dispatch(ProjectsOperation.loadProjects());
store.dispatch(ProductsOperation.loadProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(`root`)
);
