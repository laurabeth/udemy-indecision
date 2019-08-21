import * as React from "react";

const Option = props => {
  const { text } = props;
  return (
    <div>
      {text}
      <button
        className="button button--link"
        onClick={e => {
          props.handleDeleteOption(props.text);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
