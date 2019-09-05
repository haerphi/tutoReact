//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";
import Timer from "./components/timer";
import Bouton from "./components/bouton";

class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      second: 60
    };
    //binding
    this.plus = this.plusFunction.bind(this);
    this.moins = this.moinsFunction.bind(this);
    this.reset = this.resetFunction.bind(this);
    this.start = this.startFunction.bind(this);
    this.stop = this.stopFunction.bind(this);
    //variable
    this.defaultTimer = 60;
    this.intervalID = null;
  }

  plusFunction() {
    this.setState(prevState => ({
      second: prevState.second + 1
    }));
  }

  moinsFunction() {
    this.setState(prevState => ({
      second: prevState.second - 1
    }));
  }

  decrementFunction() {
    this.setState(prevState => ({
      second: prevState.second - 1
    }));
    if (this.state.second <= 0) {
      clearInterval(this.intervalID);
      this.intervalID = null;
      console.log("FIN");
      //AFFICHER L'ALERT
    }
  }

  startFunction() {
    if (this.intervalID === null) {
      this.intervalID = setInterval(() => {
        this.decrementFunction();
      }, 200);
      console.log("START");
    } else {
      console.log("Already started");
    }
  }

  stopFunction() {
    clearInterval(this.intervalID);
    this.intervalID = null;
    console.log("STOP");
  }

  resetFunction() {
    clearInterval(this.intervalID);
    this.intervalID = null;
    this.setState(() => ({
      second: this.defaultTimer
    }));
    console.log("RESET");
  }

  render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.state.second} />
        <Bouton value={"+"} handleFunction={this.plus} />
        <Bouton value={"-"} handleFunction={this.moins} />
        <Bouton value={"Start"} handleFunction={this.start} />
        <Bouton value={"Stop"} handleFunction={this.stop} />
        <Bouton value={"Reset"} handleFunction={this.reset} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
