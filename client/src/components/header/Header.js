import React from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {setShowSidebar} from "../../redux/actions/app";
import {logout} from "../../redux/actions/auth";

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

// const UserBox = ({userName, logout}) => {
//     return (
//         <div className="header_user">
//             <span>{userName}</span>
//             <ul className="header_submenu">
//                 <li><Link className="" to="/settings">Настройки</Link></li>
//                 <li>
//                     <button className="btn btn__block btn__danger" onClick={() => logout()}>Выход</button>
//                 </li>
//             </ul>
//         </div>
//     )
// }

const Header = ({isAuth, isMobile, showSidebar, setShowSidebar, logout}) => {

    const menuToggle = () => {
        setShowSidebar(!showSidebar);
    }

    const history = useHistory();
    const onLogout = () => {
        logout(history);
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
                    // isAuth && <UserBox userName={userName} logout={logout}/>
                    isAuth && <button className="btn btn__small btn__light" onClick={onLogout}>Выход</button>
                }
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    isMobile: state.app.isMobile,
    showSidebar: state.app.showSidebar,
    // userName: state.profile.profile.name
});

export default connect(mapStateToProps, {setShowSidebar, logout})(Header);