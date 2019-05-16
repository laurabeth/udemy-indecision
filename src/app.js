class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    }
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

    this.setState((prevState) => ({options: prevState.options.concat([option])}));
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

IndecisionApp.defaultProps = {
  options: [],
}

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
}

const Action = (props) => {
  const { handleMakeDecision, hasOptions } = props;
    return (
      <div>
        <button 
          onClick={handleMakeDecision}
          disabled={!hasOptions}>
            What should I do?
          </button>
      </div>
    );
}

const Options = (props) => {
  const { handleDeleteOptions, options } = props;
    return(
      <div>
        {options.map((x) => (
          <Option
            handleDeleteOption={props.handleDeleteOption}
            key={x} 
            text={x} 
          />))}
        <button onClick={handleDeleteOptions}>Remove All</button>
      </div>
    );
}

const Option = (props) => {
  const { text } = props;
  return(
    <div>
      {text}
      <button onClick={(e) => {
        props.handleDeleteOption(props.text)
      }}>Remove</button>
    </div>
  );
}

class AddOption extends React.Component {
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

// const User = (props) => {
//   const { name, age } = props;
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));