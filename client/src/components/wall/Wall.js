import React from "react";
import {connect} from "react-redux";
import Post from "../post/Post";

// const data = [
//     {
//         id: 1,
//         author: {
//             userName: "Антон Дымов",
//             src: "http://archilab.online/images/1/123.jpg"
//         },
//         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus ea est facere impedit laboriosam nesciunt quo veniam. Delectus, quia.",
//         isMeLiked: true,
//         commentsCount: 51,
//         likesCount: 112
//     },
//     {
//         id: 2,
//         author: {
//             userName: "Антон Дымов",
//             src: "http://archilab.online/images/1/123.jpg"
//         },
//         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus ea est facere impedit laboriosam nesciunt quo veniam. Delectus, quia.",
//         isMeLiked: false,
//         commentsCount: 2,
//         likesCount: 16
//     },
//     {
//         id: 3,
//         author: {
//             userName: "Антон Дымов",
//             src: "http://archilab.online/images/1/123.jpg"
//         },
//         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus ea est facere impedit laboriosam nesciunt quo veniam. Delectus, quia.",
//         isMeLiked: false,
//         commentsCount: 0,
//         likesCount: 0
//     }
// ];

const Wall = ({data, userId, activeId}) => {

    return (
        <div className="wall">
            {userId === activeId
                ? <div className="wall_new-post">
                    <textarea className="form-control" rows={3} placeholder="О чём думаете?"/>
                    <button className="btn btn__primary ">Добавить</button>
                </div>
                : null}
            <div className="wall_posts">
                {
                    data.length !== 0
                        ? data.map(p =>
                            <Post
                                key={p.id}
                                author={p.author}
                                body={p.body}
                                isMeLiked={p.isMeLiked}
                                commentsCount={p.commentsCount}
                                likeCounts={p.likesCount}
                            />)
                        : <p className="subtext" style={{textAlign: "center"}}>На стене нет записей</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    activeId: state.profile.profile.id
});

export default connect(mapStateToProps)(Wall);