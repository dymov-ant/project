import React, {useEffect} from "react";
import {connect} from "react-redux";
import {deleteNotification} from "../../redux/actions/app";

const Alert = ({id, type, body, handleDelete}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleDelete(id);
        }, 4000);
        return () => clearTimeout(timeout);
    });

    return (
        <div className={"alert " + type}>
            {body}
            <i className="fas fa-times" onClick={() => handleDelete(id)}/>
        </div>
    )
}

const AlertList = ({notifications, deleteNotification}) => {

    const handleDelete = id => {
        deleteNotification(id);
    }

    return (
        <div>
            {notifications.map(
                item => <Alert key={item.id} id={item.id} type={item.type} body={item.body} handleDelete={handleDelete}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    notifications: state.app.notifications
})

export default connect(mapStateToProps, {deleteNotification})(AlertList);