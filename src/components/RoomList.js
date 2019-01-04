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


}




export default RoomList;
