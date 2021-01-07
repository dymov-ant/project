import React from "react";
import {Link} from "react-router-dom";
import avatar from "../../shared/no_avatar.png";

const Post = ({user, postId, body, likes, authUserId, activeUserId, deletePost, createLike, removeLike}) => {

    const existedLike = likes.find(like => like.user === authUserId);

    const onLikeClick = () => {
        if (existedLike) {
            removeLike(postId, existedLike._id);
        } else {
            createLike(postId);
        }
    };

    const onDeletePost = () => {
        if (activeUserId === authUserId) {
            deletePost(postId);
        }
    };



    return (
        <div className="post">
            <div className="post_header">
                <Link to={"/profile/" + user._id}>
                    <div className="author">
                        <img src={user.photo || avatar} alt={user.name}/>
                        <p>{user.name}</p>
                    </div>
                </Link>
                <div onClick={() => onDeletePost()}>
                    {activeUserId === authUserId && <i className="far fa-trash-alt"/>}
                </div>
            </div>
            <div className="post_body">
                {body}
            </div>
            <div className="post_footer">
                <div>
                    <i className="far fa-comment-dots"/>
                    <p className="subtext">{0 ? 0 : ""}</p>
                </div>
                <div onClick={onLikeClick}>
                    {existedLike ? <i className="fas fa-heart"/> : <i className="far fa-heart"/>}
                    <p className="subtext">{likes.length > 0 ? likes.length : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;