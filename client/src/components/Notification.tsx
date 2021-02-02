import React, {FC, SyntheticEvent, useState} from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert"
import {makeStyles, Theme} from "@material-ui/core/styles"
import {IMessage} from "../types/types"
import {useDispatch} from "react-redux"
import {setMessage} from "../redux/actions/app.actions"

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}))

interface INotificationProps {
    message: IMessage
}

export const Notification: FC<INotificationProps> = ({message}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
        dispatch(setMessage(null))
    }

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.type}>
                    {message.body}
                </Alert>
            </Snackbar>
        </div>
    )
}