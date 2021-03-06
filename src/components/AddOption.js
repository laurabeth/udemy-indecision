import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { handleAddOption } = this.props;
    const option = e.target.elements.option.value.trim();
    const error = handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input className="add-option__input" name="option" type="text" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
