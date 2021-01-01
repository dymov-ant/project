import React from "react";
import {connect} from "react-redux";
import {updateProfile} from "../redux/actions/profile";

const SettingsPage = ({updateProfile}) => {

    const update = () => {
        const profile = {
            id: "5fee3d3d027e6c167f379830",
            email: "dymovcom@yandex.ru",
            name: "Антон Дымов",
            status: null,
            birthDate: "1992-08-31T21:06:05.319Z",
            city: "Оренбург",
            maritalStatus: null,
            education: "ОГУ 2015",
            job: null
        }
        updateProfile(profile);
    }

    return (
        <div>
            <h1>SettingsPage</h1>
            <button className="btn btn__primary" onClick={() => update()}>Сохранить</button>
        </div>
    )
}

export default connect(null, {updateProfile})(SettingsPage);