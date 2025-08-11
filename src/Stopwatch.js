import React from "react";
import ReactDOM from "react-dom/client";
import TimeList from "./TimeList";
import { timeContext } from "./timeContext";

var timer;
class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
      status: "STOPWATCH",
    };
  }

  static contextType=timeContext;

  startStopwatch = () => {
    if (!this.state.isStart) {
      this.setState({
        isStart: true,
        status: "START",
      });

      timer = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 59) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
          if (this.state.minute == 59) {
            this.setState({
              minute: 0,
              hour: this.state.hour + 1,
            });
          }
        }
      }, 1000);
    }
  };

  stopStopwatch = () => {
    this.setState({
      isStart: false,
      status: "STOP",
    });
    clearInterval(timer);
  };

  resetStopwatch = () => {
    clearInterval(timer);
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      isStart: false,
      status: "STOPWATCH",
    });
  };
  saveTimes = () => {

    let newTime = document.querySelector("h1").innerHTML

    this.context.setTimeArr([... this.context.timeArr,newTime])

  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <div className="main">
     
          {!this.props.theme ? (
            <div className="mood" onClick={this.props.handleTheme}>
              <i className="fi fi-rc-moon"></i>
            </div>
          ) : (
            <div className="mood" onClick={this.props.handleTheme}>
              <i className="fi fi-rr-brightness"></i>
            </div>
          )}

          <div className="timer-section">
            <div className="timer-content">
              <div className="stopwatch">
                <i className="fi fi-tr-stopwatch"></i>
                <p>{this.state.status}</p>
                <h1>{`${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
                  s > 9 ? s : "0" + s
                }`}</h1>
              </div>
              <div className="btn-section">
                <div className="reset" onClick={this.resetStopwatch}>
                  <i className="fi fi-br-rotate-left"></i>
                </div>

                {!this.state.isStart ? (
                  <div className="start" onClick={this.startStopwatch}>
                    <i className="fi fi-sc-play"></i>
                  </div>
                ) : (
                  <div className="stop" onClick={this.stopStopwatch}>
                    <i className="fi fi-sc-stop"></i>
                  </div>
                )}
                <div className="lap" onClick={this.saveTimes}>
                  <i className="fi fi-br-time-fast"></i>
                </div>
              </div>
            </div>
          </div>
          
      
        <TimeList>{this.context.timeArr}</TimeList>
      </div>
    );
  }
}
export default Stopwatch;
