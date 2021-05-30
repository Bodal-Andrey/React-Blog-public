import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import GeneralInfo from "../../components/general-info";
import DetailInfo from "../../components/detail-info";
import Counters from "../../components/counters";
import withLoad from "../../components/hocs/withLoad";
import { getUser, getLoadStatus } from "../../reducers/posts/selectors";

const AboutMe = ({ user }) => {
    const obj = user[0];

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <GeneralInfo obj={obj} />
                    </div>
                    <div className="col-xs-12">
                        <DetailInfo obj={obj} />
                    </div>
                    <div className="col-xs-12">
                        <Counters obj={obj} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    user: getUser(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(AboutMe));
