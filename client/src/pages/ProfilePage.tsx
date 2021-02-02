import {FC} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {ProfilePhoto} from "../components/profile/ProfilePhoto"
import {ProfileInfo} from "../components/profile/ProfileInfo"
import {Wall} from "../components/wall/Wall"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1)
        }
    })
)

export const ProfilePage: FC = () => {
    const classes = useStyles()

    return (
        <Grid container direction="column" spacing={2}>
            <Grid container item spacing={2}>
                <Grid item xs={12} sm={3} md={3}>
                    <Paper elevation={1} className={classes.paper}>
                        <ProfilePhoto/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9} md={9}>
                    <Paper elevation={1} className={classes.paper}>
                        <ProfileInfo/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item>
                <Wall/>
            </Grid>
        </Grid>
    )
}