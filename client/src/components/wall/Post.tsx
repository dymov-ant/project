import React, { FC } from "react"
import { Link } from "react-router-dom"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
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
import noAvatar from "../../common/no-avatar.png"
import { IPost } from "../../types/postsTypes"
import {useDispatch, useSelector} from "react-redux"
import { GlobalState } from "../../redux/store"
import {createLike, removeLike, removePost} from "../../redux/actions/posts";
import {format} from "date-fns";

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

export const Post: FC<IPost> = ({user, body, createdDate, likes, _id}) => {
    const classes = useStyles()
    const userId = useSelector((state: GlobalState) => state.profileReducer.profile?.id)
    const currentId = useSelector((state: GlobalState) => state.authReducer.currentUser?.profile.id)
    const existedLike = likes.find(like => like.user === currentId)
    const dispatch = useDispatch()
    const onLikeClick = () => {
        if (existedLike) {
            dispatch(removeLike(_id, existedLike._id))
        } else {
            dispatch(createLike(_id))
        }
    }

    const onDeletePost = () => {
        if (userId === currentId) {
            dispatch(removePost(_id))
        }
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Link to={`/profile/${user.id}`}>
                        <Avatar src={user.photo || noAvatar }/>
                    </Link>
                }
                action={userId === currentId && (
                    <IconButton aria-label="delete" onClick={onDeletePost}>
                        <DeleteIcon/>
                    </IconButton>)
                }
                title={
                    <MuiLink
                        color="primary"
                        component={Link}
                        to={`/profile/${user.id}`}
                    >
                        {user.name}
                    </MuiLink>
                }
                subheader={format(new Date(createdDate), "dd.MM.yyyy")}
            />
            <Divider variant="middle"/>
            <CardContent>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions disableSpacing className={classes.actionsWrapper}>
                <IconButton aria-label="like" onClick={onLikeClick}>
                    {existedLike ? <FavoriteIcon color="secondary"/> : <FavoriteIcon/>}
                    <Typography variant="body2" className={classes.likeCount} color={existedLike ? "secondary" : "inherit"}>
                        {likes.length > 0 && likes.length}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <CommentIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}
