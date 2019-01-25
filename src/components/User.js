import React, { Component } from 'react';
import App from '../App.js';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    console.log('hello');
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    console.log('hello');
    this.props.firebase.auth().signOut();
  }

  render() {
    return(
      <div>
        <button onClick={this.signIn}>Sign In</button>
        <button onClick={this.signOut}>Sign Out</button>
        <div>Current User: {this.props.currentUser.displayName}</div>
      </div>
    );
  }
}

export default User;
