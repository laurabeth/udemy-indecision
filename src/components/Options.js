import React from "react";
import Option from "./Option";

const Options = props => {
  const { handleDeleteOptions, options } = props;
  return (
    <div>
      {props.options.length === 0 && (
        <p>Please add an option to get started.</p>
      )}
      {options.map(x => (
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={x}
          text={x}
        />
      ))}
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove All
      </button>
    </div>
  );
};

export default Options;
