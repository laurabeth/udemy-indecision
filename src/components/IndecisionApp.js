import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Options from "./Options";
import React from "react";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = selectedOption => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => selectedOption !== option),
    }));
  };

  handleMakeDecision = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    this.setState({ selectedOption: option });
  };

  handleAddOption = option => {
    const { options } = this.state;

    if (!option) {
      return "Enter valid value to add item";
    } else if (options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option]),
    }));
  };

  handleDismissModal = () => {
    this.setState({
      selectedOption: undefined,
    });
    console.log(this.selectedOption);
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (options.length === prevState.options.length) {
      return;
    }

    const json = JSON.stringify(options);
    localStorage.setItem("options", json);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const subtitle = "Put your life in the hands of a computer.";
    const { options } = this.state;

    return (
      <div className={"background"}>
        <Header subtitle={subtitle} />
        <div className={"container"}>
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          dismiss={this.handleDismissModal}
        />
      </div>
    );
  }
}
