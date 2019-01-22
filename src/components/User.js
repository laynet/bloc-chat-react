
const provider = new this.props.firebase.auth.GoogleAuthProvider();
this.props.firebase.auth().signInWithPopup( provider );
this.props.firebase.auth().signOut();

render(){
  return(
    //make sign in button
    //onclick should call firebase's singInWithPopup

    //add signout button that call's firebas signout method
  );
}
