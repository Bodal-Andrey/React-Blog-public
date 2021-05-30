import React from "react";

const Comment = ({comment}) => {
    return (
        <li className="comment">
            <img src={comment.image} alt="Profile Picture" />
            <div className="comment-content">
                <h3>{comment.name}</h3>
                <time dateTime="2009-11-13T20:00Z">July 20, 2016 at 16:32 AM</time>
                <p>{comment.text}</p>
                <div className="comment-content-footer">
                    <a title="Likes" href="#" className="light-link comment-content-footer-icon"><i className="pe-7s-like" /> {comment.likes}</a>
                </div>
            </div>
        </li>
    );
};

export default Comment;
