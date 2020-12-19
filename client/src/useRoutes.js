import {Switch, Route, Redirect} from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import FriendsPage from "./pages/FriendsPage";
import MessagesPage from "./pages/MessagesPage";
import FeedsPage from "./pages/FeedsPage";
import ProfilePage from "./pages/ProfilePage";

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