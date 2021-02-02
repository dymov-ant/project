import React, {FC} from "react"
import {Link} from "react-router-dom"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import ListItemText from "@material-ui/core/ListItemText"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import PersonIcon from "@material-ui/icons/Person"
import PeopleIcon from "@material-ui/icons/People"
import ForumIcon from "@material-ui/icons/Forum"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            minWidth: "0",
            marginRight: "8px"
        }
    })
)

export const Sidebar: FC = () => {
    const classes = useStyles()
    return (
        <MenuList disablePadding>

            <MenuItem disableGutters button component={Link} to="/profile">
                <ListItemIcon className={classes.icon}>
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText>
                    Профиль
                </ListItemText>
            </MenuItem>

            <MenuItem disableGutters button component={Link} to="/friends">
                <ListItemIcon className={classes.icon}>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText>
                    Друзья
                </ListItemText>
            </MenuItem>

            <MenuItem disableGutters button component={Link} to="/messages">
                <ListItemIcon className={classes.icon}>
                    <ForumIcon/>
                </ListItemIcon>
                <ListItemText>
                    Сообщения
                </ListItemText>
            </MenuItem>
        </MenuList>
    )
}