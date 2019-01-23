import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList';



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
      currentUser: "Guest"
      //store data provided by firebase authentication
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(roomFromChild){
    this.setState({activeRoom: roomFromChild });
  }

  setUser(user) {
    this.setState({ currentUser: user.displayName});

  //pass down to User.js
}




  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
        <User
      </div>
    );
  }
}

export default App;
