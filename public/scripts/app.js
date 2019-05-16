"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleMakeDecision = _this.handleMakeDecision.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(selectedOption) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return selectedOption !== option;
          })
        };
      });
    }
  }, {
    key: "handleMakeDecision",
    value: function handleMakeDecision() {
      var options = this.state.options;

      var randomNum = Math.floor(Math.random() * options.length);
      var option = options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      var options = this.state.options;


      if (!option) {
        return "Enter valid value to add item";
      } else if (options.indexOf(option) > -1) {
        return "This option already exists";
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Put your life in the hands of a computer.";
      var options = this.state.options;


      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: options.length > 0,
          handleMakeDecision: this.handleMakeDecision
        }),
        React.createElement(Options, {
          options: options,
          handleDeleteOption: this.handleDeleteOption,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  var title = props.title,
      subtitle = props.subtitle;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      title
    ),
    subtitle && React.createElement(
      "h2",
      null,
      subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  var handleMakeDecision = props.handleMakeDecision,
      hasOptions = props.hasOptions;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: handleMakeDecision,
        disabled: !hasOptions },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  var handleDeleteOptions = props.handleDeleteOptions,
      options = props.options;

  return React.createElement(
    "div",
    null,
    options.map(function (x) {
      return React.createElement(Option, {
        handleDeleteOption: props.handleDeleteOption,
        key: x,
        text: x
      });
    }),
    React.createElement(
      "button",
      { onClick: handleDeleteOptions },
      "Remove All"
    )
  );
};

var Option = function Option(props) {
  var text = props.text;

  return React.createElement(
    "div",
    null,
    text,
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.text);
        } },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      var handleAddOption = this.props.handleAddOption;

      var option = e.target.elements.option.value.trim();
      var error = handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      return React.createElement(
        "div",
        null,
        error && React.createElement(
          "p",
          null,
          error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = (props) => {
//   const { name, age } = props;
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   )
// }

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
