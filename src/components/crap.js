Use the .push() method on your messages reference to add new messages, just as you did when creating new rooms in the RoomList component.

In the message object, there was a username property that held a string referring to the user crafting the message. Populate that property with the current user's username. You'll need to pass user down as a prop from the App component.

Verify that messages are submitted to the active chat room.
Verify that your username is associated with each message you create.
Verify that new messages are associated with no chat rooms other than the active room.

.push( ) created messages to active room



https://github.com/MichaelDCooper/chatroom-app/blob/52d25b30f77a901f9487238946322f7fd515a114/src/App.js


https://github.com/MichaelDCooper/chatroom-app

https://www.bloc.io/resources/creating-firebase-data-using-the-dashboard-ui
