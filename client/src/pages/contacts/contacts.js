import React from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout";
import Contact from "../../components/contact";
import { getUser, getLoadStatus } from "../../reducers/posts/selectors";
import withLoad from "../../components/hocs/withLoad";

const Contacts = ({ user }) => {
    const contacts = user[0].contacts;

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Contact contacts={contacts} />
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

export default connect(mapStateToProps)(withLoad(Contacts));
