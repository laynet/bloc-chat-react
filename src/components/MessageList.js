import React, { Component } from 'react';
import App from '../App.js';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeMessage: "",
      newMessageContent: ""
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
    this.messagesRef.push({
      roomId: this.props.activeRoom.key,
      username: this.props.user ? this.props.user.displayName : 'Guest',
      content: this.state.newMessageContent,
      createdAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({ newMessageContent: ''});
  }

  deleteMessage(messageName) {
    this.messagesRef.child(messageName.key).remove();
    const newMessages = "";
    this.state.messages.map((message, index) => {
      if (message.key != messageName.key) {
        newMessages.push(message);
      }
    });
    this.setState({messages: newMessages});
  }

  handleChange(event) {
    this.setState({ newMessageContent: event.target.value });
  }




  render() {
    return(
      <div>
      <h1> Messages </h1>
        <ul>
          {this.state.messages
            .filter( message =>  message.roomId === this.props.activeRoom.key)
            .map( (message, index) =>
              <li key={index}>{message.content} from: {message.username}</li>)}
        </ul>
        <h3>Active Room: {this.props.activeRoom.key ? this.props.activeRoom.key : "choose a room from above to send a message"}</h3>
        <h4>Create message:</h4>
        <form onSubmit={ e => {
          e.preventDefault();
          this.createMessage(this.state.newMessageContent);
        }}>
          <input type="text" value={this.state.newMessageContent} onChange={ (event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }


}




export default MessageList;
