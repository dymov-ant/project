import { FC } from "react"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import MuiLink from "@material-ui/core/Link"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { ProfileStatus } from "./ProfileStatus"
import { useSelector } from "react-redux"
import { GlobalState } from "../../redux/store"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleWrapper: {
            marginBottom: theme.spacing(1)
        },
        title: {
            paddingLeft: "4px"
        },
        infoWrapper: {
            paddingLeft: "4px"
        },
        infoItem: {
            display: "flex",
            alignItems: "center",
            marginBottom: "6px",
            "&:last-of-type": {
                marginBottom: 0
            }
        },
        infoLink: {
            marginLeft: theme.spacing(1)
        }
    })
)

export const ProfileInfo: FC = () => {
    const classes = useStyles()
    const profile = useSelector((state: GlobalState) => state.profileReducer.profile)

    return (
        profile ?
            <>
                <div className={classes.titleWrapper}>
                    <Typography variant="h5" className={classes.title}>
                        {profile.name || "Нет данных"}
                    </Typography>
                    <ProfileStatus status={profile.status}/>
                    <Divider/>
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.infoItem}>
                        <Typography variant="caption" color="textSecondary">
                            Дата рождения:
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/settings"
                            variant="body2"
                            className={classes.infoLink}
                        >
                            {format(new Date(profile.birthDate), "dd.MM.yyyy") || "Нет данных"}
                        </MuiLink>
                    </div>
                    <div className={classes.infoItem}>
                        <Typography variant="caption" color="textSecondary">
                            Город:
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/settings"
                            variant="body2"
                            className={classes.infoLink}
                        >
                            {profile.city || "Нет данных"}
                        </MuiLink>
                    </div>
                    <div className={classes.infoItem}>
                        <Typography variant="caption" color="textSecondary">
                            Семейное положение:
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/settings"
                            variant="body2"
                            className={classes.infoLink}
                        >
                            {profile.maritalStatus || "Нет данных"}
                        </MuiLink>
                    </div>
                    <div className={classes.infoItem}>
                        <Typography variant="caption" color="textSecondary">
                            Образование:
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/settings"
                            variant="body2"
                            className={classes.infoLink}
                        >
                            {profile.education || "Нет данных"}
                        </MuiLink>
                    </div>
                    <div className={classes.infoItem}>
                        <Typography variant="caption" color="textSecondary">
                            Место работы:
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/settings"
                            variant="body2"
                            className={classes.infoLink}
                        >
                            {profile.job || "Нет данных"}
                        </MuiLink>
                    </div>
                </div>
            </>
            : null
    )
}