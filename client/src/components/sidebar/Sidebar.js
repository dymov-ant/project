import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setShowSidebar} from "../../redux/actions/app";

const Sidebar = ({showSidebar, setShowSidebar}) => {

    const handleClickOutside = event => {
        console.log("click")
        const sidebar = document.getElementsByClassName("sidebar")[0];
        const btn = document.getElementsByClassName("header_burger")[0];
        if (!event.path.includes(sidebar) && !event.path.includes(btn)) {
            setShowSidebar(false);
        }
    };

    const handleClickLink = () => {
        setShowSidebar(false);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

    }, [showSidebar])

    return (
        <nav className={showSidebar ? "sidebar sidebar__show" : "sidebar"}>
            <ul className="sidebar_list">
                <li
                    className="sidebar_item"
                    onClick={handleClickLink}
                >
                    <Link to="/"><i className="far fa-user-circle"/>Профиль</Link>
                </li>
                <li
                    className="sidebar_item"
                    onClick={handleClickLink}
                >
                    <Link to="/friends"><i className="fas fa-users"/>Друзья</Link>
                </li>
                <li
                    className="sidebar_item"
                    onClick={handleClickLink}
                >
                    <Link to="/messages"><i className="far fa-comments"/>Сообщения</Link>
                </li>
                <li
                    className="sidebar_item"
                    onClick={handleClickLink}
                >
                    <Link to="/feed"><i className="fas fa-rss"/>Новости</Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, {setShowSidebar})(Sidebar);