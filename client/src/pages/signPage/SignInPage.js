import React from "react";
import {Link} from "react-router-dom";

const SignInPage = () => {
    return (
        <div className="sign">
            <i className="fas fa-sign-in-alt fa-2x mb-05"/>
            <h1 className="title mb-05">Вход</h1>
            <form className="sign_form mb-1">
                <input className="form-control mb-05" type="email" placeholder="Email"/>
                <input className="form-control mb-1" type="password" placeholder="Пароль"/>
                <button className="btn btn__primary btn__block">Войти</button>
            </form>
            <p className="subtext">Нет аккаунта? <Link to="/register">Регистрация!</Link></p>
        </div>
    )
}

export default SignInPage;