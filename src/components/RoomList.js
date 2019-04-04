import React, { Component } from 'react';
import App from '../App.js';
import MessageList from './MessageList';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    rooms: [],
    newRoomName: "",
    };

    this.createRoom = this.createRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleClick = this.handleClick.bind(this);

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

  deleteRoom(index) {
    this.roomsRef.child(index.key).remove();
    this.setState({ rooms: this.state.rooms.filter(room => room !== index) })

  }

  handleChange(event){
    console.log('handleChange');
    this.setState({newRoomName: event.target.value});
  }

  handleClick(event){
    event.preventDefault();
    this.props.setActiveRoom(this.roomsRef.child(event.target.textContent));
    console.log("yo");
  }




  render() {
    return(
      <div>
        <form onSubmit={this.createRoom}>
          <input type="text" value={this.state.newRoomName} onChange={this.handleChange}/>
          <input type="submit" value="Create Chat Room" />
        </form>
        <ul>
          {this.state.rooms.map( (room, index) =>
          <li key={index} onClick={this.handleClick}>{room.name}>
          <button id="deleteRoom" onClick={ () => this.deleteRoom(room) }>
          delete</button>
          </li>)}

        </ul>
      </div>
    );
  }


}




export default RoomList;
