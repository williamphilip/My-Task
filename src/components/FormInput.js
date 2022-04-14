import React from "react";
import Button from "./Button";
import "../styles/FormInput.css";

class FormInput extends React.Component {
  state = {
    text: ""
  }
  change = (e) => {
    this.setState({
      text: e.target.value
    })  
  }
  submit = (e) => {
    e.preventDefault()
    if(this.state.text !== "") {
      this.props.add(this.state.text)
    }
    this.setState({
      text: ""
    })
  }
  render() {
    return (
      <form style={inputForm} onSubmit={this.submit}>
        <input type="text" style={input} placeholder="add task" onChange={this.change} value={this.state.text}/>
        <Button text="Add" variant="primary" action={this.submit}/>
      </form>
    )
  }
}

export default FormInput;

// CSS inline
const inputForm = {
  background: "#064663",
  color: "#064663",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0"
}

const input = {
  width: "70%",
  height: "50%",
  border: "none",
}