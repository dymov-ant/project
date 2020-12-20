import React, {useEffect} from "react";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {useRoutes} from "./useRoutes";
import {setIsMobile, setShowSidebar} from "./redux/actions/app";
import "./app.sass";

const App = ({isMobile, showSidebar, setIsMobile, setShowSidebar}) => {
    const isAuth = true;
    const routes = useRoutes(isAuth);

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
        window.addEventListener("resize", updateViewState)
    })

    return (
        <>
            <Header/>
            <div className="container">
                {
                    isAuth ?
                        <div className="row justify-content-between relative">
                            <CSSTransition
                                in={showSidebar}
                                classNames="sidebar"
                                unmountOnExit
                            >
                                <Sidebar/>
                            </CSSTransition>
                            <div className="content">
                                {routes}
                            </div>
                        </div> :
                        <div className="content">
                            {routes}
                        </div>
                }
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    isMobile: state.app.isMobile,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, {setIsMobile, setShowSidebar})(App);
