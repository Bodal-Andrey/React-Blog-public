import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history.js";
import HomePage from "../../pages/home-page";
import BlogArticles from "../../pages/blog-articles";
import BlogPostArticle from "../../pages/blog-post-article";
import AboutMe from "../../pages/about-me";
import MyProjects from "../../pages/my-projects";
import Contacts from "../../pages/contacts";
import Products from "../../pages/products";
import { AppRoute } from "../../const.js";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={AppRoute.ROOT} component={HomePage} />
                <Route exact path={AppRoute.ARTICLES} component={BlogArticles} />
                <Route exact path={AppRoute.POST} component={BlogPostArticle} />
                <Route exact path={AppRoute.ABOUT_ME} component={AboutMe} />
                <Route exact path={AppRoute.MY_PROJECTS} component={MyProjects} />
                <Route exact path={AppRoute.CONTACTS} component={Contacts} />
                <Route exact path={AppRoute.PRODUCTS} component={Products} />
            </Switch>
        </Router>
    );
};

export default App;
