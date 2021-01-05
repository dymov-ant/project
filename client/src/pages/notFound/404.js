import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1 className="title">404</h1>
            <p className="subtext"><Link to="/">На главную страницу</Link></p>
        </div>
    )
}

export default NotFoundPage;