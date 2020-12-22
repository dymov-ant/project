import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setShowSidebar} from "../../redux/actions/app";

const Logo = () => {
    return (
        <div className="header_logo">
            Logo
        </div>
    )
}

const Burger = ({isOpen, menuToggle}) => {
    return (
        <div
            className={isOpen ? "header_burger header_burger__open" : "header_burger"}
            onClick={menuToggle}
        >
            <span/>
        </div>
    )
}

const UserBox = () => {
    return (
        <div className="header_user">
            <span>User Name</span>
            <ul className="header_submenu">
                <li><Link className="" to="/settings">Настройки</Link></li>
                <li>
                    <button className="btn btn__block btn__danger">Выход</button>
                </li>
            </ul>
        </div>
    )
}

const Header = ({isAuth, isMobile, showSidebar, setShowSidebar}) => {

    const menuToggle = () => {
        setShowSidebar(!showSidebar);
    }

    return (

        <header className="header">
            <div className="header_wrapper container">
                {
                    isAuth
                        ? isMobile
                            ? <Burger isOpen={showSidebar} menuToggle={menuToggle}/>
                            : <Logo/>
                        : <Logo/>
                }
                {
                    isAuth && <UserBox/>
                }
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    isMobile: state.app.isMobile,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, {setShowSidebar})(Header);