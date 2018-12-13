<ul id="room-list">
  {this.state.rooms.map( room=>
    <li key={room.key} className
  )}
</ul>
  //need to figure out how to fucking use map again to print the fucking rooms

      {this.state.rooms.map( room =>
          <li key={room.key} className={ this.props.activeRoom && this.props.activeRoom.key === room.key ? 'active' : '' }>
            <button onClick={ () => this.props.setRoom(room) } className="room-name">{ room.name }</button>
            { room.creator && this.props.user && room.creator.email === this.props.user.email &&
              <button onClick={ () => this.removeRoom(room) } className="remove remove-room-button">&times;</button>
            }
          </li>
      )}
</ul>
