import {ChangeEvent, FC, useState} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {useDispatch} from "react-redux";
import {createPost} from "../../redux/actions/posts";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1)
        },
        paper: {
            padding: theme.spacing(1)
        },
        actionsBox: {
            textAlign: "right"
        },
        margin: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    })
)

export const NewPost: FC = () => {
    const classes = useStyles()
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const activate: () => void = () => {
        setVisible(true)
    }
    const deactivate: () => void = () => {
        value.trim().length > 0 ? setVisible(true) : setVisible(false)
    }
    const onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void = (event) => {
        setValue(event.currentTarget.value)
    }
    const addPost: () => void = () => {
        dispatch(createPost(value.trim()))
        // alert(value.trim())
        setValue("")
        setVisible(false)
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={1}>
                <TextField
                    onFocus={activate}
                    onBlur={deactivate}
                    onChange={onChangeHandler}
                    value={value}
                    label="О чем думаете?"
                    variant="outlined"
                    fullWidth
                    multiline
                    name="postBody"
                />
                {visible && <div className={classes.actionsBox}>
                    <Button
                        onClick={addPost}
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                    >
                        Добавить
                    </Button>
                </div>}
            </Paper>
        </div>
    )
}