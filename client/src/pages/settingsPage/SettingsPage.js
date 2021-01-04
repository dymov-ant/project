import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useFormik} from "formik";
import {getProfile, updatePassword, updateProfile, updateUserPhoto} from "../../redux/actions/profile";
import Spinner from "../../components/spinner/Spinner";
import SettingsInfo from "../../components/settings/SettingsInfo";

const SettingsPhoto = ({updateUserPhoto, loading}) => {
    const formik = useFormik({
        initialValues: {photo: null},
        onSubmit: values => {
            const formData = new FormData();
            formData.append("photo", values.photo);
            updateUserPhoto(formData);
        }
    });
    return (
        <form className="settings_block settings_photo" onSubmit={formik.handleSubmit}>
            <div className="settings_item">
                <label htmlFor="photo" className="subtext">Фотография:</label>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    className="form-control"
                    onChange={(event) => {
                        formik.setFieldValue("photo", event.currentTarget.files[0])
                    }}
                />
            </div>
            <div className="settings_item">
                <button type="submit" className="btn btn__primary btn__small" disabled={loading}>Обновить фотографию
                </button>
            </div>
        </form>
    )
};

const SettingsPassword = ({updatePassword, userId}) => {

    const validate = values => {

        const errors = {};

        if (!values.password) {
            errors.password = "Поле обязательно";
        } else if (values.password.length < 6) {
            errors.password = "Минимальная длина пароля 6 символов";
        } else if (values.password.length > 50) {
            errors.password = "Максимальная длина пароля 50 символов";
        }

        if (!values.newPassword) {
            errors.newPassword = "Поле обязательно";
        } else if (values.newPassword.length < 6) {
            errors.newPassword = "Минимальная длина нового пароля 6 символов";
        } else if (values.newPassword.length > 50) {
            errors.newPassword = "Максимальная длина нового пароля 50 символов";
        }

        return errors;
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: "",
            newPassword: ""
        },
        validate,
        onSubmit: values => {
            updatePassword(values, userId);
        }
    });

    return (
        <form className="settings_block" onSubmit={formik.handleSubmit}>
            <div className="settings_item">
                <label htmlFor="password" className="subtext">Текущий пароль:</label>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={
                            formik.touched.password && formik.errors.password
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Текущий пароль"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {
                        formik.touched.password && formik.errors.password
                            ? (<div className="subtext error">{formik.errors.password}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <label htmlFor="newPassword" className="subtext">Новый пароль:</label>
                <div>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className={
                            formik.touched.newPassword && formik.errors.newPassword
                                ? "form-control error mb-05"
                                : "form-control"
                        }
                        placeholder="Новый пароль"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newPassword}
                    />
                    {
                        formik.touched.newPassword && formik.errors.newPassword
                            ? (<div className="subtext error">{formik.errors.newPassword}</div>)
                            : null
                    }
                </div>
            </div>
            <div className="settings_item">
                <button type="submit" className="btn btn__primary btn__small">Изменить пароль</button>
            </div>
        </form>
    )
}

const SettingsPage = ({userId, loading, getProfile, updateUserPhoto, updatePassword}) => {

    useEffect(() => {
        getProfile(userId);
    }, [userId, getProfile])

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className="settings">
            <h1 className="title settings_title">Настройки профиля</h1>
            <span className="subtext settings_subtext">Фотография</span>
            <SettingsPhoto updateUserPhoto={updateUserPhoto} loading={loading}/>
            <span className="subtext settings_subtext">Информация о пользователе</span>
            <SettingsInfo/>
            <span className="subtext settings_subtext">Пароль</span>
            <SettingsPassword updatePassword={updatePassword} userId={userId}/>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    loading: state.app.loading,
    profile: state.profile.profile
});

export default connect(
    mapStateToProps,
    {getProfile, updateProfile, updateUserPhoto, updatePassword})(SettingsPage);