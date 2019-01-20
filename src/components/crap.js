<ul id="room-list">
            {this.state.rooms.map( room =>
                <li key={room.key} className={ this.props.activeRoom && this.props.activeRoom.key === room.key ? 'active' : '' }>
                  <button onClick={ () => this.props.setRoom(room) } className="room-name">{ room.name }</button>
                  { room.creator && this.props.user && room.creator.email === this.props.user.email &&
                    <button onClick={ () => this.removeRoom(room) } className="remove remove-room-button">&times;</button>
                  }
                </li>
            )}
</ul>
handleClick needs to setActiveRoom on app js

//so app js needs a new state property called activeRoom
//and app js need a function call setActiveRoom
handleClick should call setActiveRoom
and setActiveRoom should call setState with the new room object

messages for room1 and room2 need to stop being displayed

hanndleClick targets the room, and is passed to setActiveRoom.
setActive room sets the state to whatever handleClick picked
setActiveRoom is passed to MessageList where we write a function that displays only the activeRoom


in your `componentDidMount` you will add an event listener to pull all the messages from the database and save them to the state

{
this.state.messages
  .filter(...)
  .map(...)
}
