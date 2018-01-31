import React, { Component } from 'react';
import './App.css';
import UserPage from './UserPage.js'
import Search from './Search.js'

const genId = (str1, str2, str3) => {
  const megaStr = '' + str1 + str2 + str3;
  const chars = [];
  for(let i = 0; i < megaStr.length; i++) {
    const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
    if (randomVal % 3 === 0) {
      chars.push(i);
    } else {
      chars.push(String.fromCharCode(randomVal));
    } if(i === str1.length || i === str2.length) chars.push('-')
  }
  return chars.join('');
}

class User {
  constructor(
    name,
    city,
    industry,
    hobbies,
    email
  ) {
    this.name = name;
    this.city = city;
    this.industry = industry;
    this.hobbies = hobbies;
    this.email = email;
    this.id = genId(email, industry, city);
  }
}

const initialState = {
  userPage: undefined,
  users: [
    new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
    new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
    new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
    new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
    new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
    new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
    new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
  ],

  filter: ''
}





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {...initialState, userFilter: initialState.users };

    this.renderUserPage = this.renderUserPage.bind(this);
  }

  handleInputChange(){

  }

  renderUserPage(userId) {

    const user = this.state.users.find( item => item.id === userId);
    return (
      <div>
        <h1>{user.name}</h1>
        <p>City: {user.city}</p>
        <p>Industry: {user.industry}</p>
        <p>Hobbies: {user.hobbies}</p>
        <p>Email: {user.email}</p>
        <a onClick={() => this.setState( {userPage: undefined} )}> Back</a>
      </div>
    );
  }


  render() {

    const {userFilter} = this.state;

    return (
      <div className="App" style={ {height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
        <div style={ {maxWidth: '50%'} }>
          {
            this.state.userPage === undefined ?
            <Search
                users={this.state.users}
                submit={(e) => {
                  this.setState( {filter: e.target.value} );
                }}
                change={(e) => ( this.setState( {userPage: e.target.value} ) )}
              />
          : <UserPage user={this.state.users.find( item => item.id === this.state.userPage)} back={() => this.setState( {userPage: undefined} )} />
          }
          </div>
      </div>
    );
  }
}

export default App;
