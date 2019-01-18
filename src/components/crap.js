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

so app js needs a new state property called activeRoom
and app js need a function call setActiveRoom
handleClick should call setActiveRoom
and setActiveRoom should call setState with the new room object
