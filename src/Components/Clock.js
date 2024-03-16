import React, { Component } from "react";
const morningSixToEight =
  "https://images.unsplash.com/photo-1551104083-3b336cfd4dca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const morningEightToEleven =
  "https://images.unsplash.com/photo-1465488867967-ffb57e7f0a89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const noonEleventoThree =
  "https://images.unsplash.com/photo-1605811937942-4357eb64314a?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const afterNoonThreeToSix =
  "https://plus.unsplash.com/premium_photo-1690552679122-1660e10f73a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const eveningSixToSeven =
  "https://images.unsplash.com/photo-1586791965591-15d8892f6dd6?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const nightFull =
  "https://plus.unsplash.com/premium_photo-1671336757490-1249b2ccb020?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: {
        hours: "",
        min: "",
        sec: "",
      },
    };
  }

  render() {
    setInterval(
      () =>
        this.setState({
          time: {
            hours: new Date().getHours(),
            min: new Date().getMinutes(),
            sec: new Date().getSeconds(),
          },
        }),
      1
    );
    return (
      <div
        style={{
          background: `url(${
            this.state.time.hours > 19 && this.state.time.hours < 6
              ? nightFull
              : this.state.time.hours >= 6 && this.state.time.hours < 8
              ? morningSixToEight
              : this.state.time.hours >= 8 && this.state.time.hours < 11
              ? morningEightToEleven
              : this.state.time.hours >= 11 && this.state.time.hours < 15
              ? noonEleventoThree
              : this.state.time.hours >= 15 && this.state.time.hours < 18
              ? afterNoonThreeToSix
              : this.state.time.hours >= 18 && this.state.time.hours < 19
              ? eveningSixToSeven
              : nightFull
          }) no-repeat center center`,
        }}
        className="main"
      >
        <h1 className="dispTime">
          {`${this.state.time.hours}:${this.state.time.min}:${this.state.time.sec}`}
        </h1>
      </div>
    );
  }
}
