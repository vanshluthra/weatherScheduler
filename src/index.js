import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { Route, Link } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./components/Schedule/store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import fbconfig from "./config/fire";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbconfig)
  )
);
//"Compose" is a method used to combine multtiple store enhancers such as applymiddleware

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <BrowserRouter>
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/schedule" exact component={Schedule} />
        </BrowserRouter>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
