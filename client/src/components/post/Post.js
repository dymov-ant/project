import React from "react";
import {Link} from "react-router-dom";

const Post = ({author: {src, userName}, body, isMeLiked, commentsCount, likeCounts}) => {
    return (
        <div className="post">
            <div className="post_header">
                <Link to="/">
                    <div className="author">
                        <img src={src} alt={src}/>
                        <p>{userName}</p>
                    </div>
                </Link>
                <div>
                    <i className="fas fa-ellipsis-v"/>
                </div>
            </div>
            <div className="post_body">
                {body}
            </div>
            <div className="post_footer">
                <div>
                    <i className="far fa-comment-dots"/>
                    <p className="subtext">{commentsCount ? commentsCount : ""}</p>
                </div>
                <div>
                    {isMeLiked ? <i className="fas fa-heart"/> : <i className="far fa-heart"/>}
                    <p className="subtext">{likeCounts ? likeCounts : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;