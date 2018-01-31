import React, { Component } from 'react';

export default props => {
    const {user} = props;
    return (
        <div>
            <h1>{user.name}</h1>
            <p>City: {user.city}</p>
            <p>Industry: {user.industry}</p>
            <p>Hobbies: {user.hobbies}</p>
            <p>Email: {user.email}</p>
            <a onClick={props.back}> Back</a>
        </div>
    );
}