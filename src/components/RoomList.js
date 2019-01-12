import React, { Component } from 'react';
import App from '../App.js';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
<<<<<<< HEAD
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
=======
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
  });


}

render() {
  return(
    <ul>
      {this.state.rooms.map( (room, index) =>
      <li key={index}>{room.name}</li>)}
    </ul>
  );
}
>>>>>>> 6a99e0c19ca9f7f780d29bf8685a8d87a8e33a18


}




export default RoomList;
