import React, { Component } from 'react';
import App from '../App.js';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  getMessageFromRoom(room) {
    console.log(room.key + "get message");
  }



  render() {
    return(
      <div>
      <h1> Messages </h1>
        //display only the message that corresponds with the room that is clicked
        <ul>
          {this.state.messages.map( (message, index) =>
              <li key={index}>{message.content}</li>
            )
          }
        </ul>
      </div>
    );
  }


}




export default MessageList;
