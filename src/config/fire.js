import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCLuoTnaQKe9Juh3qgXOjHcaxWs2UvGrSk",
    authDomain: "weather-89845.firebaseapp.com",
    databaseURL: "https://weather-89845.firebaseio.com",
    projectId: "weather-89845",
    storageBucket: "weather-89845.appspot.com",
    messagingSenderId: "927451661973",
    appId: "1:927451661973:web:59d1a2f0af54ac35c0fd9c",
    measurementId: "G-GPZWZPXK2C"
  };

  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;