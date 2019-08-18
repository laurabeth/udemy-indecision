import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if(options.length === prevState.options.length) { return; }

    const json = JSON.stringify(options);
    localStorage.setItem("options", json);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(selectedOption) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => selectedOption !== option)
    }));
  }
  
  handleMakeDecision() {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    const { options } = this.state;

    if(!option) {
      return "Enter valid value to add item";
    } else if (options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  }

  render(){
    const subtitle = "Put your life in the hands of a computer."
    const { options } = this.state;

    return(
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={options.length > 0}
          handleMakeDecision={this.handleMakeDecision}
          />
        <Options 
          options={options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}