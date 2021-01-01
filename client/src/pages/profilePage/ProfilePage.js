import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Wall from "../../components/wall/Wall";
import {getProfile} from "../../redux/actions/profile";

const ProfilePage = ({id, getProfile, profile}) => {

    useEffect(() => {
        getProfile(id);
    }, [id])

    const src = "https://img4.goodfon.ru/original/2048x1344/6/55/kot-sneg-zima-1.jpg";
    // const src = "http://archilab.online/images/1/123.jpg";
    return (
        <div className="profile">
            <div className="profile_wrapper">
                <div className="profile_photo">
                        <img
                            src={src}
                            alt="avatar"
                            className="card_img"
                        />
                        {/*<button className="btn btn__light btn__small btn__block">Сменить</button>*/}
                </div>
                <div className="profile_info">
                    <h1 className="title profile_title">{profile.name || "Нет данных"}</h1>
                    <div className="profile_status">
                        <p className="subtext">
                            {profile.status || "Кликните два раза для изменения статуса"}
                        </p>
                    </div>
                    <div>
                        <p className="subtext profile_subtext">
                            Дата рождения: <Link to="/friends">{profile.birthDate ? (new Date(profile.birthDate).toLocaleDateString()) : "Нет данных"}</Link>
                        </p>
                        <p className="subtext profile_subtext">
                            Город: <Link to="/friends">{profile.city || "Нет данных"}</Link>
                        </p>
                        <p className="subtext profile_subtext">
                            Семейное положение: <Link to="/friends">{profile.maritalStatus || "Нет данных"}</Link>
                        </p>
                        <p className="subtext profile_subtext">
                            Образование: <Link to="/friends">{profile.education || "Нет данных"}</Link>
                        </p>
                        <p className="subtext profile_subtext">
                            Место работы: <Link to="/friends">{profile.job || "Нет данных"}</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Wall data={profile.posts}/>
        </div>
    )
}

const mapStateToProps = state => ({
    id: state.auth.user.userId,
    profile: state.profile.profile
});

export default connect(mapStateToProps, {getProfile})(ProfilePage);