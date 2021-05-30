import React from "react";

const ProjectItem = ({ project }) => {
    const backgroundColor = project.default === false ? project.color : ``;

    return (
        <div className="portfolio-item white-box">
            <div className={`portfolio-item-wrapper ${project.default === true ? `portfolio-item-default` : ``}`} style={{ background: backgroundColor }}>
                <div className="portfolio-item-wrapper-left">
                    <h2>{project.title}</h2>
                    <span className="portfolio-category">{project.subject}</span>
                    <p className="font-primary">{project.text}</p>
                    {project.default === true ?
                        <button className="btn">Read more</button> :
                        <button className="btn">Screenshots</button>
                    }
                </div>
                {project.default === false ?
                    <div className="portfolio-item-wrapper-right">
                        <img className="img-fluid" src={project.image} alt="" />
                    </div> : ``
                }
            </div>
        </div>
    );
};

export default ProjectItem;
