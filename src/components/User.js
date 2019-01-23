
const provider = new this.props.firebase.auth.GoogleAuthProvider();
this.props.firebase.auth().signInWithPopup( provider );
this.props.firebase.auth().signOut();

//componentDidMount(){
//registers an onAuthStatechanged event handler
//this.props.firebase.auth().onAuthStateChanged( user => {
  //this.props.setUser(user);
//});
//}

render(){
  return(
    //make sign in button
    //onclick should call firebase's singInWithPopup

    //add signout button that call's firebase signout method

    //Render this.props.user.displayName in the User component so that the current user is visible. Consider rendering the text "Guest" for anonymous users.
  );
}
