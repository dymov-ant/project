import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Wall from "../../components/wall/Wall";
import {getProfile, updateProfileStatus} from "../../redux/actions/profile";
import {getPosts} from "../../redux/actions/posts";
import Spinner from "../../components/spinner/Spinner";
import ProfileStatus from "../../components/profileStatus/ProfileStatus";
import NotFoundPage from "../notFound/404";
import avatar from "../../shared/no_avatar.png";

const ProfilePage = ({loading, id, getProfile, profile, posts, isNotFound, getPosts}) => {

    const {userId} = useParams();
    const activeId = userId || id;

    useEffect(() => {
        getProfile(activeId);
        getPosts(activeId);
    }, [activeId, getProfile, getPosts]);

    if (isNotFound) {
        return <NotFoundPage/>
    }
    if (loading) {
        return <Spinner/>
    }
    return (
        <div className="profile">
            <div className="profile_wrapper">
                <div className="profile_photo">
                    <img
                        src={profile.photo || avatar}
                        alt="avatar"
                        className="card_img"
                    />
                </div>
                <div className="profile_info">
                    <h1 className="title profile_title">{profile.name || "Нет данных"}</h1>
                    <ProfileStatus
                        body={profile.status}
                        updateProfileStatus={updateProfileStatus}
                        activeId={activeId}
                    />
                    <div>
                        <p className="subtext profile_subtext">
                            Дата рождения: <Link
                            to="/friends">{profile.birthDate ? (new Date(profile.birthDate).toLocaleDateString()) : "Нет данных"}</Link>
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
            <Wall data={posts}/>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.appReducer.loading,
    id: state.authReducer.user.userId,
    profile: state.profileReducer.profile,
    posts: state.postsReducer.posts,
    isNotFound: state.appReducer.notFound
});

export default connect(mapStateToProps, {getProfile, getPosts})(ProfilePage);