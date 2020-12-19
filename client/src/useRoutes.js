import {Switch, Route, Redirect} from "react-router-dom";
import SettingsPage from "./components/pages/SettingsPage";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/settings" exact>
                    <SettingsPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            {/*<Route path="/login" exact>*/}
            {/*    <LoginPage/>*/}
            {/*</Route>*/}
            {/*<Route path="/register" exact>*/}
            {/*    <RegisterPage/>*/}
            {/*</Route>*/}
            <Redirect to="/"/>
        </Switch>
    )
}