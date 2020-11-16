import React, { Component } from "react";
import fire from "../config/fire";
import { Link } from "react-router-dom";

export default class Display extends Component {
  state = {
    location: "",
  };

  logout() {
    fire.auth().signOut();
  }
  onChange = (event) => {
    this.setState({ location: event.target.value });
    console.log(this.state.location);
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.location);
    this.props.changeWeather(this.state.location);
    console.log("asd");
  };

  render() {
    return (
      <div>
        <div className="user-weather">
          <div className="row">
            <div className="col-md-6">
              <form className="region" onSubmit={this.onSubmit}>
                <input
                  className="regioninput"
                  placeholder="Enter Location"
                  onChange={this.onChange}
                />
                {/* onChange={this.onChange.bind(this) */}

                {/* <input type="submit" value="submit" /> */}
              </form>
            </div>
            <div className="col-md-3 weather-temp">
              <h2>
                {this.props.weather.temperature}
                <sup>o</sup>C , {this.props.weather.description}
              </h2>
              <h5>{this.props.weather.location}</h5>
              <p>
                {this.props.weather.region} , {this.props.weather.country}
              </p>
            </div>

            {/* <div className="col-md-9">
              <img
                className="mainImg"
                src={this.props.weather.img}
                alt="weather-img"
              />
            </div> */}
          </div>

          <div className="row">
            <div className="col-md-3 weather-info">
              <p>
                <b>Wind Speed</b>(km/hr)
              </p>
              <h2>{this.props.weather.wind_speed}</h2>
            </div>

            <div className="col-md-3 weather-info">
              <p>
                <b>Pressure</b>(millibar)
              </p>
              <h2>{this.props.weather.pressure}</h2>
            </div>

            <div className="col-md-3 weather-info">
              <p>
                <b>Precipitation</b>(mm)
              </p>
              <h2>{this.props.weather.precip}</h2>
            </div>

            <div className="col-md-3 weather-info">
              <p>
                <b>Humidity</b>(%)
              </p>
              <h2>{this.props.weather.humidity}</h2>
            </div>
          </div>
          {this.props.status ? (
            <Link to="/schedule">
              <button className="btn blue">Schedule</button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* <button onClick={this.logout}> Logout</button> */}
      </div>
    );
  }
}
