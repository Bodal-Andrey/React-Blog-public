import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import CategoryTitle from "../../components/category-title";
import ProjectsPortfolioMenu from "../../components/projects-portfolio-menu";
import Portfolio from "../../components/portfolio";
import { menuTitle } from "../../settings";
import { getLoadStatus, getSortingProjects, getProjects } from "../../reducers/projects/selectors";
import withLoad from "../../components/hocs/withLoad";

const MyProjects = ({ sortingProjects, projects }) => {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <CategoryTitle
                            title={`Portfolio`}
                            quantity={sortingProjects.length}
                            name={`Projects`}
                        />
                    </div>
                    <div className="col-xs-12">
                        <ProjectsPortfolioMenu title={menuTitle.project} projects={projects} />
                    </div>
                    <div className="col-xs-12">
                        <Portfolio
                            title={menuTitle.project}
                            projects={sortingProjects}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    projects: getProjects(state),
    sortingProjects: getSortingProjects(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(MyProjects));
