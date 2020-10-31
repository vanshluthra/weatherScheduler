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
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <input
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note_title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note_content"
            className="materialize-textarea"
            {...bindContent}
          ></textarea>
          <label className="active" htmlFor="note_content">
            Note Content
          </label>
        </div>
        <button className="btn purple">Update</button>
      </form>
    </div>
    </Fragment>
  );
};

export default EditForm;
