import {FC} from "react"
import {Post} from "./Post"
import {NewPost} from "./NewPost"

const data = [
    {
        id: 1,
        author: {
            id: "asqqqqqda",
            name: "Антон Дымов",
            src: "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
        },
        date: "31.01.2021",
        body: "asdasd sa dasd as asd sdsadas asas d asdsa as das dsad as sadasas dasdasdasdas dasasa",
        likeCount: 22,
        myLiked: true
    },
    {
        id: 2,
        author: {
            id: "asqqqqqda",
            name: "Антон Дымов",
            src: "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
        },
        date: "22.01.2021",
        body: "asdasd sa dasd as asd sdsadas asas d asdsa as das dsad as sadasas dasdasdasdas dasasa",
        likeCount: 2,
        myLiked: false
    },
    {
        id: 3,
        author: {
            id: "asqqqqqda",
            name: "Антон Дымов",
            src: "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
        },
        date: "11.01.2021",
        body: "asdasd sa dasd as asd sdsadas asas d asdsa as das dsad as sadasas dasdasdasdas dasasa",
        likeCount: 196,
        myLiked: true
    }
]

export const Wall: FC = () => {

    const posts = data.map(post =>
        <Post
            key={post.id}
            author={post.author}
            date={post.date}
            body={post.body}
            likeCount={post.likeCount}
            myLiked={post.myLiked}
        />
    )

    return (
        <>
            <NewPost/>
            {posts}
        </>
    )
}