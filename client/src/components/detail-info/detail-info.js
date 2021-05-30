import React from "react";

const DetailInfo = ({ obj }) => {
    return (
        <section className="detail-info white-box">
            <div className="detail-info-philosophy">
                <h2>My philosophy</h2>
                {obj.philosophy.map((text) => <p>{text}</p>)}
            </div>
            <div className="detail-info-skills">
                <h2>Skills</h2>
                <ol>
                    {obj.skills.map((skill) =>
                        <li>
                            <span>0{skill.number}</span>
                            <div className="detail-info-skills-right">
                                <h3>{skill.title}</h3>
                                <p>{skill.text}</p>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </section>
    );
};

export default DetailInfo;
