import React, { Component } from 'react';
import App from '../App.js';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeMessage: ""
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
    //this.getMessageFromRoom = this.getMessageFromRoom.bind(this);
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }




  render() {
    return(
      <div>
      <h1> Messages </h1>
        <ul>
          {this.state.messages
            .filter( message =>  message.roomId === this.props.activeRoom.key)
            .map( (message, index) =>
              <li key={index}>{message.content}</li>
            )
          }
        </ul>
      </div>
    );
  }


}




export default MessageList;
