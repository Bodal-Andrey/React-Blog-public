import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import CategoryTitle from "../../components/category-title";
import PortfolioMenu from "../../components/portfolio-menu";
import Portfolio from "../../components/portfolio";
import { menuTitle } from "../../settings";
import { getProjects, getLoadStatus } from "../../reducers/projects/selectors";
import withLoad from "../../components/hocs/withLoad";

const MyProjects = ({ projects }) => {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <CategoryTitle
                            title={`Portfolio`}
                            quantity={projects.length}
                            name={`Projects`}
                        />
                    </div>
                    <div className="col-xs-12">
                        <PortfolioMenu title={menuTitle.project} />
                    </div>
                    <div className="col-xs-12">
                        <Portfolio
                            title={menuTitle.project}
                            projects={projects}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    projects: getProjects(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(MyProjects));
