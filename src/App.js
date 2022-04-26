import './App.css';
import React, { Component } from 'react';
/* import UserCard from './component/User'
import Count from './Count.js';
import CarColor from './CarColor.js'; */
import PhoneStores from './phonestore/PhoneStores.js';


const users = [
  {
    name: 'John Smith',
    title: 'John',
    hobbies: ['Game', 'Music', 'Act'],
  },
  {
    name: 'Elbert',
    title: 'Alulu',
    hobbies: ['Market', 'Sleep all day'],
  },
  {
    name: 'Kevin',
    title: 'Game',
    hobbies: ['Sport', 'Music', 'Act'],
  },
]
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    }
  }

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  logOut = () => {
    this.setState({ isAuthenticated: false })
  }
  render() {
    /* const userCardContent = users.map((user, index) => {
      return (
        <UserCard name={user.name} title={user.title} hobbies={user.hobbies} key={index} />
      )
    })

    if (this.state.isAuthenticated) {
      return (
        <div className="container">
          <button onClick={this.logOut}>Logout</button>
          {userCardContent}
        </div>
      )
    } else {
      return (
        <div className="container">
          <h2>Hey, you must login to see this content</h2>
          <button onClick={this.onLogin}>Login</button>
        </div>
      )
    } */
    // return <Count />

    // return <CarColor />

    return (<div><PhoneStores /></div>)
  }
}


export default App;
