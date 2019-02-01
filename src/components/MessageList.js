import React, { Component } from 'react';
import App from '../App.js';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeMessage: "",
      newMessageContent: null
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

  createMessage(NewMessage){
    this.messagesRef.push(
      //send message to active room
    );
    this.setState({ newMessageContent: ''});
  }

  handleChange(e) {
    this.setState({ newMessageContent: e.target.value });
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
            )}
        </ul>
        <h3>Active Room: {this.props.activeRoom.key ? this.props.activeRoom.key : "choose a room from above to send a message"}</h3>
        <h4>Create message:</h4>
        <form onSubmit={ e => {
          e.preventDefault();
          this.createMessage(this.state.newMessageContent);
        }}>
          <input type="text" onChange={ (e) => this.handleChange(e)} />
        </form>
        //create a form to submit messages, use .push() on createMessage reference
      </div>
    );
  }


}




export default MessageList;
