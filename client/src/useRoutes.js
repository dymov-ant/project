import {Switch, Route, Redirect} from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import SignInPage from "./pages/signPage/SignInPage";
import SignUpPage from "./pages/signPage/SignUpPage";
import FriendsPage from "./pages/FriendsPage";
import MessagesPage from "./pages/MessagesPage";
import FeedsPage from "./pages/FeedsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/settings" exact>
                    <SettingsPage/>
                </Route>
                <Route path="/friends" exact>
                    <FriendsPage/>
                </Route>
                <Route path="/messages" exact>
                    <MessagesPage/>
                </Route>
                <Route path="/feed" exact>
                    <FeedsPage/>
                </Route>
                <Route path="/" exact>
                    <ProfilePage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <SignInPage/>
            </Route>
            <Route path="/register" exact>
                <SignUpPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}