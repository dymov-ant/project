import {FC} from "react"
import {useSelector} from "react-redux";
import {Post} from "./Post"
import {NewPost} from "./NewPost"
import Typography from "@material-ui/core/Typography"
import {GlobalState} from "../../redux/store";

export const Wall: FC = () => {
    const userId = useSelector((state: GlobalState) => state.profileReducer.profile?.id)
    const currentId = useSelector((state: GlobalState) => state.authReducer.currentUser?.profile.id)
    const data = useSelector((state: GlobalState) => state.postsReducer.posts)
    const posts = data.map(post =>
        <Post
            key={post._id}
            user={post.user}
            body={post.body}
            createdDate={post.createdDate}
            likes={post.likes}
            _id={post._id}
        />
    )

    return (
        <>
            {userId === currentId && <NewPost/>}
            {posts.length ? posts : <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
                component="p"
            >
                Записей нет
            </Typography>}
        </>
    )
}