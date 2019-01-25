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

      </div>
    );
  }
}

export default User;

// const provider = new this.props.firebase.auth.GoogleAuthProvider();
// this.props.firebase.auth().signInWithPopup( provider );
// this.props.firebase.auth().signOut();

//componentDidMount(){
//registers an onAuthStatechanged event handler
//this.props.firebase.auth().onAuthStateChanged( user => {
  //this.props.setUser(user);
//});
//}

    //make sign in button
    //onclick should call firebase's singInWithPopup

    //add signout button that call's firebase signout method

    //Render this.props.user.displayName in the User component so that the current user is visible. Consider rendering the text "Guest" for anonymous users.
