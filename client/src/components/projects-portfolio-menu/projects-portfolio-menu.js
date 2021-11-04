import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Operation } from '../../reducers/projects/projects';
import ActionCreator from '../../reducers/projects/actions';

const ProjectsPortfolioMenu = ({ title, projects, onAllClick, onCategoryClick }) => {

    return (
        <nav className="portfolio-menu">
            <ul>
                {title.map((titleItem) => {
                    return titleItem === `All` ?
                        <li><Link onClick={() =>onAllClick(projects)} href="#" title="All">All</Link></li> :
                        <li><Link onClick={() => onCategoryClick(titleItem)} href="#" title={titleItem}>{titleItem}</Link></li>
                })}
            </ul>
        </nav>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onAllClick(projects) {
        dispatch(ActionCreator.loadSortingProjects(projects));
    },
    onCategoryClick(category) {
        dispatch(Operation.loadSortingProjects(category));
    } 
});

export default connect(null, mapDispatchToProps)(ProjectsPortfolioMenu);
