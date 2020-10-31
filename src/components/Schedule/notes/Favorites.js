import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Navbar from "../layout/Navbar";
import NotesList from "./NotesList";

const Favorites = () => {
  useFirestoreConnect([
    {
      collection: "note",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favnotes",
    },
  ]);
  const favnotes = useSelector(state => state.firestore.ordered.favnotes)
  console.log('favnotes',favnotes)
  return (
    <Fragment>
      <Navbar />
      <div><NotesList notes={favnotes} /></div>
      </Fragment>
  );
};

export default Favorites;
