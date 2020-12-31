import React, {useEffect} from "react";
import {connect} from "react-redux";
import jwtDecode from "jwt-decode";
import {CSSTransition} from "react-transition-group";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {useRoutes} from "./useRoutes";
import {setIsMobile, setShowSidebar} from "./redux/actions/app";
import setAuthToken from "./services/setAuthToken";
import {logout, setCurrentUser} from "./redux/actions/auth";
import "./app.sass";

const App = ({isMobile, showSidebar, setIsMobile, setShowSidebar, isAuthenticated, setCurrentUser, logout}) => {

    if (localStorage.access_token) {
        const {access_token} = localStorage;
        setAuthToken(access_token);
        const decoded = jwtDecode(access_token);
        setCurrentUser(decoded);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            logout();
            window.location.href = "/login"
        }
    }

    // const isAuth = false;
    const routes = useRoutes(isAuthenticated);

    const updateViewState = () => {
        if (!isMobile && document.documentElement.clientWidth <= 768) {
            setIsMobile(true);
            setShowSidebar(false);
        } else if (document.documentElement.clientWidth > 768) {
            setIsMobile(false);
            setShowSidebar(true);
        }
    }

    useEffect(() => {
        updateViewState();
        window.addEventListener("resize", updateViewState);
        return () => window.removeEventListener("resize", updateViewState);
    })

    return (
        <div className={isMobile && showSidebar ? "app shadow" : "app"}>
            <Header isAuth={isAuthenticated}/>
                {
                    isAuthenticated
                        ? <div className="container">
                            <div className="app_wrapper">
                                <CSSTransition
                                    timeout={300}
                                    in={showSidebar}
                                    classNames="sidebar"
                                    unmountOnExit
                                >
                                    <Sidebar/>
                                </CSSTransition>
                                <div className="content">
                                    {routes}
                                </div>
                            </div>
                        </div>
                        : <div className="container">
                            {routes}
                        </div>
                }
        </div>
    );
}

const mapStateToProps = state => ({
    isMobile: state.app.isMobile,
    showSidebar: state.app.showSidebar,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setIsMobile, setShowSidebar, setCurrentUser, logout})(App);
