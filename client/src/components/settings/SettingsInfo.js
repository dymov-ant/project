import React from "react";
import {useFormik} from "formik";
import {connect} from "react-redux";
import {getProfile, updateProfile} from "../../redux/actions/profile";
import Spinner from "../spinner/Spinner";

const SettingsInfo = ({profile, userId, loading, updateProfile}) => {

    const validate = values => {

        const errors = {};

        if (!values.name.trim()) {
            errors.name = "Поле обязательно";
        } else if (values.name.trim().length < 5) {
            errors.name = "Минимальная длина имени и фамилии 5 символов";
        } else if (values.name.trim().length > 50) {
            errors.name = "Максимальная длина имени и фамилии 50 символов";
        }

        if (!values.email) {
            errors.email = "Поле обязательно";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Некорректный email";
        }

        if (!values.birthDate) {
            errors.birthDate = "Поле обязательно";
        }

        if (values.city.trim().length > 30) {
            errors.city = "Максимальная длина названия города 30 символов";
        }

        if (values.maritalStatus.trim().length > 30) {
            errors.maritalStatus = "Максимальная длина семейного положения 30 символов";
        }

        if (values.education.trim().length > 30) {
            errors.education = "Максимальная длина образования 30 символов";
        }

        if (values.job.trim().length > 30) {
            errors.job = "Максимальная длина места работы 30 символов";
        }

        return errors;
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: profile.name || "Нет данных",
            email: profile.email || "Нет данных",
            birthDate: profile.birthDate || Date.now(),
            city: profile.city || "Нет данных",
            maritalStatus: profile.maritalStatus || "Нет данных",
            education: profile.education || "Нет данных",
            job: profile.job || "Нет данных"
        },
        validate,
        onSubmit: values => {
            for (const key in values) {
                values[key] = values[key].trim();
            }
            updateProfile(userId, values);
        }
    });

    if (loading) return <Spinner/>

    return (
        <form className="settings_block" onSubmit={formik.handleSubmit}>
            <div className="settings_item">
                <label htmlFor="name" className="subtext">Имя и фамилия:</label>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={
                            formik.touched.name && formik.errors.name
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Имя и фамилия"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {
                        formik.touched.name && formik.errors.name
                            ? (<div className="subtext error">{formik.errors.name}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="email" className="subtext">Email:</label>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={
                            formik.touched.email && formik.errors.email
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {
                        formik.touched.email && formik.errors.email
                            ? (<div className="subtext error">{formik.errors.email}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="birthDate" className="subtext">Дата рождения:</label>
                <div>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        className={
                            formik.touched.birthDate && formik.errors.birthDate
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Дата рождения"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // value={(new Date(formik.values.birthDate).toISOString().split("T")[0])}
                        value={formik.values.birthDate}
                        min="1920-01-01"
                        max={new Date().toISOString().split("T")[0]}
                    />
                    {
                        formik.touched.birthDate && formik.errors.birthDate
                            ? (<div className="subtext error">{formik.errors.birthDate}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="city" className="subtext">Город:</label>
                <div>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className={
                            formik.touched.city && formik.errors.city
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Город"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    {
                        formik.touched.city && formik.errors.city
                            ? (<div className="subtext error">{formik.errors.city}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="maritalStatus" className="subtext">Семейное положение:</label>
                <div>
                    <input
                        type="text"
                        id="maritalStatus"
                        name="maritalStatus"
                        className={
                            formik.touched.maritalStatus && formik.errors.maritalStatus
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Семейное положение"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.maritalStatus}
                    />
                    {
                        formik.touched.maritalStatus && formik.errors.maritalStatus
                            ? (<div className="subtext error">{formik.errors.maritalStatus}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="education" className="subtext">Образование:</label>
                <div>
                    <input
                        type="text"
                        id="education"
                        name="education"
                        className={
                            formik.touched.education && formik.errors.education
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Образование"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.education}
                    />
                    {
                        formik.touched.education && formik.errors.education
                            ? (<div className="subtext error">{formik.errors.education}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="job" className="subtext">Место работы:</label>
                <div>
                    <input
                        type="text"
                        id="job"
                        name="job"
                        className={
                            formik.touched.job && formik.errors.job
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Место работы"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.job}
                    />
                    {
                        formik.touched.job && formik.errors.job
                            ? (<div className="subtext error">{formik.errors.job}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <button type="submit" className="btn btn__primary btn__small" disabled={loading}>Сохранить данные</button>
            </div>
        </form>
    )
};

const mapStateToProps = state => ({
    userId: state.authReducer.user.userId,
    loading: state.appReducer.loading,
    profile: state.profileReducer.profile
});

export default connect(mapStateToProps, {updateProfile, getProfile})(SettingsInfo);