import React, { Component } from 'react';
import Parameter from './Parameter/Parameter';
import './App.css';

class App extends Component {

  state = {
    height: null,
    weight: null,
    bmi: null,
    message: null,
  }

  heightChangeHandler = (event) => {
    let h = event.target.value;
    if(h>250){
      h=250;
    }
    this.setState({
      height: h,
    })
  }

  weightChangeHandler = (event) => {
    let w = event.target.value;
    if(w>250){
      w=250;
    }
    this.setState({
      weight: w,
    })
  }

  bmiCalculationHandler = () => {
    let h = this.state.height/100;
    let w = this.state.weight;
    let calculatedBmi = 0;
    let msg = "";
    if(h===0){
      msg = "Invalid Height";
    }
    else{
      calculatedBmi = (w/(h*h)).toFixed(1);
      if(calculatedBmi<18.5){
        msg = "Underweight";
      }
      else if(calculatedBmi>=18.5 && calculatedBmi<25){
        msg = "Normal Weight";
      }
      else if(calculatedBmi>=25 && calculatedBmi<30){
        msg = "Over Weight";
      }
      else{
        msg = "Obese";
      }
    }
    this.setState({
      bmi: calculatedBmi,
      message: msg,
    })
  }

  render() {

    let result = null;

    if(this.state.bmi===0){
      result =
        <div>
          <b>{this.state.message}</b>
        </div>
    }
    else if(this.state.bmi!=null){
      result =
        <div>
          <b>Result:</b> Your Body Mass Index is <b>{this.state.bmi}</b>.<br/> This is considered <b>{this.state.message}</b>.
        </div>;
    }

    const style = {
      width: "200px",
      height: "50px",
      margin: "0 auto",
      fontSize: "18px",
      fontWeight: "600",
    }

    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <Parameter type="Height" val={this.state.height} change={this.heightChangeHandler}/>
        <Parameter type="Weight" val={this.state.weight} change={this.weightChangeHandler}/>
        <button style={style} onClick={this.bmiCalculationHandler}>Calculate!</button>
        {result}
      </div>
    );
  }
}

export default App;
