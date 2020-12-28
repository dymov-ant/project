import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from "formik";

const SignUpPage = () => {

    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.name = "Поле обязательно";
        }

        if (!values.email) {
            errors.email = "Поле обязательно";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Некорректный email";
        }

        if (!values.password) {
            errors.password = "Поле обязательно";
        }

        if (!values.birthdate) {
            errors.birthdate = "Поле обязательно";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            birthdate: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <div>
            <div className="sign">
                <i className="fas fa-user-plus fa-2x mb-05"/>
                <h1 className="title mb-05">Регистрация</h1>
                <form className="sign_form mb-1" onSubmit={formik.handleSubmit}>
                    <input
                        className={
                            formik.touched.name && formik.errors.name
                                ? "form-control error mb-05"
                                : "form-control mb-05"
                        }
                        name="name"
                        type="text"
                        placeholder="Имя и фамилия"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {
                        formik.touched.name && formik.errors.name
                            ? (<div className="subtext error mb-05">{formik.errors.name}</div>)
                            : null
                    }
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
                                : "form-control mb-05"
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
                    <label htmlFor=""><p className="subtext">Дата рождения</p></label>
                    <input
                        className={
                            formik.touched.birthdate && formik.errors.birthdate
                                ? "form-control error mb-05"
                                : "form-control mb-1"
                        }
                        name="birthdate"
                        type="date"
                        placeholder="Дата рождения"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.birthdate}
                    />
                    {
                        formik.touched.birthdate && formik.errors.birthdate
                            ? (<div className="subtext error mb-05">{formik.errors.birthdate}</div>)
                            : null
                    }
                    <button className="btn btn__primary btn__block" type="submit">Регистрация</button>
                </form>
                <p className="subtext">Уже есть аккаунт? <Link to="/">Войти!</Link></p>
            </div>
        </div>
    )
}

export default SignUpPage;