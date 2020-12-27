import React from "react";
import {NavLink} from "react-router-dom";
import Wall from "../../components/wall/Wall";

const ProfilePage = () => {
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
                        <button className="btn btn__light btn__small btn__block">Сменить</button>
                </div>
                <div className="profile_info">
                    <h1 className="title profile_title">Антон Дымов</h1>
                    <div className="profile_status">
                        <p className="subtext">
                            Тут крутая цитата типо статус
                        </p>
                    </div>
                    <div>
                        <p className="subtext profile_subtext">
                            Дата рождения: <NavLink to="/settings">31.08.1992</NavLink>
                        </p>
                        <p className="subtext profile_subtext">
                            Семейное положение: <NavLink to="/settings">женат</NavLink>
                        </p>
                        <p className="subtext profile_subtext">
                            Место работы: <NavLink to="/settings">ООО "Фирма"</NavLink>
                        </p>
                        <p className="subtext profile_subtext">
                            Веб сайт: <NavLink to="/settings">http://localhost</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <Wall/>
        </div>
    )
}

export default ProfilePage;