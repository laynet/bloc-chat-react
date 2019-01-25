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
      console.log(user);
      this.props.setUser(user);
    });
  }

  signIn() {
    console.log('hello');
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase
      .auth()
      .signInWithPopup( provider )
      .then(function(result) {
        console.log(result);
        console.log('Success Google Login');
      })
      .catch(function(error) {
        console.log(error);
        console.log('Failed to Sign in with Google');
      });
  }

  signOut() {
    console.log('hello');
    this.props.firebase
    .auth()
    .signOut()
    .then(function(result) {
        console.log(result);
        console.log('Successful Sign Out');
      })
      .catch(function(error) {
        console.log(error);
        console.log('Failed to Sign Out');
      });
  }

  render() {
    return(
      <div>
        <section className="show-user">Current User: {this.props.user ? this.props.currentUser.displayName : 'Guest'}</section>
        <button onClick={this.signIn}>Sign In</button>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default User;
