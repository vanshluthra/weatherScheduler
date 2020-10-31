import React, { Component, Fragment } from "react";
import fire from "../config/fire";
import Login from "../Login";
import { Route, Router, Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      clicked: true,
    });
  }
  handleClickFalse()
  {
    this.setState({
      clicked:false
    });
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <Fragment>
        {/* <Router> */}
        <div className="row navbar">
          <div className="col-md-6">
            <h1 className="title">Weather App</h1>
          </div>
          <div className="col-md-6">
            {this.props.status ? (
              <button className="logs" onClick={this.logout}>
                {" "}
                Logout
              </button>
            ) : (
              //  (<button className="logs" onClick={this.handleClick}>Login</button>)}
              <Link to="/login">
                <button className="logs" onClick={this.handleClick}>
                  Login
                </button>
              </Link>
            )}

            {/* {this.state.clicked?<Login/>: null} */}
          </div>
        </div>

        {/* </Router> */}
      </Fragment>
    );
  }
}
