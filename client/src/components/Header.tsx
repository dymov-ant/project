import React, {FC} from "react"
import {Link} from "react-router-dom"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import SettingsIcon from "@material-ui/icons/Settings"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Container from "@material-ui/core/Container"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: "8px"
        },
        title: {
            flexGrow: 1,
        },
        menuIcon: {
            marginRight: "0.3rem"
        },
        smallAvatar: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
    }),
)

interface IHeaderProps {
    isAuth: boolean
}

export const Header: FC<IHeaderProps> = ({isAuth}) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <Typography variant="h6" className={classes.title}>
                            SocialNetwork
                        </Typography>
                        {isAuth && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Avatar src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
                                            className={classes.smallAvatar}/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} component={Link} to="/settings">
                                        <SettingsIcon color="primary" className={classes.menuIcon}/>
                                        <Typography color="primary">Настройки</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ExitToAppIcon color="secondary" className={classes.menuIcon}/>
                                        <Typography color="secondary">Выход</Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
