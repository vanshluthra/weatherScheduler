import React from "react";
import Note from "./Note";
import firebase from "../../../config/fire";

var uid = "";

// if (firebase.auth().currentUser !== null) {
//   uid = firebase.auth().currentUser.uid;
// }
// if (firebase.auth().currentUser !== null) {
//   console.log("hello");
// }
const NotesList = ({ notes }) => {
  if (firebase.auth().currentUser !== null) {
    uid = firebase.auth().currentUser.uid;
  }
  if (firebase.auth().currentUser !== null) {
    console.log("hello");
  }
  return (
    <div className="noteslist">
      {notes &&
        notes.map((note) => {
          if (uid === note.userId) return <Note note={note} key={note.id} />;
        })}
      {/* {console.log(userId)} */}
    </div>
  );
};

export default NotesList;
