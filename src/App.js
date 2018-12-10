import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';



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
  render() {
    return (
      <div className="App">

          <p>
            Bloc Chat
            <RoomList firebase={firebase} />
          </p>

      </div>
    );
  }
}

export default App;
