import React from "react";
import useInput from "../customHooks/useInput";
import { addNote } from "../store/actions/noteAction";
import { useDispatch } from "react-redux";
import "../Css/App.css"
const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    resetContent();
    resetTitle();
  };
  return (
    <div className="section">
      <form onSubmit={submitHandle} className="white">
        <h5 className="grey-text text-darken-3">New Schedule</h5>
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
          <label htmlFor="note_content" className="active">
            Schedule Detail
          </label>
        </div>
        <button className="btn purple">Add</button>
      </form>
    </div>
  );
};

export default Form;
