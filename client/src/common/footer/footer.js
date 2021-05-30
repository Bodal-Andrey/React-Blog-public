import React from "react";
import { connect } from "react-redux";
import { getLastComments } from "../../reducers/last-comments/selectors";

const Footer = ({ lastComments }) => {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-xs-12">
            <div className="footer-section">
              <h3 className="footer-section-title">Last Responses</h3>
              <ul className="footer-section-content">
                {lastComments.map((comment) =>
                  <li className="footer-section-content-response">
                    <img src={comment.image} alt="Profile Avatar" />
                    <div className="footer-section-content-response-wrapper">
                      <h4><span className="response-author">{comment.name}</span> in <a href className="response-subject light-link" title="Subject Response">Want
                      to learn
                          Javascript in 2016?</a></h4>
                      <p className="font-primary">{comment.text}</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-xs-12">
            <div className="footer-section border-bottom">
              <img src="img/logo-grey.png" alt="" className="footer-section-title-img" />
              <div className="footer-section-content">
                <p className="font-primary footer-section-content-about">
                  D -Blog is a responsive, beautiful, <span className="black">creative &amp; unique</span> wordpress
                    theme best suited for blogs &amp; personal
                    portfolio showcases. It’s
                    easy to use &amp; setup, <span className="black">SEO friendly</span> and has top notch standard
                    compliant code.
                  </p>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-section-title footer-section-newsletter">Newsletter</h3>
              <div className="footer-section-content">
                <p className="font-primary ">Stay up to do date with my posts, subscribe to newsletter:</p>
                <form action="#" method="post">
                  <input type="text" className="form-control" placeholder="Type Email" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="copyright">
              <ul>
                <li><a href title="Twitter"><i className="icon-social_twitter_circle" /></a></li>
                <li><a href title="Github"><i className="icon-social_github_circle" /></a></li>
                <li><a href title="LinkedIn"><i className="icon-social_linkedin_circle" /></a></li>
              </ul>
              <p className="font-primary">© Theme by <a href="#" title className="black">Komon.ski</a> . All
                  Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* end COPYRIHT */}
    </footer>
  );
};

const mapStateToProps = (state) => ({
  lastComments: getLastComments(state),
});

export default connect(mapStateToProps)(Footer);
