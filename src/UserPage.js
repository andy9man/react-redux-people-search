import React from 'react';
import { connect } from 'react-redux';
import {USER_SELECTED} from "./state/helper.js";

const UserPage = props => {
    const user = props.userPage;
    return (
        <div>
            <h1>{user.name}</h1>
            <p>City: {user.city}</p>
            <p>Industry: {user.industry}</p>
            <p>Hobbies: {user.hobbies}</p>
            <p>Email: {user.email}</p>
            <a style={ {border: '1px solid gray', padding: '5px 10px', borderRadius: '5px'} } onClick={props.setUserPage}> Back</a>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
        userPage: state.userPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserPage() {
            dispatch( {type: USER_SELECTED, payload: undefined} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);