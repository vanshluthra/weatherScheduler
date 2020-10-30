import React, { Component } from 'react'
import fire from '../config/fire'
import {Link} from "react-router-dom"

export default class Display extends Component {
    constructor(props)
    {
        super(props)
        this.state={}
    }
    logout()
    {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
             
        <div className="user-weather" >
      <div className="row">
      <div className="col-md-6">
        <form className="region" onSubmit={(e) => this.props.changeWeather(e)}>
          <input
            className="regioninput"
            placeholder="Enter Location"
            onChange={(e) => this.props.changeRegion(e.target.value)}
          />
        </form>
      </div>
        <div className="col-md-3 weather-temp">
          <h1>
            {this.props.weather.temperature}
            <sup>o</sup>C , {this.props.weather.description}
          </h1>
          <h4>{this.props.weather.location}</h4>
          <p>
            {this.props.weather.region} , {this.props.weather.country}
          </p>
        </div>

        <div className="col-md-9">
          <img className="mainImg" src={this.props.weather.img} alt="weather-img" />
        </div>
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
      {this.props.status?(<Link to="/schedule"><button>Schedule</button></Link>):(<div></div>)}
    </div>
  
    {/* <button onClick={this.logout}> Logout</button> */}
            </div>
        )
    }
}
