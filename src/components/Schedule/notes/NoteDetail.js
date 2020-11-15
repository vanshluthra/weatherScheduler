import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";

const NoteDetail = (props) => {
  const id = props.match.params.id;
  useFirestoreConnect([{ collection: "note", doc: id }]);
  const note = useSelector(
    ({ firestore: { data } }) => data.note && data.note[id]
  );

  const noteMarkup = !isLoaded(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title left-align">Loading</span>
        </div>
      </div>
    </div>
  ) : isEmpty(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title left-align">
            The note content is empty!
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title left-align">{note.title}</span>
          <p className="left-align">{note.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{moment(note.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  );
  return noteMarkup;
};

export default NoteDetail;
