import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { AppRoute } from "../../const";
import { categories, navigation } from "../../settings";
import { getPosts } from '../../reducers/posts/selectors';
import PostsActionCreator from '../../reducers/posts/actions';
import { Operation as PostsOperation } from '../../reducers/posts/posts';
import ProjectsActionCreator from '../../reducers/projects/actions';
import { getProjects } from '../../reducers/projects/selectors';
import { getProducts } from '../../reducers/products/selectors';
import ProductsActionCreator from '../../reducers/products/actions';

const HeaderNav = ({ posts, projects, products, onMyProjectsClick, onMyProductsClick, onBlogArticlesClick, onCategoryClick }) => {

    return (
        <nav className="header-nav">
            <ul>
                {navigation.map((nav) => {
                    return nav.class === `dropdown` ?
                        <li className={nav.class}>
                            <Link onClick={() => onBlogArticlesClick(posts)} to={AppRoute[nav.route]} href="#" className={`${nav.class}-toggle`} title={nav.title}>{nav.title}</Link>
                            <ul className={`${nav.class}-menu`}>
                                {categories.map((category) => {
                                    return (
                                        <li className={`nav-elipse-${category.color}`}>
                                            <Link onClick={() => onCategoryClick(category.name)} to={AppRoute[nav.route]} href="#" title={`Blog ${category.name} articles`}>{category.name}</Link>
                                        </li>
                                    );
                                })}
                                <li>
                                    <Link to={AppRoute.POST} href="#" title="Blog Post">Blog Post</Link>
                                </li>
                            </ul>
                        </li> :
                        nav.class === `projects` ?
                            <li className={nav.class}>
                                <Link onClick={() => onMyProjectsClick(projects)} to={AppRoute[nav.route]} href="#" title={nav.title}>{nav.title}</Link>
                            </li> :
                            nav.class === `buyproducts-link` ?
                                <li className={nav.class}>
                                    <Link onClick={() => onMyProductsClick(products)} to={AppRoute[nav.route]} href="#" title={nav.title}>{nav.title}</Link>
                                </li> :
                                <li className={nav.class}>
                                    <Link to={AppRoute[nav.route]} href="#" title={nav.title}>{nav.title}</Link>
                                </li>
                })}
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    projects: getProjects(state),
    products: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
    onBlogArticlesClick(posts) {
        dispatch(PostsActionCreator.loadSortingPosts(posts));
        dispatch(PostsActionCreator.changePostCategory(`All`));
    },
    onCategoryClick(category) {
        dispatch(PostsOperation.loadSortingPosts(category));
        dispatch(PostsActionCreator.changePostCategory(category));
    },
    onMyProjectsClick(projects) {
        dispatch(ProjectsActionCreator.loadSortingProjects(projects));
    },
    onMyProductsClick(products) {
        dispatch(ProductsActionCreator.loadSortingProducts(products));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
