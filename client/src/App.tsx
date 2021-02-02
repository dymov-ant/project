import {FC} from "react"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import CircularProgress from "@material-ui/core/CircularProgress"
import {Header} from "./components/Header"
import {Sidebar} from "./components/Sidebar"
import {useRoutes} from "./routes"
import {MobileNavbar} from "./components/MobileNavbar"
import {Notification} from "./components/Notification"
import {GlobalState} from "./redux/store"
import {initialization} from "./redux/actions/app.actions"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: "relative",
            [theme.breakpoints.down("sm")]: {
                paddingBottom: theme.spacing(7)
            }
        },
        spinner: {
            height: "100vh"
        }
    })
)

export const App: FC = () => {
    const classes = useStyles()
    const isAuth = useSelector((state: GlobalState) => state.authReducer.isAuthenticated)
    const message = useSelector((state: GlobalState) => state.appReducer.message)
    const isInitialized = useSelector((state: GlobalState) => state.appReducer.isInitialized)
    const dispatch = useDispatch()
    const content = useRoutes(isAuth)
    const history = useHistory()


    dispatch(initialization(history))

    if (!isInitialized) {
        return (
            <Grid container justify="center" alignItems="center" className={classes.spinner}>
                <Grid item>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Header isAuth={isAuth}/>
            <Container maxWidth="md" className={classes.container}>
                {
                    isAuth
                        ? <>
                            <Grid container spacing={2}>
                                <Hidden smDown>
                                    <Grid item xs={2}>
                                        <Sidebar/>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={12} md={10}>
                                    {content}
                                </Grid>
                            </Grid>
                            <Hidden mdUp>
                                <MobileNavbar/>
                            </Hidden>
                        </>
                        : content
                }
            </Container>
            {(message && message.body.length > 0) && <Notification message={message}/>}
        </>
    )
}