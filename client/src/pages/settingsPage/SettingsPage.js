import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useFormik} from "formik";
import {getProfile, updateProfile, updateUserPhoto} from "../../redux/actions/profile";
import Spinner from "../../components/spinner/Spinner";
import SettingsInfo from "../../components/settings/SettingsInfo";

const SettingsPhoto = ({updateUserPhoto, userId, loading}) => {
    const formik = useFormik({
        initialValues: {photo: null},
        onSubmit: values => {
            const formData = new FormData();
            formData.append("photo", values.photo);
            updateUserPhoto(formData, userId);
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
                <button type="submit" className="btn btn__primary btn__small" disabled={loading}>Обновить фотографию</button>
            </div>
        </form>
    )
};

const SettingsPassword = () => {
    return (
        <form className="settings_block">
            <div className="settings_item">
                <label htmlFor="password" className="subtext">Текущий пароль:</label>
                <input type="password" id="password" name="password" className="form-control"/>
            </div>
            <div className="settings_item">
                <label htmlFor="newPassword" className="subtext">Новый пароль:</label>
                <input type="password" id="newPassword" name="newPassword" className="form-control"/>
            </div>
            <div className="settings_item">
                <button type="submit" className="btn btn__primary btn__small">Изменить пароль</button>
            </div>
        </form>
    )
}

const SettingsPage = ({userId, loading, getProfile, updateUserPhoto}) => {

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
            <SettingsPhoto updateUserPhoto={updateUserPhoto} userId={userId} loading={loading}/>
            <span className="subtext settings_subtext">Информация о пользователе</span>
            <SettingsInfo/>
            <span className="subtext settings_subtext">Пароль</span>
            <SettingsPassword/>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    loading: state.app.loading,
    profile: state.profile.profile
});

export default connect(mapStateToProps, {getProfile, updateProfile, updateUserPhoto})(SettingsPage);