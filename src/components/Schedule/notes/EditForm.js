import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../store/actions/noteAction";
import useInput from "../customHooks/useInput";
import { useHistory } from "react-router-dom";
import Navbar from "../layout/Navbar";

const EditForm = () => {
  const note = useSelector((state) => state.note);
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id: note.id, title, content }));
    resetContent();
    resetTitle();
    history.push("/schedule");
  };
  return (
    <Fragment>
      <Navbar />
    <div className="section">
      <form onSubmit={submitHandle} className="white">
        <h5 className="grey-text text-darken-3">Edit Schedule</h5>
        <div className="input-field">
          <input
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note_title">
            Schedule Time
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note_content"
            className="materialize-textarea"
            {...bindContent}
          ></textarea>
          <label className="active" htmlFor="note_content">
            Schedule Detail
          </label>
        </div>
        <button style={{
            backgroundColor: "#d44d5c",
            boxShadow: ".2vw .2vw .2vw black",
          }}>Update</button>
      </form>
    </div>
    </Fragment>
  );
};

export default EditForm;
