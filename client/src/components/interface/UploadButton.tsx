import React, {FC} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: "none",
        },
    }),
)

interface IUploadButtonProps {
    body: string
    name: string
}

export const UploadButton: FC<IUploadButtonProps> = ({body, name}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                id="contained-button-file"
                className={classes.input}
                type="file"
                name={name}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    {body}
                </Button>
            </label>
        </div>
    )
}