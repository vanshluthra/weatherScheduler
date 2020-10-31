import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFav } from "../store/actions/noteAction";
import moment from "moment";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toggleFavHandler = () => {
    dispatch(toggleFav(note));
  }; 
  const ediNoteHandler = () => {
      dispatch({type:'EDIT_NOTE', payload:note})
  }
  const heartMarkup = note.favorite ? "turned_in" : "turned_in_not";
  return (
    <div className="note white">
      <div className="right-align">
        <i
          className="material-icons red-text"
          style={{ cursor: "pointer" }}
          onClick={toggleFavHandler}
        >
          {heartMarkup}
        </i>
        <i
          className="material-icons"
          style={{ cursor: "pointer" }}
          onClick={deleteNoteHandler}
        >
          delete
        </i>
      </div>
      <Link to={"/note/" + note.id}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
      <div className="right-align">
        <Link to={`/editform/${note.id}`}>
          <i className="material-icons black-text" onClick={ediNoteHandler}>edit</i>
        </Link>
      </div>
    </div>
  );
};

export default Note;
