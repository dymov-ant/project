import React, {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    const mobileToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <header className="header">
            <div className="header_logo">
                Logo
            </div>
            <div className={isMobile ? "header_burger header_burger__open" : "header_burger"} onClick={mobileToggle}>
                <span/>
            </div>
            <div className="header_user">
                <span>User Name</span>
                <ul className="header_submenu">
                    <li><Link className="" to="/settings">Настройки</Link></li>
                    <li><button className="btn btn__block btn__danger">Выход</button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;