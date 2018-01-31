import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import UserPage from './UserPage.js'
import Search from './Search.js'

const mapStateToProps = state => {
  return { userPage: state.userPage }
}

export default connect( mapStateToProps)(props => {

  const {userPage} = props;

  return (
    <div
      style={ {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      } }>
      <h1 style={ {fontFamily: 'Helvetica',textAlign: 'center'} }>People Search</h1>
      <div style={ {maxWidth: '50%'} }>
        { userPage === undefined ? <Search /> : <UserPage /> }
      </div>
    </div>
  );
})