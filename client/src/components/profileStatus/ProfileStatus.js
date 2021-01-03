import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {updateProfileStatus} from "../../redux/actions/profile";

const ProfileStatus = ({body, updateProfileStatus, activeId, userId}) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(body);
    const [error, setError] = useState(false);

    useEffect(() => {
        setStatus(body);
    }, [body]);

    const activateEditMode = () => {
        if (activeId === userId) {
            setEditMode(true);
        }
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        setError(false);
        updateProfileStatus(status, activeId);
    };

    const onStatusChange = event => {
        if (event.target.value.length > 40) {
            setError(true);
        } else {
            setError(false);
            setStatus(event.target.value);
        }
    };

    return (
        <div className="profile_status">
            {
                editMode
                    ? <input
                        type="text"
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        className="form-control"
                        value={status}
                        autoFocus={true}
                    />
                    : <p
                        className="subtext"
                        onDoubleClick={activateEditMode}
                        onTouchStart={activateEditMode}
                    >
                        {status || "Статус не указан"}
                    </p>
            }
            {error && <span className="subtext error">Максимум 40 символов</span>}
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId
});

export default connect(mapStateToProps, {updateProfileStatus})(ProfileStatus);