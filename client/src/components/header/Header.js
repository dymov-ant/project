import React, {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setShowSidebar} from "../../redux/actions/app";

const Header = ({showSidebar, setShowSidebar}) => {

    const menuToggle = () => {
        setShowSidebar(!showSidebar);
    }

    return (

        <header className="header">
            <div className="header_wrapper container">
                <div className="header_logo">
                    Logo
                </div>
                <div
                    className={showSidebar ? "header_burger header_burger__open" : "header_burger"}
                    onClick={menuToggle}
                >
                    <span/>
                </div>
                <div className="header_user">
                    <span>User Name</span>
                    <ul className="header_submenu">
                        <li><Link className="" to="/settings">Настройки</Link></li>
                        <li>
                            <button className="btn btn__block btn__danger">Выход</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, {setShowSidebar})(Header);