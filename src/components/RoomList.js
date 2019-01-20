import React, { Component } from 'react';
import App from '../App.js';
import MessageList from './MessageList';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
    rooms: [],
    newRoomName: ""
    };

    this.createRoom = this.createRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
=======
    rooms: []
    };

>>>>>>> 6a99e0c19ca9f7f780d29bf8685a8d87a8e33a18
=======
    rooms: [],
    newRoomName: "",
    };

    this.createRoom = this.createRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
>>>>>>> checkpoint-list-messages
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> checkpoint-list-messages
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }
<<<<<<< HEAD

  createRoom(event) {
    console.log(this.state.newRoomName);
    event.preventDefault();
    this.roomsRef.push({
      name: this.state.newRoomName
    });
  }

  handleChange(event){
    console.log('boo');
    this.setState({newRoomName: event.target.value});
  }



  render() {
    return(
      <div>
        <form onSubmit={this.createRoom}>
          <input type="text" value={this.state.newRoomName} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        //onsubmit executes createRoom method that pushes new room to firebase
        <ul>
          {this.state.rooms.map( (room, index) =>
          <li key={index}>{room.name}</li>)}
        </ul>
      </div>
    );
  }
=======
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
  });
=======
>>>>>>> checkpoint-list-messages

  createRoom(event) {
    console.log(this.state.newRoomName);
    event.preventDefault();
    this.roomsRef.push({
      name: this.state.newRoomName
    });
    this.setState({newRoomName: ""});
    console.log('createRoom');
  }

  handleChange(event){
    console.log('handleChange');
    this.setState({newRoomName: event.target.value});
  }

<<<<<<< HEAD
render() {
  return(
    <ul>
      {this.state.rooms.map( (room, index) =>
      <li key={index}>{room.name}</li>)}
    </ul>
  );
}
>>>>>>> 6a99e0c19ca9f7f780d29bf8685a8d87a8e33a18
=======
  handleClick(event){
    event.preventDefault();
    this.props.setActiveRoom(this.roomsRef.child(event.target.textContent));
  }
  

  render() {
    return(
      <div>
        <form onSubmit={this.createRoom}>
          <input type="text" value={this.state.newRoomName} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.rooms.map( (room, index) =>
          <li key={index} onClick={this.handleClick}>{room.name}</li>)}
        </ul>
      </div>
    );
  }
>>>>>>> checkpoint-list-messages


}




export default RoomList;
