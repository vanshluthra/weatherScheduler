import React, { Component } from "react";
import fire from "./config/fire";
import "./login.css"
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { email: "", password: "" };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <section className="login">
        <div className="loginContainer">
          <label>Username</label>
          <input
            type="text"
            id="email"
            name="email"
            autoFocus
            required
            placeholder="Enter your Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.signup}>Signup</button>
          <button onClick={this.login}>Login</button>
        </div>
      </section>

      // <div>
      //     <form>
      //         <input
      //         type="email"
      //         id="email"
      //         name="email"
      //         placeholder="enter your mail"
      //         onChange={this.handleChange}
      //         value={this.state.email}
      //         />
      //         <input
      //         name="password"
      //         type="password"
      //         id="password"
      //         placeholder="enter password"
      //         onChange={this.handleChange}

      //         value={this.state.password}
      //         />
      //         <button onClick={this.login}>Login</button>
      //         <button onClick={this.signup}>Signup</button>

      //     </form>
      // </div>
    );
  }
}
