import {ChangeEvent, FC, useState} from "react"
import Typography from "@material-ui/core/Typography"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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

export const ProfileStatus: FC = () => {
    const classes = useStyles()
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState("")
    const activated: () => void = () => {
        setEditMode(true)
    }
    const deactivated: () => void = () => {
        setEditMode(false)
        // alert(value)
        // setValue("")
    }
    const onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void = (event) => {
        setValue(event.currentTarget.value)
    }

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