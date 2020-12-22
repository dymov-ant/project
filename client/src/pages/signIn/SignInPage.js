import React from "react";
import {Link} from "react-router-dom";

const SignInPage = () => {
    return (
        <div className="row justify-content-center align-items-center column sign">
            <i className="fas fa-sign-in-alt fa-2x mb-05"/>
            <h1 className="h1__sub mb-05">Вход</h1>
            <form className="col__6 mb-1">
                <input className="input mb-05" type="email"/>
                <input className="input mb-1" type="password"/>
                <button className="btn btn__primary btn__block">Войти</button>
            </form>
            <p className="subtext">Нет аккаунта? <Link to="/register">Регистрация!</Link></p>
        </div>
    )
}

export default SignInPage;