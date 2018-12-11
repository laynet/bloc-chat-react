import React, { Component } from 'react';
import App from '../App.js';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
  });


}

  render() {
    return(
      <div>
        {this.props.rooms.map()}
        //need to figure out how to fucking use map again to print the fucking rooms
      </div>
    );
  }


}




export default RoomList;
