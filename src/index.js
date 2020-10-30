import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import{ Route, Router,Link} from "react-router-dom";
import Schedule from "./components/Schedule";


ReactDOM.render(
  <BrowserRouter>
<Route path="/" component={App}/>
<Route path="/login" component={Login}/>
<Route path="/schedule" component={Schedule}/>

</BrowserRouter>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
