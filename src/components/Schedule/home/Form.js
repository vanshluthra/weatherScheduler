import React from "react";
import useInput from "../customHooks/useInput";
import { addNote } from "../store/actions/noteAction";
import { useDispatch } from "react-redux";
import "../Css/App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch();
  const classes = useStyles();
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    resetContent();
    resetTitle();
  };
  return (
    <div className="section">
      <form
        onSubmit={submitHandle}
        className="white classes.container"
        noValidate
      >
        <h5 className="grey-text text-darken-3">New Schedule</h5>
        <div className="input-field">
          <TextField
            id="note_title"
            type="datetime-local"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            {...bindTitle}
          />
          {/* <input
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}v
          /> */}
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
        <button className="btn blue">Add</button>
      </form>
    </div>
  );
};

export default Form;
