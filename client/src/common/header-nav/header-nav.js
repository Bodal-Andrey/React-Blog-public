import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { categories, navigation } from "../../settings";

const HeaderNav = () => {
    return (
        <nav className="header-nav">
            <ul>
                {navigation.map((nav) => {
                    return nav.class === `dropdown` ?
                        <li className={nav.class}>
                            <Link to={AppRoute[nav.route]} href="#" className={`${nav.class}-toggle`} title={nav.title}>{nav.title}</Link>
                            <ul className={`${nav.class}-menu`}>
                                {categories.map((category) => {
                                    return (
                                        <li className={`nav-elipse-${category.color}`}>
                                            <Link to={AppRoute[nav.route]} href="#" title={`Blog ${category.name} articles`}>{category.name}</Link>
                                        </li>
                                    );
                                })}
                                <li>
                                    <Link to={AppRoute.POST} href="#" title="Blog Post">Blog Post</Link>
                                </li>
                            </ul>
                        </li> :
                        <li className={nav.class}>
                            <Link to={AppRoute[nav.route]} href="#" title={nav.title}>{nav.title}</Link>
                        </li>
                })}
            </ul>
        </nav>
    );
};

export default HeaderNav;
