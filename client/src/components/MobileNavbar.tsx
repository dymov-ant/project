import React, {FC} from "react"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import PersonIcon from "@material-ui/icons/Person"
import PeopleIcon from "@material-ui/icons/People"
import ForumIcon from "@material-ui/icons/Forum"

const useStyles = makeStyles({
    root: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
        // width: "100%"
    },
})

// todo поправить активную кнопку при перезагрузке страницы

export const MobileNavbar: FC = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Профиль" icon={<PersonIcon/>} component={Link} to="/profile"/>
            <BottomNavigationAction label="Друзья" icon={<PeopleIcon/>} component={Link} to="/friends"/>
            <BottomNavigationAction label="Сообщения" icon={<ForumIcon/>} component={Link} to="/messages"/>
        </BottomNavigation>
    )
}