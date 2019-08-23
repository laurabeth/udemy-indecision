import * as React from "react";

const Option = props => {
  const { count, text } = props;
  return (
    <div className="option">
      <p className="option__text">
        {count}. {text}
      </p>
      <button
        className="button button--link"
        onClick={() => {
          props.handleDeleteOption(props.text);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
