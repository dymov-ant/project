import {FC} from "react"
import {Post} from "./Post"
import {NewPost} from "./NewPost"
import { IPost } from "../../types/postsTypes"
import Typography from "@material-ui/core/Typography"

const data: IPost[] = []

export const Wall: FC = () => {

    const posts = data.map(post =>
        <Post
            key={post.id}
            user={post.user}
            body={post.body}
            createdDate={post.createdDate}
            likes={post.likes}
            id={post.id}
        />
    )

    return (
        <>
            <NewPost/>
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