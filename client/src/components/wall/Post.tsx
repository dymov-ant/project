import React, {FC} from "react"
import {Link} from "react-router-dom"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import DeleteIcon from "@material-ui/icons/Delete"
import CommentIcon from "@material-ui/icons/Comment"
import MuiLink from "@material-ui/core/Link"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2)
        },
        actionsWrapper: {
            justifyContent: "space-between"
        },
        likeCount: {
            marginLeft: theme.spacing(1)
        }
    }),
)

interface IPostAuthor {
    id: string
    name: string
    src: string
}

interface IPost {
    author: IPostAuthor
    date: string
    body: string
    likeCount: number
    myLiked: boolean
}

export const Post: FC<IPost> = ({author, date, body, likeCount, myLiked}) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Link to={`/profile/${author.id}`}>
                        <Avatar src={author.src}/>
                    </Link>
                }
                action={
                    <IconButton aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                }
                title={
                    <MuiLink
                        color="primary"
                        component={Link}
                        to={`/profile/${author.id}`}
                    >
                        {author.name}
                    </MuiLink>
                }
                subheader={date}
            />
            <Divider variant="middle"/>
            <CardContent>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions disableSpacing className={classes.actionsWrapper}>
                <IconButton aria-label="like">
                    {myLiked ? <FavoriteIcon color="secondary"/> : <FavoriteIcon/>}
                    <Typography variant="body2" className={classes.likeCount} color={myLiked ? "secondary" : "inherit"}>
                        {likeCount}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <CommentIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}
