import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from "../notes/NotesList";
import Navbar from "../layout/Navbar";
import { Fragment } from "react";

const Home = () => {
  useFirestoreConnect([{ collection: "note", orderBy: ["createdAt", "desc"] }]);
  const notes = useSelector((state) => state.firestore.ordered.note);
  console.log(notes);
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row center-align">
          <div className="col s7">
            <Form />
          </div>
          <div className="col s5">
            <NotesList notes={notes} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
