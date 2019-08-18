import React from "react";

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleSubmit(e){
    e.preventDefault();

    const { handleAddOption } = this.props;
    const option = e.target.elements.option.value.trim();
    const error = handleAddOption(option);

    this.setState(() => ({error}));

    if(!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    const { error } = this.state;
    return(
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>  
      </div>
    );
  }
}