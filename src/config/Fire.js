
import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD3zL0N9C3MlRzLZcA-OtWNDPS8iXchc60",
    authDomain: "loginapp-9f860.firebaseapp.com",
    databaseURL: "https://loginapp-9f860.firebaseio.com",
    projectId: "loginapp-9f860",
    storageBucket: "loginapp-9f860.appspot.com",
    messagingSenderId: "1025046296250"
  };
  const fire = firebase.initializeApp(config);
  export default  fire;

