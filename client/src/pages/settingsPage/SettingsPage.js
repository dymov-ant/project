import React from "react";
import {connect} from "react-redux";
import {useFormik} from "formik";
import {updateProfile, updateUserPhoto} from "../../redux/actions/profile";

const SettingsPage = ({userId, loading, updateProfile, updateUserPhoto}) => {

    // const update = () => {
    //     const profile = {
    //         id: "5fee3d3d027e6c167f379830",
    //         email: "dymovcom@yandex.ru",
    //         name: "Антон Дымов",
    //         status: null,
    //         birthDate: "1992-08-31T21:06:05.319Z",
    //         city: "Оренбург",
    //         maritalStatus: null,
    //         education: "ОГУ 2015",
    //         job: null
    //     }
    //     updateProfile(profile);
    // }

    const formik = useFormik({
        initialValues: {photo: null},
        onSubmit: values => {
            const formData = new FormData();
            formData.append("photo", values.photo);
            updateUserPhoto(formData, userId);
        }
    });

    return (
        <div className="settings">
            <h1 className="title settings_title">Настройки профиля</h1>
            <form onSubmit={formik.handleSubmit}>
                <input id="photo" name="photo" type="file" onChange={(event) => {
                    formik.setFieldValue("photo", event.currentTarget.files[0]);
                }} className="form-control" />
                <button className="btn btn__primary" disabled={loading}>Сохранить</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    loading: state.app.loading
})

export default connect(mapStateToProps, {updateProfile, updateUserPhoto})(SettingsPage);