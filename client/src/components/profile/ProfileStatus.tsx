import {ChangeEvent, FC, useEffect, useState} from "react"
import Typography from "@material-ui/core/Typography"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {useDispatch, useSelector} from "react-redux"
import {updateProfileStatus} from "../../redux/actions/profile"
import {GlobalState} from "../../redux/store"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        status: {
            padding: "4px 6px 4px",
            marginBottom: theme.spacing(1),
            "&:hover": {
                cursor: "pointer",
                backgroundColor: "#f0f2f5"
            }
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

interface IStatusProps {
    status: string | null
}

export const ProfileStatus: FC<IStatusProps> = ({status}) => {
    const classes = useStyles()
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState("")
    const userId = useSelector((state: GlobalState) => state.profileReducer.profile?.id)
    const currentUserId = useSelector((state: GlobalState) => state.authReducer.currentUser?.profile.id)
    const dispatch = useDispatch()

    const activated: () => void = () => {
        if (userId === currentUserId) {
            setEditMode(true)
        }
    }
    const deactivated: () => void = () => {
        setEditMode(false)
        if (userId) {
            dispatch(updateProfileStatus(value, userId))
        }
        // alert(value)
        // setValue("")
    }
    const onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void = (event) => {
        setValue(event.currentTarget.value)
    }

    useEffect(() => {
        setValue(status || "Статус не указан")
    }, [status])

    if (editMode) {
        return (
            <>
                <TextField
                    onFocus={activated}
                    onBlur={deactivated}
                    onChange={onChangeHandler}
                    value={value}
                    autoFocus
                    size="small"
                    label="Статус:"
                    variant="outlined"
                    fullWidth
                    multiline
                    name="postBody"
                />
                {editMode && <div className={classes.actionsBox}>
                    <Button
                        onClick={deactivated}
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                    >
                        Добавить
                    </Button>
                </div>}
            </>
        )
    }

    return (
        <Typography
            onClick={activated}
            variant="caption"
            color="textSecondary"
            component="div"
            className={classes.status}
        >
            {value || "Статус не указан"}
        </Typography>
    )
}