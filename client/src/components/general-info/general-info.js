import React from "react";

const GeneralInfo = ({ obj }) => {
    
    return (
        <section className="general-info white-box">
            <div className="author">
                <img src={obj.image} alt="" />
                <ul className="author-nav">
                    <li><a href title><i className="pe-7s-bookmarks" /> Download my CV</a></li>
                    <li><a href title><i className="pe-7s-paper-plane" /> Write message</a></li>
                </ul>
            </div>
            <div className="general-info-right">
                <h1>I’m Bill Gates</h1>
                <div className="social">
                    <a href title="Twitter"><i className="icon-social_twitter_circle" /></a>
                    <a href title="Github"><i className="icon-social_github_circle" /></a>
                    <a href title="LinkedIn"><i className="icon-social_linkedin_circle" /></a>
                </div>
                <div className="clear" />
                <span className="general-info-right-author-info">Front-End Developer at Microsoft Company</span>
                <p>{obj.about}</p>
                <img src="img/signature.jpg" alt="" title="Author Signature" />
            </div>
        </section>
    );
};

export default GeneralInfo;
