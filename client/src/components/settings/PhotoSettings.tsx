import React, {FC} from "react"
import Paper from "@material-ui/core/Paper"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import {UploadButton} from "../interface/UploadButton"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))

export const PhotoSettings: FC = () => {
    const classes = useStyles()

    return (
        <Paper elevation={2} className={classes.paper}>
            <Typography component="p" variant="subtitle1" align="center">
                Фотография
            </Typography>
            <Grid container justify="flex-end">
                <Grid item>
                    <UploadButton body="Обновить фото" name="photo"/>
                </Grid>
            </Grid>
        </Paper>
    )
}