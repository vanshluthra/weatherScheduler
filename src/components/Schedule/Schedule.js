import React, { Component, Fragment } from 'react'
import Navbar from "./layout/Navbar"
import "./Css/App.css"
import Home from "./home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Favorites from "./notes/Favorites"
import NoteDetail from "./notes/NoteDetail"
import EditForm from "./notes/EditForm"
import Appop from "../../App"  

function App() {
    return (
      <Router>
          <Switch>
            <Route path='/schedule' exact component={Home} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/note/:id' component={NoteDetail} />
            <Route path='/editform/:id' component={EditForm} />
            <Route path='/' exact component={Appop} />
          </Switch>
      </Router>
    );
  }
  
  export default App;




// export default class Schedule extends Component {
//     render() {
//         return (
//             <div className="App">
//         <Navbar />
//         {/* <Switch>
//           <Route path='/home' exact component={Home} />
//           <Route path='/favorites' component={Favorites} />
//           <Route path='/note/:id' component={NoteDetail} />
//           <Route path='/editform/:id' component={EditForm} />
//         </Switch> */}
//     </div>
//         )
//     }
// }
