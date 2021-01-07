import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {connect} from "react-redux";
import AlertList from "../../components/alert/Alert";
import {login} from "../../redux/actions/auth";


const SignInPage = ({loading, login}) => {

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = "Поле обязательно";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Некорректный email";
        }

        if (!values.password) {
            errors.password = "Поле обязательно";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate,
        onSubmit: values => {
            login(values);
        }
    })

    return (
        <div className="sign">
            <i className="fas fa-sign-in-alt fa-2x mb-05"/>
            <h1 className="title mb-05">Вход</h1>
            <form className="sign_form mb-1" onSubmit={formik.handleSubmit}>
                <input
                    className={
                        formik.touched.email && formik.errors.email
                            ? "form-control error mb-05"
                            : "form-control mb-05"
                    }
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {
                    formik.touched.email && formik.errors.email
                        ? (<div className="subtext error mb-05">{formik.errors.email}</div>)
                        : null
                }
                <input
                    className={
                        formik.touched.password && formik.errors.password
                            ? "form-control error mb-05"
                            : "form-control mb-1"
                    }
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {
                    formik.touched.password && formik.errors.password
                        ? (<div className="subtext error mb-05">{formik.errors.password}</div>)
                        : null
                }
                <button type="submit" className="btn btn__primary btn__block" disabled={loading}>Войти</button>
            </form>
            <AlertList/>
            <p className="subtext">Нет аккаунта? <Link to="/register">Регистрация!</Link></p>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.appReducer.loading
});

export default connect(mapStateToProps, {login})(SignInPage);