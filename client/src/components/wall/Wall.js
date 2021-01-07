import React, {useState} from "react";
import {connect} from "react-redux";
import Post from "../post/Post";
import Spinner from "../spinner/Spinner";
import {createLike, createPost, deletePost, removeLike} from "../../redux/actions/posts";

const Wall = ({isLoading, data, userId, activeId, createPost, deletePost, createLike, removeLike}) => {

    const [post, setPost] = useState("");

    const handleChange = event => {
        setPost(event.target.value);
    };

    const handleSubmit = () => {
        if (post.trim().length > 0) {
            createPost(post);
        }
        setPost("");
    };

    const onDeletePost = postId => {
        deletePost(postId);
    };

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className="wall">
            {userId === activeId
                ? <div className="wall_new-post">
                    <textarea
                        className="form-control"
                        onChange={handleChange}
                        value={post}
                        rows={3}
                        placeholder="О чём думаете?"
                    />
                    <button className="btn btn__primary" onClick={handleSubmit}>Добавить</button>
                </div>
                : null}
            <div className="wall_posts">
                {
                    data.length !== 0
                        ? data.map(p =>
                            <Post
                                postId={p._id}
                                key={p._id}
                                user={p.user}
                                body={p.body}
                                likes={p.likes}
                                authUserId={userId}
                                activeUserId={activeId}
                                deletePost={onDeletePost}
                                createLike={createLike}
                                removeLike={removeLike}
                            />)
                        : <p className="subtext" style={{textAlign: "center"}}>На стене нет записей</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.appReducer.isLoading,
    userId: state.authReducer.user.userId,
    activeId: state.profileReducer.profile.id
});

export default connect(mapStateToProps, {createPost, deletePost, createLike, removeLike})(Wall);