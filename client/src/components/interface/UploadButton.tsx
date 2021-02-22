import React, {FC, FormEvent} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import {PhotoCamera} from "@material-ui/icons"

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
    body?: string
    name: string
    onChange: (event: FormEvent<HTMLInputElement>) => void
}

export const UploadButton: FC<IUploadButtonProps> = ({ body, name, onChange }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                id="contained-button-file"
                className={classes.input}
                type="file"
                name={name}
                onChange={onChange}
            />
            {
                body
                    ? <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            {body}
                        </Button>
                    </label>
                    : <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
            }

        </div>
    )
}