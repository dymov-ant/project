import {FC} from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import {Header} from "./components/Header"
import {Sidebar} from "./components/Sidebar"
import {useRoutes} from "./routes"
import {MobileNavbar} from "./components/MobileNavbar"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: "relative",
            [theme.breakpoints.down("sm")]: {
                paddingBottom: theme.spacing(7)
            }
        },
    })
)

export const App: FC = () => {
    const classes = useStyles()
    const isAuth = true
    const content = useRoutes(isAuth)

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
        </>
    )
}