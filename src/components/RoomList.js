import React, { Component } from 'react';
import App from '../App.js';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    rooms: [],
    newRoomName: ""
    };

    this.createRoom = this.createRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

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

  //make rooms clickable
  //click on a room and the corresponding message shows up and displays in MessageList

  render() {
    return(
      <div>
        <form onSubmit={this.createRoom}>
          <input type="text" value={this.state.newRoomName} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.rooms.map( (room, index) =>
          <li key={index}>{room.name}</li>)}
          //make li clickable here?
        </ul>
      </div>
    );
  }


}




export default RoomList;
