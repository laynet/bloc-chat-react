import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase/';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList';
import User from './components/User';



var config = {
    apiKey: "AIzaSyAYtUinYsShjAWpPO09DaE7JQGEDtTm4T0",
    authDomain: "bloc-chat-react-ab495.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-ab495.firebaseio.com",
    projectId: "bloc-chat-react-ab495",
    storageBucket: "bloc-chat-react-ab495.appspot.com",
    messagingSenderId: "742711279499"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: "",
      currentUser: null,
      //store data provided by firebase authentication

    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(roomFromChild){
    this.setState({activeRoom: roomFromChild });
  }

  setUser(user) {
    this.setState({ currentUser: user});
    console.log('setUser called');
}




  render() {
    return (
      <div className="App">
        <User firebase={firebase} currentUser={this.state.currentUser} setUser={this.setUser}/>
        <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
    );
  }
}

export default App;
