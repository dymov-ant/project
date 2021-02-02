import {ReactElement} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {ProfilePage} from "./pages/ProfilePage"
import {LoginPage} from "./pages/LoginPage"
import {FriendsPage} from "./pages/FriendsPage"
import {MessagesPage} from "./pages/MessagesPage"
import {RegisterPage} from "./pages/RegisterPage"
import {SettingsPage} from "./pages/SettingsPage"


export const useRoutes: (isAuth: boolean) => ReactElement = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/profile">
                    <ProfilePage/>
                </Route>
                <Route path="/friends" exact>
                    <FriendsPage/>
                </Route>
                <Route path="/messages" exact>
                    <MessagesPage/>
                </Route>
                <Route path="/settings" exact>
                    <SettingsPage/>
                </Route>
                <Redirect to="/profile"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/login">
                <LoginPage/>
            </Route>
            <Route path="/register">
                <RegisterPage/>
            </Route>
            <Redirect to="/login"/>
        </Switch>
    )
}