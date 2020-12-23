import React from "react";
import {Link} from "react-router-dom";

const SignUpPage = () => {
    return (
        <div>
            <div className="sign">
                <i className="fas fa-user-plus fa-2x mb-05"/>
                <h1 className="title mb-05">Регистрация</h1>
                <form className="sign_form mb-1">
                    <input className="input mb-05" type="text" placeholder="Имя и фамилия"/>
                    <input className="input mb-05" type="email" placeholder="Email"/>
                    <input className="input mb-05" type="password" placeholder="Пароль"/>
                    <label htmlFor=""><p className="subtext">Дата рождения</p></label>
                    <input className="input mb-1" type="date" placeholder="Дата рождения"/>
                    <button className="btn btn__primary btn__block">Регистрация</button>
                </form>
                <p className="subtext">Уже есть аккаунт? <Link to="/">Войти!</Link></p>
            </div>
        </div>
    )
}

export default SignUpPage;